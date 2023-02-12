export default defineEventHandler(async (event) => {

    //handle query params
    const {name, id} = getQuery(event)

    //handle post data
    const { age } = await readBody(event)

    //api call with private key
    // const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=jbo2Q9guTBoH5XPmJtv6XVGZF3JYb8EyHCbkAqJp")

    return data
})