<template>
  <div class="expense-tracker">
    <h1>뷰라클 가계부</h1>
    <!-- 제목 -->
    <!-- 월 선택 Up/Down 버튼 -->
    <div class="month-selector">
      <button @click="decrementMonth">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <span class="month-text">{{ selectedMonth }}월 지출</span>
      <button @click="incrementMonth">
        <i class="fa-solid fa-chevron-up"></i>
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>날짜</th>
          <th>분류</th>
          <th>세부사항</th>
          <th>지출금액</th>
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
                v-for="expensecategory in expenseCategories"
                :key="expensecategory.id"
                :value="expensecategory.title"
              >
                {{ expensecategory.title }}
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
        </tr>
        <!-- 항목 추가 버튼 -->
        <tr>
          <td colspan="4">
            <button @click="addExpense">항목 추가</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <!-- 총 지출금액 계산 -->
        <tr>
          <td colspan="3">총 지출금액</td>
          <td>{{ totalAmount }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="buttons">
      <!-- 저장 버튼 -->
      <button @click="save">저장</button>
      <!-- 수정 버튼 -->
      <button @click="edit">수정</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ExpenseTracker",
  data() {
    return {
      selectedMonth: 6, // 초기 선택된 월을 6월로 설정
      expenses: [], // 초기 expenses 배열을 빈 배열로 설정
      expenseCategories: [], // 세부사항 드롭다운 옵션
      dateOptions: [], // 날짜 드롭다운 옵션
    };
  },
  computed: {
    totalAmount() {
      // 총 지출금액 계산
      return this.expenses.reduce(
        (total, expense) => total + parseFloat(expense.amount || 0),
        0
      );
    },
  },
  methods: {
    addExpense() {
      // 새로운 빈 항목을 expenses 배열에 추가
      this.expenses.push({ date: "", detail: "", category: "", amount: "" });
    },
    save() {
      // 저장 버튼 클릭 시 알림
      alert("저장되었습니다.");
    },
    edit() {
      // 수정 버튼 클릭 시 알림
      alert("수정모드로 들어갑니다.");
    },
    incrementMonth() {
      // 월 증가, 12월을 넘지 않도록 설정
      if (this.selectedMonth < 12) {
        this.selectedMonth++;
      } else {
        this.selectedMonth = 1;
      }
    },
    decrementMonth() {
      // 월 감소, 1월 아래로 내려가지 않도록 설정
      if (this.selectedMonth > 1) {
        this.selectedMonth--;
      } else {
        this.selectedMonth = 12;
      }
    },
    fetchData() {
      axios
        .get("/api/expenseCategory") // 지출 카테고리 데이터 가져오기
        .then((response) => {
          this.expenseCategories = response.data;
          // 필요한 다른 데이터도 여기에 추가
        })
        .catch((error) => {
          console.error("There was an error fetching the JSON data:", error);
        });
      // 새로운 axios 요청 추가: 날짜 옵션 데이터 가져오기
      axios
        .get("/api/date")
        .then((response) => {
          this.dateOptions = response.data;
          // 필요한 다른 데이터도 여기에 추가
        })
        .catch((error) => {
          console.error("There was an error fetching the JSON data:", error);
        });
    },
  },
  mounted() {
    // 컴포넌트가 마운트될 때 기본 항목 하나 추가
    this.addExpense();
    // JSON 데이터 가져오기
    this.fetchData();
  },
};
</script>
<style scoped>
.expense-tracker {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
tfoot td {
  font-weight: bold;
}
.buttons {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
select,
input[type="text"] {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}
.month-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.month-selector button {
  margin: 0 10px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}
.month-text {
  font-size: 24px; /* 월 지출 텍스트 크기 증가 */
  margin: 0 20px;
}
/* 추가된 스타일 */
td:nth-child(1) {
  width: 10%; /* 날짜 칸의 너비 조정 */
}
td:nth-child(2) {
  width: 40%; /* 분류 칸의 너비 조정 */
}
td:nth-child(3) {
  width: 20%; /* 세부사항 칸의 너비 조정 */
}
td:nth-child(4) {
  width: 20%; /* 지출금액 칸의 너비 조정 */
}
</style>
