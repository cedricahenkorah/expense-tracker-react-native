import { View, Text, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = ({ item }) => {
  return <ExpenseItem {...item} />;
};

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
