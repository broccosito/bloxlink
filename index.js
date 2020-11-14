const fetch = require('node-fetch')

async function bloxlink(user_id){
    if(!user_id) return { error: 'Missing Discord ID.' }
    if (typeof user_id != "string") return { error: 'Discord ID Parameter needs to be a string.' }
    let numbercheck = isNaN(user_id)
    if(numbercheck === true) return { error: 'Invalid Discord ID.' }
    let base_url = 'https://api.blox.link/v1/'
    let roblox_base_url = 'https://api.roblox.com/users/'

    let request_api = await fetch(base_url + `user/${user_id}`)
    
    if(request_api.status === 429) {
        return { status: 'error', error: 'You are being ratelimited.'}
    }

    let response_api = await request_api.json()


    if(response_api.error === "This user is not linked with Bloxlink.") {
        return response_api
    }
    

    const username_request = await fetch(roblox_base_url + response_api.primaryAccount)
    const username_response = await username_request.json()

    const finalres = { discordId: user_id, robloxId: response_api.primaryAccount, robloxUsername: username_response.Username}
    return finalres
}

module.exports = bloxlink;

