module.exports = {
    base: "/myBlog/",
    // 添加浏览器图标
    head: [
        ["link", { rel: "icon", href: "143.png" }],
    ],
    title: '浪漫理想主义',
    description: '愿阳光打在脸上，温暖留在心里',
    themeConfig: {
        logo: '143.png', 
        nav: [
            // {
            //     text: '主题1',
            //     link: '/guide/' 
            // },
            // {
            //     text: '主题2',
            //     link: '/test2/'
            // },
            // {
            //     text: '学习',
            //     items: [
            //         { text: '英语', link: '/study/english/english01' },
            //         { text: '数学', link: '/study/math/math01' }
            //     ]
            // },
        ],
        sidebar: {
            '/随风集/': [
                
                {
                    title: "随风",
                    children: ['这是一篇']
                }
            ],
        },
        
    }
}