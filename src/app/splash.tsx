import React from 'react';
import { Text, View } from 'react-native';

const SplashScreen  =() => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
        <Text className="text-2xl font-bold text-white mb-2">
            Splash Screen
        </Text>
    </View>
  );
};

export default SplashScreen;
