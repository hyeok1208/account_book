<template>
  <div class="expense-tracker">
    <h1>2024년</h1>
    <div class="month-selector">
      <button @click="decrementMonthExpense">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <span class="month-text">{{ selectedMonth }}월 지출</span>
      <button @click="incrementMonthExpense">
        <i class="fa-solid fa-chevron-up"></i>
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>날짜</th>
          <th>분류</th>
          <th>세부 사항</th>
          <th>지출 금액</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <!-- expenses 배열을 반복하여 각 항목을 테이블에 표시 -->
        <tr v-for="(expense, index) in expenses" :key="index">
          <td>
            <!-- 날짜 드롭다운 -->
            <select v-model="expense.date">
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
            <!-- 분류 드롭다운 -->
            <select v-model="expense.category">
              <option
                v-for="expenseCategory in expenseCategories"
                :key="expenseCategory.id"
                :value="expenseCategory.title"
              >
                {{ expenseCategory.title }}
              </option>
            </select>
          </td>
          <td>
            <!-- 세부사항 텍스트 입력 -->
            <input type="text" v-model="expense.detail" />
          </td>
          <td>
            <!-- 지출금액 텍스트 입력 -->
            <input type="text" v-model="expense.amount" />
          </td>
          <td>
            <!-- 항목 삭제 버튼 -->
            <button class="deletebtn" @click="deleteExpense(index)">X</button>
          </td>
        </tr>
        <!-- 항목 추가 버튼 -->
        <tr>
          <td colspan="5">
            <button class="addbtn" @click="addExpense">+</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <!-- 총 지출금액 계산 -->
        <tr>
          <td colspan="4">총 지출 금액</td>
          <td>{{ Number(totalExpense).toLocaleString() }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="buttons">
      <!-- 저장 버튼 -->
      <button class="bottombtn" @click="saveExpense">
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
  name: "ExpenseTracker",
  setup() {
    const expenseSelectedMonth = inject("expenseselectedMonth"); // 변수명 수정
    const expenses = inject("expenses");
    const expenseCategories = inject("expenseCategories");
    const totalExpense = inject("totalExpense");
    const addExpense = inject("addExpense");
    const saveExpense = inject("saveExpense");
    const deleteExpense = inject("deleteExpense");
    const incrementMonthExpense = inject("incrementMonthExpense");
    const decrementMonthExpense = inject("decrementMonthExpense");
    const selectedMonth = inject("selectedMonth");
    const dateOptions = inject("dateOptions");

    return {
      expenseSelectedMonth, // 변수명 수정
      expenses,
      expenseCategories,
      totalExpense,
      addExpense,
      saveExpense,
      deleteExpense,
      incrementMonthExpense,
      decrementMonthExpense,
      selectedMonth,
      dateOptions,
    };
  },
};
</script>

<style scoped>
@import "@/assets/expense.css";
/* 추가적인 스타일링 필요시 여기에 작성 */
</style>
