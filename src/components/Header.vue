<template>
  <!-- 네비게이션 바 -->
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container-fluid">
      <!-- 브랜드 이름 -->
      <span class="navbar-brand">뷰라클 가계부</span>
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
            <router-link class="nav-link" to="/">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/expense">지출</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/income">수입</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/total">합산 금액</router-link>
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
              <!-- 프로필 아이콘 수정 -->
              <i
                class="fa-regular fa-user"
                style="size: 30px; color: white"
              ></i>
            </a>
            <!-- 드롭다운 메뉴 -->
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
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
import { ref } from "vue";
// 네비게이션 바 토글 상태를 관리하는 ref
const isNavShow = ref(false);
</script>
<style scoped>
@font-face {
  font-family: "TheJamsil5Bold";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
    format("woff2");
  font-weight: 300;
  font-style: normal;
}
/* 네비게이션 링크 사이의 간격 설정 */
.navbar-nav .nav-item {
  margin-left: 1rem;
}
/* 드롭다운 메뉴의 위치 설정 */
.navbar-nav .dropdown-menu {
  right: 0;
  left: auto;
}
/* 커스텀 네비게이션 바 색상 설정 */
.custom-navbar {
  background-color: #e24ac4; /* 원하는 색상으로 변경 */
}
.custom-navbar .nav-link {
  color: white; /* 네비게이션 링크 텍스트 색상 */
}
.custom-navbar .navbar-brand {
  color: yellow; /* 뷰라클 이름 텍스트 색상 */
  font-family: "TheJamsil5Bold";
}
.custom-navbar .navbar-toggler-icon {
  filter: invert(1); /* 토글 버튼 아이콘 색상 변경 */
}
/*메뉴바 글씨체 설정*/
.nav-item {
  font-family: "TheJamsil5Bold";
}
</style>
