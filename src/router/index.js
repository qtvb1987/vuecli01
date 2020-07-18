import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'
Vue.use(VueRouter) // 引入router插件

const routes = [{
    name: 'home',
    path: '/',
    component: Home,
    children: [{
        path: "/list",
        name: "list",
        component: List
      },
      {
        path: "/detail/:id",
        name: 'detail',
        component: Detail,
        props: true
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      auth: true
    }, //需要认证
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !window.isLogin) {
    if (window.confirm('请登陆！')) {
      window.isLogin = true;
      next();
    } else {
      next('/');
      // 失败回首页
    }
  } else {
    next();
  }
})

export default router