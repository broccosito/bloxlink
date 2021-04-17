export const baseBloxlinkAPIUrl: string;
export const baseRoblowAPIUrl: string;

interface ResponseError {
  status: 'error';
  error: 'You are being ratelimited.' | 'This user is not linked with Bloxlink.';
}

interface User {
  discordId: string;
  robloxId: string;
  robloxUsername: string;
}

export default async function getBloxlinkUser(
  userId: string | number, 
  guildId?: string | number
): Promise<User | ResponseError>