# Bloxlink API

bloxlink is a simple npm module to interact with the biggest Roblox Discord Bot, Bloxlink and with his API.

## Installation

Using [npm](https://www.npmjs.com/) to install bloxlink.

```bash
npm install bloxlink@latest  
```

## Example

```javascript
const bloxlink = require('bloxlink');

(async() => {
let getroblox = await bloxlink('528288312448909312');

console.log(getroblox);
}) ()

```

The example above will log on the console the information of the linked account on bloxlink with the user id 528288312448909312:

```javascript
{ discordId: '528288312448909312', robloxId: '263468606', robloxUsername: 'TheMasterMuff' }
```

If there is no account linked it will return something like:

```javascript
{ status: 'error', error: 'This user is not linked with Bloxlink.' }
```

If you hit the limit of 60 request per 60 seconds it will return something like:

```javascript
{ status: 'error', error: 'You are being ratelimited.'}
```

Hope this makes your life a bit easier, have a good day!