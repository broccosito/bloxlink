// @ts-check

import fetch from "node-fetch";

export const baseBloxlinkAPIUrl = "https://v3.blox.link/";
export const baseRobloxAPIUrl = "https://api.roblox.com/";

/**
 * @param {string|number} userId
 * @param {string} [apiKey]
 * @param {string|number} [guildId]
 */
export default async function getBloxlinkUser(userId, apiKey, guildId) {
  // Parameter Checks
  if (!userId) return { error: "Did not provide 'userId' parameter." };

  if (isNaN(Number(userId)))
    return { error: "The 'userId' parameter must be a number." };

  if (!apiKey) return { error: "Did not provide 'apiKey' parameter." };

  if (guildId && isNaN(Number(userId)))
    return { error: "The 'guildId' parameter must be a number." };

  let requestUrl = `${baseBloxlinkAPIUrl}developer/discord/${userId}`;
  guildId && (requestUrl += `?guildId=${guildId}`);

  // Send API request to Bloxlink for information
  const response = await (
    await fetch(requestUrl, {
      headers: {
        "api-key": apiKey,
      },
    })
  ).json();

  if (!response.success) {
    const r = response.reason || response.error || "Unknown Error";
    throw new Error("Bloxlink API Error: " + r);
  }

  // Get latest username
  const username = await (
    await fetch(
      `${baseRobloxAPIUrl}users/${
        response.user.robloxId || response.user.primaryAccount
      }`
    )
  ).json();

  // Return data
  return {
    success: true,
    discordId: userId,
    robloxId: response.user.robloxId || response.user.primaryAccount,
    robloxUsername: username.Username,
    userData: username,
  };
}
