<template>
  <div>
    <Header v-if="showHeader" />
    <router-view />
  </div>
</template>

<script setup>
import { ref, watch, computed, provide } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import axios from "axios";

const showHeader = ref(true);
const currentRoute = useRoute();

watch(
  currentRoute,
  (newRoute) => {
    showHeader.value = newRoute.name !== "home";
  },
  { immediate: true }
);

// Data for incomes
const selectedMonth = ref(new Date().getMonth() + 1);
const incomes = ref([]);
const incomeCategories = ref([]);
const dateOptions = ref([]);

const totalIncome = computed(() => {
  return incomes.value.reduce(
    (total, income) => total + parseFloat(income.amount || 0),
    0
  );
});

const addIncome = () => {
  incomes.value.push({ date: "", detail: "", category: "", amount: "" });
};

const saveIncome = () => {
  const allIncomes = JSON.parse(localStorage.getItem("allIncomes")) || {};
  allIncomes[selectedMonth.value] = incomes.value;
  localStorage.setItem("allIncomes", JSON.stringify(allIncomes));
  alert("수입 데이터가 저장되었습니다.");
};

const deleteIncome = (index) => {
  incomes.value.splice(index, 1);
};

const incrementMonthIncome = () => {
  selectedMonth.value = selectedMonth.value < 12 ? selectedMonth.value + 1 : 1;
  loadIncomes();
};

const decrementMonthIncome = () => {
  selectedMonth.value = selectedMonth.value > 1 ? selectedMonth.value - 1 : 12;
  loadIncomes();
};

const fetchDataIncome = () => {
  axios
    .get("/api/incomeCategory")
    .then((response) => {
      incomeCategories.value = response.data;
    })
    .catch((error) => {
      console.error(
        "수입 카테고리 데이터를 불러오는 중 오류가 발생했습니다:",
        error
      );
    });

  axios
    .get("/api/date")
    .then((response) => {
      dateOptions.value = response.data;
    })
    .catch((error) => {
      console.error("날짜 데이터를 불러오는 중 오류가 발생했습니다:", error);
    });
};

const loadIncomes = () => {
  const allIncomes = JSON.parse(localStorage.getItem("allIncomes")) || {};
  incomes.value = allIncomes[selectedMonth.value] || [
    { date: "", detail: "", category: "", amount: "" },
  ];
};

// Fetch data on mount
fetchDataIncome();
loadIncomes();

// Data for expenses
const expenses = ref([]);
const expenseCategories = ref([]);

// Computed property for totalExpense
const totalExpense = computed(() => {
  return expenses.value.reduce(
    (total, expense) => total + parseFloat(expense.amount || 0),
    0
  );
});

const addExpense = () => {
  expenses.value.push({ date: "", detail: "", category: "", amount: "" });
};

const saveExpense = () => {
  const allExpenses = JSON.parse(localStorage.getItem("allExpenses")) || {};
  allExpenses[selectedMonth.value] = expenses.value;
  localStorage.setItem("allExpenses", JSON.stringify(allExpenses));
  alert("지출 데이터가 저장되었습니다.");
};

const deleteExpense = (index) => {
  expenses.value.splice(index, 1);
};

const incrementMonthExpense = () => {
  selectedMonth.value = selectedMonth.value < 12 ? selectedMonth.value + 1 : 1;
  loadExpenses();
};

const decrementMonthExpense = () => {
  selectedMonth.value = selectedMonth.value > 1 ? selectedMonth.value - 1 : 12;
  loadExpenses();
};

const fetchDataExpense = () => {
  axios
    .get("/api/expenseCategory")
    .then((response) => {
      expenseCategories.value = response.data;
    })
    .catch((error) => {
      console.error(
        "지출 카테고리 데이터를 불러오는 중 오류가 발생했습니다:",
        error
      );
    });
};

const loadExpenses = () => {
  const allExpenses = JSON.parse(localStorage.getItem("allExpenses")) || {};
  expenses.value = allExpenses[selectedMonth.value] || [
    { date: "", detail: "", category: "", amount: "" },
  ];
};

// Fetch data on mount
fetchDataExpense();
loadExpenses();

// Provide totalIncome and totalExpense
provide("totalIncome", totalIncome);
provide("incomes", incomes);
provide("addIncome", addIncome);
provide("saveIncome", saveIncome);
provide("deleteIncome", deleteIncome);
provide("incrementMonthIncome", incrementMonthIncome);
provide("decrementMonthIncome", decrementMonthIncome);
provide("incomeCategories", incomeCategories);
provide("dateOptions", dateOptions);
provide("selectedMonth", selectedMonth);

provide("totalExpense", totalExpense);
provide("expenses", expenses);
provide("addExpense", addExpense);
provide("saveExpense", saveExpense);
provide("deleteExpense", deleteExpense);
provide("incrementMonthExpense", incrementMonthExpense);
provide("decrementMonthExpense", decrementMonthExpense);
provide("expenseCategories", expenseCategories);
</script>

<style scoped>
/* 스타일 추가 */
</style>
