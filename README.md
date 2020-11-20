# The Bloxlink API

`bloxlink` is a simple NPM module to interact with the [Bloxlink](https://blox.link/developers) API.

## Installation

Use [NPM](https://www.npmjs.com/) to install Bloxlink.

```
npm install bloxlink@latest
```

## Example

```js
import getBloxlinkUser from "bloxlink";

(async () => {
  console.log(
    await getBloxlinkUser("528288312448909312", "372036754078826496")
  );
})();
```

The example above will log the information of the linked account on Bloxlink with the user ID of `528288312448909312`:

```json
{
  "discordId": "528288312448909312",
  "robloxId": "263468606",
  "robloxUsername": "TheMasterMuff"
}
```

If there is no Bloxlink account linked with a user it will return:

```json
{ "status": "error", "error": "This user is not linked with Bloxlink." }
```

If you hit the rate-limit of 60 requests per 60 seconds it will return:

```json
{ "status": "error", "error": "You are being ratelimited." }
```

Hope this makes your life a bit easier, have a good one!
