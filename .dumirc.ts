import { defineConfig } from 'dumi';

const repo = 'BYSWS2023';

export default defineConfig({

  title: 'BYSWS2023',
  mode: 'site',
  devServer: {
    port: 1998 // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  themeConfig: {
    name: "BY.S",
    logo: "/logo.png",
    footer: "Copyright © 2022-present | Powered by self",
    socialLinks: {
      github: 'https://github.com/Immortalsby/BYSWS2023',
      linkedin: 'https://www.linkedin.com/in/boyuan-shi-9861b7157/',
    },
  },
  favicons: [
    '/favicon.ico'
  ],
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'fr-FR', name: 'FR' },
    { id: 'zh-CN', name: '中文' },
  ],
});
