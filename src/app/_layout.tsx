
import '../../global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#102B24',
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="tasks" />
      <Stack.Screen name="add-task" />
      <Stack.Screen name="about" />
    </Stack>
  );
}
