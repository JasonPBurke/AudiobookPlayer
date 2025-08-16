import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "@/components/SignOutButton";

export default function Page() {
  const { user } = useUser();

  return (
    <View className="flex-1 bg-gray-900 p-6">
      <SignedIn>
        <Text className="text-3xl font-bold text-center mb-8 text-white">
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href={"/(auth)/sign-in"} className="p-24">
          <Text className="text-3xl font-bold text-center mb-8 text-white">
            Sign in
          </Text>
        </Link>
        <Link href={"/(auth)/sign-up"}>
          <Text className="text-3xl font-bold text-center mb-8 text-white">
            Sign up
          </Text>
        </Link>
      </SignedOut>
    </View>
  );
}
