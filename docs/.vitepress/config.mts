import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "小赵资源站",
  titleTemplate: ':title ｜ 小赵资源站',
  description: "小赵资源站,百家讲坛,电影,电视剧,动漫,小说,音乐,游戏,软件,学习资源等",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '百家讲坛', link: '/baijiajiangtan' },
      { text: '教育【书籍/课程/教辅/小说】', link: '/jiaoyu' 
       },
      { text: '软件【Windows 软件，苹果软件，黑科技】', link: '/' },
      { text: '影视',
        items: [
          { text: '电影', link: '/item-1' },
          { text: '电视剧', link: '/item-2' },
          { text: '综艺', link: '/item-3' },
          { text: '动漫', link: '/item-3' },
          { text: '音乐', link: '/item-3' },
        ]
       },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
  }
})
