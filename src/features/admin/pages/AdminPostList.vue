<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchMockPosts } from '../../../mocks/posts'
import type { Post } from '../../../mocks/posts'

const posts = ref<Post[]>([])
const router = useRouter()

onMounted(() => {
  try {
    const data = fetchMockPosts()
    console.log('取得したモックデータ:', data)
    posts.value = data
  } catch (error) {
    console.error('データ取得エラー:', error)
  }
})

const onEdit = (id: number) => {
  router.push(`/admin/posts/edit/${id}`)
}
const onDelete = (id: number) => {
  console.log('削除実行:', id)
}
</script>

<template>
  <div class="admin-dashboard">
    <h1>投稿管理</h1>
    <table>
      <thead>
        <tr>
          <th>タイトル</th>
          <th>作成者</th>
          <th>日付</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-if="posts.length">
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.nickname }}</td>
          <td>{{ post.date }}</td>
          <td>
            <button @click="onEdit(post.id)">編集</button>
            <button @click="onDelete(post.id)">削除</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="4" style="text-align: center;">投稿が存在しません</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.admin-dashboard {
  max-width: 960px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f5f5f5; /* 淡いグレーに変更 */
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.admin-dashboard h1 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.admin-dashboard table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.admin-dashboard th,
.admin-dashboard td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}

.admin-dashboard th {
  background-color: #e0f2f1; /* 薄緑っぽいグレー寄り */
}

.admin-dashboard button {
  margin-right: 0.5rem;
  padding: 0.4rem 0.75rem;
  font-size: 0.85rem;
  background-color: #2f9e6e; /* 少し抑えた緑 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.admin-dashboard button:hover {
  background-color: #277d59; /* hoverも暗めに */
}
</style>
