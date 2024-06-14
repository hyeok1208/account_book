<template>
  <div class="styleapp">
    <div class="container">
      <div class="header">
        <h1>2024년</h1>
        <br />
        <h1>{{ selectedMonth }}월 합산</h1>
      </div>
      <div class="Total">
        <div class="Total-Income">
          <div class="label-Income">총 수입</div>
          <p>{{ Number(totalIncome).toLocaleString() }}</p>
        </div>
        <div class="Total-Expense">
          <div class="label-Expense">총 지출</div>
          <p>{{ Number(totalExpense).toLocaleString() }}</p>
        </div>
        <div class="Total-Profit">
          <div class="label-Profit">순수익</div>
          <p>{{ Number(totalIncome - totalExpense).toLocaleString() }}</p>
        </div>
      </div>
      <div class="goals-memo">
        <div class="goals">
          <h3>목표</h3>
          <textarea v-model="goals"></textarea>
          <button @click="saveGoals">저장</button>
        </div>
        <div class="memo">
          <h3>메모</h3>
          <textarea v-model="notes"></textarea>
          <button @click="saveNotes">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";

export default {
  setup() {
    const totalExpense = inject("totalExpense");
    const totalIncome = inject("totalIncome");
    const selectedMonth = inject("selectedMonth");

    const goals = ref(localStorage.getItem("savedGoals") || "");
    const notes = ref(localStorage.getItem("savedNotes") || "");

    const saveGoals = () => {
      localStorage.setItem("savedGoals", goals.value);
    };

    const saveNotes = () => {
      localStorage.setItem("savedNotes", notes.value);
    };

    return {
      totalExpense,
      totalIncome,
      selectedMonth,
      goals,
      notes,
      saveGoals,
      saveNotes,
    };
  },
};
</script>

<style scoped>
@import "@/assets/Total.css";
</style>
