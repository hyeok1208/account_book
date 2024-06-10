<template>
  <!-- 네비게이션 바 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- 브랜드 이름 -->
      <span class="navbar-brand">account_book</span>
      <!-- 반응형 네비게이션 바 토글 버튼 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 네비게이션 바 콘텐츠 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- 왼쪽에 정렬된 네비게이션 링크 -->
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <!-- router-link를 사용하여 페이지 이동 -->
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/expense">Expense</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/income">Income</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/total">Total</router-link>
          </li>
        </ul>
        <!-- 오른쪽에 정렬된 프로필 이미지와 드롭다운 메뉴 -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <!-- 귀여운 프로필 이미지 -->
              <img
                src="https://placekitten.com/30/30"
                alt="Profile"
                class="rounded-circle"
              />
            </a>
            <!-- 드롭다운 메뉴 -->
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// 네비게이션 바 토글 상태를 관리하는 ref
const isNavShow = ref(false);
</script>

<style scoped>
/* 네비게이션 링크 사이의 간격 설정 */
.navbar-nav .nav-item {
  margin-left: 1rem;
}

/* 드롭다운 메뉴의 위치 설정 */
.navbar-nav .dropdown-menu {
  right: 0;
  left: auto;
}
</style>