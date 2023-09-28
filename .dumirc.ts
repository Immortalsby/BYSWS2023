import { defineConfig } from 'dumi';

// const repo = 'BYSWS2023';

export default defineConfig({

  // title: 'BYSWS2023',
  // base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  themeConfig: {
    name: "BY.S",
    logo: "/logo.png",
    footer: "Copyright © 2023 | Powered by self",
    socialLinks: {
      github: 'https://github.com/Immortalsby/BYSWS2023',
      linkedin: 'https://www.linkedin.com/in/boyuan-shi-9861b7157/',
    },
    nav: {
      'en-US': [{ title: 'Coding', link: '/coding' },{ title: 'Blog', link: '/blog' }],
      'zh-CN': [{ title: '编程', link: '/zh-CN/coding' },{ title: '博客', link: '/zh-CN/blog' }],
      'fr-FR': [{ title: 'Coding', link: '/fr-FR/coding' },{ title: 'Blog', link: '/fr-FR/blog' }],
    },
  },
  favicons: [
    '/favicon.ico'
  ],
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'fr-FR', name: 'FR' },
    { id: 'zh-CN', name: '中文' },
  ]
});
