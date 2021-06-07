import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import('../components/dashboardLayout.vue')

function loadView(view) {
    return () => import(`../components/dashboardContents/${view}.vue`)
}


const routes = [
    {
        path: '/',
        component: DashboardLayout,
        children: [
            {
                name: 'homePageController',
                path: '',
                component: loadView('homePageController')
            },
            {
                name: 'loginController',
                path: '/login',
                component: loadView('loginController')
            },
            {
                name: 'masterDataController',
                path: '/masterdata',
                component: loadView('masterDataController')
            },
            {
                name: 'masterIklanController',
                path: '/masteriklan',
                component: loadView('masterIklanController')
            },
            {
                name: 'iklanController',
                path: '/iklan',
                component: loadView('iklanController')
            },
            {
                name: 'feedbackController',
                path: '/feedback',
                component: loadView('feedbackController')
            },
            {
                name: 'reportController',
                path: '/report',
                component: loadView('reportController')
            },
            {
                name: 'userController',
                path: '/user',
                component: loadView('userController')
            },
            {
                name: 'vendorController',
                path: '/vendor',
                component: loadView('vendorController')
            },
            {
                name: 'kotaProvinsiController',
                path: '/kotaprovinsi',
                component: loadView('kotaProvinsiController')
            },
            {
                name: 'kategoriController',
                path: '/kategori',
                component: loadView('kategoriController')
            },
            {
                name: 'highlightController',
                path: '/highlight',
                component: loadView('highlightController')
            },
        ]
    }, 
]

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'loginController' &&  JSON.parse(localStorage.getItem('apiData')) === null) next({ name: 'loginController' })
    else next()
  })

export default router