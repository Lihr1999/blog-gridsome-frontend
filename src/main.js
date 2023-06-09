// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// 引入自己的css文件，内部包含谷歌字体、初始化css的样式
import './assets/css/index.css'


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    },
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
