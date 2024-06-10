<template>
  <div class="home-container">
    <img src="@/assets/pig.png" alt="Piggy Bank" class="main-image"> <!-- 경로 수정 -->
    <div class="button-container">
      <router-link to="/expense" class="btn btn-primary">Expense</router-link>
      <router-link to="/income" class="btn btn-primary">Income</router-link>
    </div>
  </div>
</template>
<script setup>
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.main-image {
  max-width: 300px;
  margin-bottom: 20px;
}
.button-container {
  display: flex;
  gap: 10px;
}
</style>