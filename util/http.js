import axios from "axios";

const BACKEND_URL =
  "https://react-native-tuts-9e9ca-default-rtdb.firebaseio.com";

// post or add data to firebase
export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

// fetch data from firebase
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

// update in firebase db
export async function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

// delete in firebase db
export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
