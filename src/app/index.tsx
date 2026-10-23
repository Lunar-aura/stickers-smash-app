import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    // 'className' ab aapke mobile design ke liye bilkul sahi kaam karega
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-2xl font-bold text-white mb-2">
        Tailwind Setup Done! 🎉
      </Text>
      <Text className="text-gray-400 text-base">
        You Expo + NativeWind project is ready!
      </Text>
    </View>
  );
}
