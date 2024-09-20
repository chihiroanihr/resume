<template>
  <div>
    <ContentsContainer :contents="contents" more-link="https://note.com/chihiroanihr"/>
  </div>
</template>

<script setup lang="ts">
import { data } from '../data/lapras.data.ts'
import ContentsContainer from './ContentsContainer.vue';

const contents = data.noteArticles.map((article) => {
  return {
    isOverlayTitle: true,
    title: article.title,
    url: article.url,
    ogImage: article.ogImage as string
  }
})
</script>

<style lang="scss" scoped></style>
