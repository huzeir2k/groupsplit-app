import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import HomeScreen from '../screens/HomeScreen';

// Define and export navigation param types
export type RootStackParamList = {
  Home: undefined;
  // Add more screens here as you create them, for example:
  // AddExpense: undefined;
  // Summary: undefined;
  GroupDetails: { groupId: string };
  CreateGroup: undefined;
};

// Create the Stack navigator with the typed param list
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
