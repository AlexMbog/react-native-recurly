import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const signUp = () => {
  return (
    <View>
      <Text>sIGN UP</Text>
      <Link href="/(auth)/sign-in" className="mt-4 text-lg text-blue-500">
        Sign Up
      </Link>
    </View>
  );
};
export default signUp;
