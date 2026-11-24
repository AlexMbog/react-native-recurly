import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View>
          <Text>Onboading</Text>
          <Link href="/(auth)/sign-up" className="mt-4 text-lg text-blue-500">
          Create 
          </Link>
    </View>
  )
}
export default signIn;