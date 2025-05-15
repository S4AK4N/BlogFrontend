<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Post } from '../mocks/posts'
import { fetchMockPosts } from '../mocks/posts'

const posts = ref<Post[]>([])

onMounted(() => {
  posts.value = fetchMockPosts()
})
</script>

<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="post-card"
    >
      <p class="author">@{{ post.author }}（{{ post.nickname }}）</p>
      <p class="date">{{ post.date }}</p>
      <h2 class="title">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.post-card {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
}

.author,
.date,
.likes {
  font-size: 0.9rem;
  color: #555;
}

.title {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: bold;
}

.tags {
  margin: 0.5rem 0;
}

.tag {
  display: inline-block;
  background: #eef;
  padding: 0.2rem 0.5rem;
  margin-right: 0.3rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>