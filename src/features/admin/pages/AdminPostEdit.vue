<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchMockPosts, type Post } from '../../../mocks/posts'
import { marked } from 'marked'

const route = useRoute()
const router = useRouter()
const postId = Number(route.params.id)

const post = fetchMockPosts().find(p => p.id === postId) as (Post & { content?: string }) | undefined

const title = ref(post?.title || '')
const content = ref(post?.content || '')
const htmlPreview = computed(() => marked(content.value))
</script>

<template>
  <div v-if="post" class="post-edit-container">
    <div class="title-input-group">
      <label class="label">タイトル</label>
      <input
        v-model="title"
        type="text"
        class="title-input"
        placeholder="ここにタイトルを入力"
      />
    </div>

    <div class="content-grid">
      <div>
        <label class="label">本文（Markdown）</label>
        <textarea
          v-model="content"
          class="content-textarea"
          placeholder="本文をMarkdownで記述"
        ></textarea>
      </div>

      <div class="preview-box">
        <h2 class="preview-title">プレビュー</h2>
        <div class="preview-content" v-html="htmlPreview"></div>
      </div>
    </div>

    <div class="button-group">
      <button class="btn-save">保存</button>
      <button @click="router.back()" class="btn-cancel">戻る</button>
    </div>
  </div>

  <div v-else class="text-red-600 text-center mt-10">
    <p>対象の投稿が見つかりません</p>
  </div>
</template>

<style scoped>
.post-edit-container {
  max-width: 1280px;
  margin: 3rem auto;
  padding: 0 2rem;
}
.title-input-group {
  margin-bottom: 2.5rem;
}
.label {
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.title-input {
  width: 100%;
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  outline: none;
  box-sizing: border-box;
}
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.content-textarea {
  width: 100%;
  height: 600px;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  resize: none;
  font-size: 1rem;
  line-height: 1.75rem;
  color: #1f2937;
  outline: none;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}
.preview-box {
  width: 100%;
  height: 600px;
  overflow-y: auto;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}
.preview-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 1rem;
}
.preview-content {
  max-width: none;
}
.button-group {
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;
  gap: 1rem;
}
.btn-save,
.btn-cancel {
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  color: #ffffff;
}
.btn-save {
  background-color: #16a34a;
}
.btn-save:hover {
  background-color: #15803d;
}
.btn-cancel {
  background-color: #6b7280;
}
.btn-cancel:hover {
  background-color: #4b5563;
}
</style>