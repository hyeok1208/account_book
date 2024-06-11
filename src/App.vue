<template>
  <div>
    <!-- showHeader 값이 true일 때만 헤더 표시 -->
    <Header v-if="showHeader" />
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/Header.vue";

const showHeader = ref(true); // 다른 페이지에서는 헤더를 기본적으로 표시

const currentRoute = useRoute();

// 현재 페이지가 Home.vue인 경우에만 헤더를 숨김
watch(
  currentRoute,
  (newRoute) => {
    if (newRoute.name === "home") {
      showHeader.value = false;
    } else {
      showHeader.value = true;
    }
  },
  { immediate: true }
);
</script>
