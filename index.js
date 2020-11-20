// @ts-check

import fetch from "node-fetch";

export const baseBloxlinkAPIUrl = "https://api.blox.link/v1/";
export const baseRobloxAPIUrl = "https://api.roblox.com/";

/**
 * @param {string|number} userId
 * @param {string|number} [guildId]
 */
export default async function getBloxlinkUser(userId, guildId) {
  // Parameter Checks
  if (!userId) return { error: "Did not provide 'userId' parameter." };
  if (isNaN(Number(userId)))
    return { error: "The 'userId' parameter must be a number." };
  if (guildId && isNaN(Number(userId)))
    return { error: "The 'guildId' parameter must be a number." };

  // Send API request to Bloxlink for information
  let response;
  if (guildId) {
    response = await (
      await fetch(`${baseBloxlinkAPIUrl}user/${userId}?guild=${guildId}`)
    ).json();
  } else {
    response = await (
      await fetch(`${baseBloxlinkAPIUrl}user/${userId}`)
    ).json();
  }

  // Check if being ratelimited
  if (response.status === 429) {
    return { status: "error", error: "You are being ratelimited." };
  }

  // Handle user not being linked with Bloxlink
  if (response.error === "This user is not linked with Bloxlink.") {
    return response;
  }

  // Get latest username
  const username = await (
    await fetch(`${baseRobloxAPIUrl}users/${response.primaryAccount}`)
  ).json();

  // Return data
  return {
    discordId: userId,
    robloxId: response.primaryAccount,
    robloxUsername: username.Username,
  };
}
