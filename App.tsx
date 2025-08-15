import "./global.css";
import { StatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";
import BookListItem from "./src/components/BookListItem";

import books from "./src/dummyBooks";

export default function App() {
  return (
    <View className="bg-slate-700 flex-1 justify-center p-4 ">
      <FlatList
        data={books}
        contentContainerClassName="gap-4"
        renderItem={({ item }) => <BookListItem book={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}
