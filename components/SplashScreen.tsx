import React, { useEffect, useRef } from "react";
import {
    Animated,
    Easing,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Svg, { G, Path, Rect, Text as SvgText } from "react-native-svg";

const SplashScreen = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 10,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Spacer */}
            <View />

            {/* Card */}
            <View style={styles.card}>
                {/* Taxi Icon */}
                <View style={{ marginBottom: 25 }}>
                    <Svg width="130" height="90" viewBox="0 0 100 60">
                        <Rect x="38" y="0" width="24" height="8" rx="2" fill="#000" />
                        <SvgText
                            x="50"
                            y="6"
                            textAnchor="middle"
                            fontSize="5"
                            fontWeight="bold"
                            fill="#FBBF24"
                        >
                            TAXI
                        </SvgText>

                        <Path
                            d="M25 20 L75 20 L85 35 L15 35 Z"
                            fill="#BAE6FD"
                            stroke="#000"
                            strokeOpacity={0.1}
                            strokeWidth="0.5"
                        />

                        <Path
                            d="M10 32 C10 32 5 32 5 38 L5 48 L95 48 L95 38 C95 32 90 32 90 32 Z"
                            fill="#FBBF24"
                        />

                        <Rect x="10" y="38" width="12" height="6" rx="1" fill="#FFF" />
                        <Rect x="78" y="38" width="12" height="6" rx="1" fill="#FFF" />

                        <Rect x="30" y="38" width="40" height="6" rx="1" fill="#4B5563" />

                        <G>
                            <Path d="M35 38 V44" stroke="#6B7280" strokeWidth="1" />
                            <Path d="M40 38 V44" stroke="#6B7280" strokeWidth="1" />
                            <Path d="M45 38 V44" stroke="#6B7280" strokeWidth="1" />
                            <Path d="M50 38 V44" stroke="#6B7280" strokeWidth="1" />
                            <Path d="M55 38 V44" stroke="#6B7280" strokeWidth="1" />
                            <Path d="M60 38 V44" stroke="#6B7280" strokeWidth="1" />
                            <Path d="M65 38 V44" stroke="#6B7280" strokeWidth="1" />
                        </G>

                        <Rect x="5" y="46" width="90" height="6" rx="2" fill="#9CA3AF" />
                        <Rect x="15" y="52" width="15" height="8" rx="2" fill="#1F2937" />
                        <Rect x="70" y="52" width="15" height="8" rx="2" fill="#1F2937" />
                    </Svg>
                </View>

                {/* Title */}
                <Text style={styles.title}>TAXI METER</Text>

                {/* Subtitle */}
                <Text style={styles.subtitle}>THAI FARE CALCULATOR</Text>

                {/* Spinner */}
                <Animated.View
                    style={[
                        { transform: [{ rotate: spin }] },
                        { marginTop: 40 },
                    ]}
                >
                    <Svg height="34" width="34" viewBox="0 0 24 24">
                        <Path
                            opacity={0.25}
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="4"
                            d="M12 2a10 10 0 1010 10"
                        />
                        <Path
                            opacity={0.75}
                            fill="#10B981"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </Svg>
                </Animated.View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>ID: 6652410001</Text>
                <Text style={styles.footerText}>NAME: SIRASAK SANGTONGDEE</Text>
            </View>
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FACC15", // iOS friendly yellow
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 30,
    },
    card: {
        backgroundColor: "#FEF08A",
        borderRadius: 40,
        paddingVertical: 50,
        paddingHorizontal: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 10 },
    },
    title: {
        fontSize: 34,
        fontWeight: "800",
        color: "#1E293B",
        letterSpacing: -1,
    },
    subtitle: {
        marginTop: 8,
        fontSize: 11,
        fontWeight: "700",
        color: "#047857",
        letterSpacing: 3,
    },
    footer: {
        alignItems: "center",
    },
    footerText: {
        fontSize: 11,
        fontWeight: "600",
        color: "#475569",
        letterSpacing: 1,
    },
});
