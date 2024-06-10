<template>
  <div>
    <!-- 헤더를 보이지 않도록 설정 -->
    <Header v-if="showHeader" />
    <div class="container mt-4">
      <!-- 수정: router-view 컴포넌트 추가 -->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';

const showHeader = ref(true); // 수정: 헤더를 기본적으로 표시하도록 변경
</script>