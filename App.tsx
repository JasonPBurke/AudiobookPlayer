import "./global.css";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import BookListItem from "./src/components/BookListItem";

import books from "./src/dummyBooks";

export default function App() {
  return (
    <View className="bg-slate-700 flex-1 justify-center p-4 ">
      <BookListItem book={books[0]} />
      <BookListItem book={books[1]} />

      <StatusBar style="auto" />
    </View>
  );
}
