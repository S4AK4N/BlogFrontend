import PostList from '../features/client/pages/PostList.vue'
import PostDetail from '../features/client/pages/PostDetail.vue'
import AdminLogin from '../features/admin/pages/AdminLogin.vue'
import AdminPostList from '../features/admin/pages/AdminPostList.vue'
import AdminPostEdit from '../features/admin/pages/AdminPostEdit.vue'

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
    path: '/admin/posts',
    name: 'AdminPostList',
    component: AdminPostList
  },
  {
    path: '/admin/posts/edit/:id',
    name: 'AdminPostEdit',
    component: AdminPostEdit
  }
]