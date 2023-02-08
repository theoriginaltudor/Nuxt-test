// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: "Nuxt Test",
            meta: [
                {name: 'description', content: 'Everything about nuxt js'}
            ]
        }
    }
})
