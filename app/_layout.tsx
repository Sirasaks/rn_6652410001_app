import SplashScreenComponent from "@/components/SplashScreen";
import {
  Prompt_400Regular,
  Prompt_500Medium,
  Prompt_700Bold,
} from "@expo-google-fonts/prompt";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreenNative from "expo-splash-screen";
import { useEffect, useState } from "react";
import "../global.css";

// ป้องกัน native splash หายก่อนเวลา
SplashScreenNative.preventAutoHideAsync().catch(() => { });

export default function RootLayout() {
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  const [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_500Medium,
    Prompt_700Bold,
  });

  useEffect(() => {
    async function prepareApp() {
      if (!fontsLoaded) return;

      try {
        // ดีเลย์ 3 วิ (แนะนำ 2-3 วิพอ)
        await new Promise((resolve) => setTimeout(resolve, 10000));

        // ซ่อน native splash
        await SplashScreenNative.hideAsync();

        // ซ่อน custom splash
        setShowCustomSplash(false);
      } catch (e) {
        console.warn(e);
      }
    }

    prepareApp();
  }, [fontsLoaded]);

  // รอ fonts โหลดก่อน
  if (!fontsLoaded) {
    return null;
  }

  // แสดง custom splash
  if (showCustomSplash) {
    return <SplashScreenComponent />;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#F8FAFF" },
        headerTitleStyle: {
          color: "#0F172A",
          fontFamily: "Prompt_700Bold",
        },
        headerTintColor: "#0F172A",
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
