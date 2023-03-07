const sidebarConfig = require('./sidebar.config.json')

module.exports = {
    base: "/myblog/",
    // 添加浏览器图标
    head: [
        ["link", { rel: "icon", href: "favicon.ico" }],
    ],
    title: '浪漫理想主义',
    description: '愿阳光打在脸上，温暖留在心里',
    themeConfig: {
        logo: '143.png', 
        nav: [
            {
                text: '思绪收藏室',
                link: '/2.思绪收藏室/' 
            },
            {
                text: "讲个故事",
                link : '/3.讲个故事/'
            },
            {
                text: '观书有感',
                link: '/4.观书有感/《也许你该找个人谈谈》读后感.md'
            },
            
            // {
            //     text: '学习',
            //     items: [
            //         { text: '英语', link: '/study/english/english01' },
            //         { text: '数学', link: '/study/math/math01' }
            //     ]
            // },
        ],
        sidebar: sidebarConfig,
        lastUpdated: '上次更新'
    },
    plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'uLZNHyTMS2yhQUQqdekgaw7a-gzGzoHsz',
          appKey: 'yPhtBqfHictmjlhIb9JRB3Fb',
        //   visitor: true // 阅读量统计
        }
      }
    ]
  ]
}