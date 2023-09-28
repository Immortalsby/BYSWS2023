import { defineConfig } from 'dumi';

export default defineConfig({
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
