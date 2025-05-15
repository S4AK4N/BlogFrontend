import PostList from '@/components/PostList.vue'
import PostDetail from '@/components/PostDetail.vue';
import AdminLogin from '../components/AdminLogin.vue';
import AdminPostList from '@/components/AdminPostList.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: PostList,
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/AdminPostList',
    name: 'AdminPostList',
    component: AdminPostList
  },
  
]