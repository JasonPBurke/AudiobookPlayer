import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <View className="flex-1 items-center justify-around">
      <Text>Profile</Text>

      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}
