import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'


export default [
    {
        path: '/home',
        component: Home,
        meta: {
            show: true
        }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword?',
        name: 'search',
        component: Search,
        meta: {
            show: true
        },
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    },
    {
        path: '*',
        redirect: '/home',
    }
]