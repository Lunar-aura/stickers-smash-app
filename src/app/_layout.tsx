import '../../global.css'; // Do step baahar nikal kar global.css import karne ke liye
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* index.tsx (Home screen) ko configure karne ke liye */}
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "Stickers Smash", // Aapki screen ka top title
          headerShown: true        // Agar top bar nahi chahiye toh ise false kar dein
        }} 
      />
    </Stack>
  );
}
