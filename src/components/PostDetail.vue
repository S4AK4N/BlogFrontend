<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { fetchMockPosts, type Post } from '../mocks/posts'

// 
const route = useRoute()
// idは文字列なのでNumber型に変換
const postId = Number(route.params.id)
// モックAPIから該当のモックデータを取得
const post: Post | undefined = fetchMockPosts().find(p => p.id === postId)

const router = useRouter()

</script>

<template>
  <div v-if="post" class="post-detail">
    <h1 class="post-title">{{ post.title }}</h1>
    <div class="post-meta">
      <span class="author">{{ post.nickname }}（@{{ post.author }}）</span>
      <span class="date">｜{{ post.date }}</span>
    </div>
    <hr />
    <div class="post-content">
      <p>※ この投稿にはまだ本文がありません</p>
    </div>
    <div class="back-button">
      <button @click="router.back()">← 投稿一覧に戻る</button>
    </div>
  </div>
  <div v-else class="post-not-found">
    <p>記事が見つかりません</p>
  </div>
</template>

<style scoped>
.post-title {
  font-size: 1.5rem;
}
.back-button {
  margin-top: 1.0rem;
}
.back-button button {
  background-color: #444;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.back-button button:hover {
  background-color: #333;
}
</style>