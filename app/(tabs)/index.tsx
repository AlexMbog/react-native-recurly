import "@/globals.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/Onboading" className="mt-4 text-lg text-blue-500">
        Go to Onboading
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 text-lg text-blue-500">
        Go to Sign up
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="mt-4 text-lg text-blue-500"
      >
        Spotify Subscritpion
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
