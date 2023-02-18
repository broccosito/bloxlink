# Bloxlink API Wrapper

`bloxlink` is a simple NPM module to interact with the [Bloxlink](https://blox.link/developers) API.

## Installation

Use [NPM](https://www.npmjs.com/) to install Bloxlink.

```bash
npm install bloxlink@latest
```

## Example

Remember to replace the `apiKey` with your own, you can get one [here](https://blox.link/dashboard/developer).

```js
// @ts-check

import getBloxlinkUser from "./index.js";

const verifyUser = async (userId, apiKey, guildId) => {
  const response = await getBloxlinkUser(userId, apiKey, guildId);

  console.log(response);

  return response;
};

verifyUser("5282883124489093121", "api key", "372036754078826496").catch(
  (e) => {
    console.log(e);
  }
);
```

The example above will log the information of the linked account on Bloxlink with the user ID of `528288312448909312`:

```json
{
  "discordId": "528288312448909312",
  "robloxId": "263468606",
  "robloxUsername": "TheMasterMuff",
  "userData": {
    "Id": 263468606,
    "Username": "TheMasterMuff",
    "AvatarUri": null,
    "AvatarFinal": false,
    "IsOnline": false
  }
}
```

If there is no Bloxlink account linked with a user it or something else goes wrong it will throw an error you'll need to catch.

Hope this makes your life a bit easier, have a good one!
