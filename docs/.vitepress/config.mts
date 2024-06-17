import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Bszx-hooks",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // nav: [
        // { text: 'Home', link: '/' },
        // { text: 'Examples', link: '/markdown-examples' }
        // ],

        sidebar: [
            // {
            //   text: 'Examples',
            //   items: [
            //     { text: 'Markdown Examples', link: '/markdown-examples' },
            //     // { text: 'Runtime API Examples', link: '/api-examples' }
            //   ]
            // }
            {
                text: 'State',
                items: [
                    {text: 'useTitle', link: '/state/useTitle'},
                    {text: 'useBoolean', link: '/state/useBoolean'},
                    {text: 'useHash', link: '/state/useHash'},
                    {text: 'useHistory', link: '/state/useHistory'},
                    {text: 'useToggle', link: '/state/useToggle'},
                ]
            },
            {
                text: 'Dom',
                items: [
                    {text: 'useEvent', link: '/dom/useEvent'},
                    {text: 'useEventRef', link: '/dom/useEventRef'},
                ]
            },
            {
                text: 'Lifecycles',
                items: [
                    {text: 'useLifecycles', link: '/lifecycles/useLifecycles'}
                ]
            },
            {
                text: 'SideEffects',
                items: [
                    {text: 'useDebounce', link: '/effects/useDebounce'},
                    {text: 'useDebounceFn', link: '/effects/useDebounceFn'},
                    {text: 'useInterval', link: '/effects/useInterval'},
                    {text: 'useTimeout', link: '/effects/useTimeout'},
                    {text: 'useTimeoutFn', link: '/effects/useTimeoutFn'},
                ]
            },
            {
                text: 'Storage',
                items: [
                    {text: 'useLocalStorage', link: '/storage/useLocalStorage'},
                    {text: 'useSessionStorage', link: '/storage/useSessionStorage'},
                    {text: 'useStorage', link: '/storage/useStorage'}
                ]
            },
            {
                text: 'Sensors',
                items: [
                    {text: 'useWindowScroll', link: '/sensors/useWindowScroll'},
                    {text: 'useResize', link: '/sensors/useResize'},
                    {text: 'useScroll', link: '/sensors/useScroll'},
                    {text: 'useScrollRef', link: '/sensors/useScrollRef'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/yinqingnan/vuehooks'}
        ]
    }
})
