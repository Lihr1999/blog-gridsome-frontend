// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // 支持md文件中获取数据
    {
      use: '@gridsome/source-filesystem',
      options: {
        // GraphQL类型和模板名称 src/templates中的.vue文件必须与typeName匹配，才能有模板。
        typeName: 'BlogPost', // 抓取哪个类型的文件，在SQL中会有BlogPost和allBlogPost两个节点的值
        path: './content/blog/**/*.md', // 从哪抓取文件
      }
    },
    // 支持外部strapi中获取数据
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'], // 默认是typeName + contentTypes。即：StrapiPost
        // typeName: 'Strapi',
        singleTypes: ['general'],
        // // Possibility to login with a Strapi user,
        // // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
