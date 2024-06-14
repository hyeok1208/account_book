<template>
  <div class="income-tracker">
    <h1>2024년</h1>
    <div class="month-selector">
      <button @click="decrementMonthIncome">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <span class="month-text">{{ selectedMonth }}월 수입</span>
      <button @click="incrementMonthIncome">
        <i class="fa-solid fa-chevron-up"></i>
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>날짜</th>
          <th>분류</th>
          <th>세부 사항</th>
          <th>수입 금액</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(income, index) in incomes" :key="index">
          <td>
            <select v-model="income.date">
              <option
                v-for="date in dateOptions"
                :key="date.id"
                :value="date.id"
              >
                {{ date.number }}
              </option>
            </select>
          </td>
          <td>
            <select v-model="income.category">
              <option
                v-for="incomeCategory in incomeCategories"
                :key="incomeCategory.id"
                :value="incomeCategory.title"
              >
                {{ incomeCategory.title }}
              </option>
            </select>
          </td>
          <td>
            <input type="text" v-model="income.detail" />
          </td>
          <td>
            <input type="text" v-model="income.amount" />
          </td>
          <td>
            <button class="deletebtn" @click="deleteIncome(index)">X</button>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <button class="addbtn" @click="addIncome">+</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">총 수입 금액</td>
          <td>{{ Number(totalIncome).toLocaleString() }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="buttons">
      <button class="bottombtn" @click="saveIncome">
        <img
          src="@/assets/pighead.png"
          alt="Piggy"
          class="main-image"
          width="50"
          height="50"
        />
        저장
      </button>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "IncomeTracker",
  setup() {
    const selectedMonth = inject("selectedMonth");
    const incomes = inject("incomes");
    const incomeCategories = inject("incomeCategories");
    const dateOptions = inject("dateOptions");
    const addIncome = inject("addIncome");
    const saveIncome = inject("saveIncome");
    const deleteIncome = inject("deleteIncome");
    const incrementMonthIncome = inject("incrementMonthIncome");
    const decrementMonthIncome = inject("decrementMonthIncome");
    const totalIncome = inject("totalIncome");

    return {
      selectedMonth,
      incomes,
      incomeCategories,
      dateOptions,
      addIncome,
      saveIncome,
      deleteIncome,
      incrementMonthIncome,
      decrementMonthIncome,
      totalIncome,
    };
  },
};
</script>
<style scoped>
@import "@/assets/Income.css";
</style>
