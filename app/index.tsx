import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [distance, setDistance] = useState("");
  const [waitingTime, setWaitingTime] = useState("");
  const [result, setResult] = useState({
    total: 0,
    distanceFare: 0,
    waitFare: 0,
  });

  const calculateFare = () => {
    const dist = parseFloat(distance) || 0;
    const wait = parseFloat(waitingTime) || 0;

    let distFare = 0;

    if (dist > 0) {
      distFare = 35;
      let remaining = dist - 1;

      if (remaining > 0) {
        const d2_10 = Math.min(remaining, 9);
        distFare += d2_10 * 6.5;
        remaining -= d2_10;
      }

      if (remaining > 0) {
        const d10_20 = Math.min(remaining, 10);
        distFare += d10_20 * 7;
        remaining -= d10_20;
      }

      if (remaining > 0) {
        const d20_40 = Math.min(remaining, 20);
        distFare += d20_40 * 8;
        remaining -= d20_40;
      }

      if (remaining > 0) {
        const d40_60 = Math.min(remaining, 20);
        distFare += d40_60 * 8.5;
        remaining -= d40_60;
      }

      if (remaining > 0) {
        const d60_80 = Math.min(remaining, 20);
        distFare += d60_80 * 9;
        remaining -= d60_80;
      }

      if (remaining > 0) {
        distFare += remaining * 10.5;
      }
    }

    const waitFare = wait * 3;
    const total = distFare + waitFare;

    setResult({
      total,
      distanceFare: distFare,
      waitFare,
    });
  };

  const reset = () => {
    setDistance("");
    setWaitingTime("");
    setResult({ total: 0, distanceFare: 0, waitFare: 0 });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F7" }}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: 20,
            justifyContent: "space-between",
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* HEADER */}
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Image
              source={require("@/assets/images/taxi.png")}
              style={{ width: 110, height: 70 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "700",
                marginTop: 8,
                color: "#F1C40F",
              }}
            >
              คำนวณค่าแท็กซี่
            </Text>
          </View>

          {/* INPUT CARD */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 28,
              padding: 24,
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "600", marginBottom: 6 }}>
              ระยะทาง (กิโลเมตร)
            </Text>
            <TextInput
              keyboardType="decimal-pad"
              value={distance}
              onChangeText={setDistance}
              placeholder="0.0"
              style={{
                backgroundColor: "#F2F2F7",
                borderRadius: 16,
                padding: 14,
                fontSize: 16,
                marginBottom: 20,
              }}
            />

            <Text style={{ fontWeight: "600", marginBottom: 6 }}>
              เวลารถติด (นาที)
            </Text>
            <TextInput
              keyboardType="number-pad"
              value={waitingTime}
              onChangeText={setWaitingTime}
              placeholder="0"
              style={{
                backgroundColor: "#F2F2F7",
                borderRadius: 16,
                padding: 14,
                fontSize: 16,
                marginBottom: 24,
              }}
            />

            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                onPress={calculateFare}
                style={{
                  flex: 1,
                  backgroundColor: "#009688",
                  paddingVertical: 14,
                  borderRadius: 18,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
                  คำนวณราคา
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={reset}
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: "#FFB6C1",
                  paddingVertical: 14,
                  borderRadius: 18,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FF69B4", fontWeight: "700", fontSize: 16 }}>
                  ล้างค่า
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* RESULT CARD */}
          <View
            style={{
              backgroundColor: "#1C1C1E",
              borderRadius: 36,
              padding: 30,
              marginTop: 25,
            }}
          >
            <Text
              style={{
                color: "#8E8E93",
                fontSize: 12,
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              ค่าโดยสารโดยประมาณ
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                marginBottom: 25,
              }}
            >
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.7}
                style={{
                  color: "#F1C40F",
                  fontSize: 48,
                  fontWeight: "800",
                }}
              >
                {result.total.toFixed(2)}
              </Text>
              <Text
                style={{
                  color: "#F1C40F",
                  fontSize: 18,
                  fontWeight: "600",
                  marginLeft: 6,
                }}
              >
                บาท
              </Text>
            </View>

            <View style={{ borderTopWidth: 1, borderTopColor: "#2C2C2E", paddingTop: 16 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                <Text style={{ color: "#AEAEB2" }}>ค่าโดยสารระยะทาง</Text>
                <Text style={{ color: "white", fontWeight: "600" }}>
                  {result.distanceFare.toFixed(2)} ฿
                </Text>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "#AEAEB2" }}>ค่ารถติด</Text>
                <Text style={{ color: "white", fontWeight: "600" }}>
                  {result.waitFare.toFixed(2)} ฿
                </Text>
              </View>
            </View>
          </View>

          {/* FOOTER */}
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ fontSize: 11, fontWeight: "600", color: "#8E8E93" }}>
              ID: 6652410001
            </Text>
            <Text style={{ fontSize: 11, fontWeight: "600", color: "#8E8E93" }}>
              NAME: SIRASAK SANGTONGDEE
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
