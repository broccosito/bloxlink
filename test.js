// @ts-check

import getBloxlinkUser from "./index.js";

const verifyUser = async (userId, apiKey, guildId) => {
  const response = await getBloxlinkUser(userId, apiKey, guildId);

  console.log(response);

  return response;
};

verifyUser("5282883124489093121", "your api key", "372036754078826496").catch(
  (e) => {
    console.log(e);
  }
);
