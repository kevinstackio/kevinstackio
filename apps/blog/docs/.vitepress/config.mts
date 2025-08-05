import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Kevin Blog",
    description: "Kevin's personal blog",
    head: [
        ['link', {rel: 'icon', href: '/images/icons/vitepress.svg'}]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/images/icons/vitepress.svg',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/kevinstackio'}
        ]
    }
})
