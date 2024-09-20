import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "金悧娜の職務経歴書",
  description: "金悧娜の職務経歴書",
  base: '/resume/',
  head: [
    // favicons
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: 'favicon/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: 'favicon/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    // ogp
    ['meta', { property: 'og:image', content: 'https://chihiroanihr.github.io/resume/images/og.png' }],
    ['meta', { property: 'og:title', content: 'Resume of Rhina Kim' }],
    ['meta', { property: 'og:description', content: 'Rhina Kim\'s Resume - Creative Engineer (JA)' }],
    ['meta', { property: 'og:url	', content: 'https://chihiroanihr.github.io/resume' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [],
    outline: {
      level: [2, 3]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chihiroanihr/resume' }
    ],
    editLink: {
      pattern: 'https://github.com/chihiroanihr/resume/edit/master/docs/:path'
    }
  },
  lastUpdated: true,
})
