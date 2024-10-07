import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenWidth } from "../utils";

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#08244F", "#134CB5", "#0B42AB"]}
      >
        <View style={[styles.header, { paddingTop: insets.top }]}>
          <View style={styles.headerLeft}>
            <Ionicons name="location-outline" size={24} color="white" />
            <Text style={styles.city}>Bursa</Text>
          </View>
          <View style={styles.headerRight}>
            <Ionicons name="search" size={24} color="white" />
          </View>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.image}
            source={require("../assets/images/cloudandsun.png")}
          />
          <View>
            <Text style={styles.degree}>28º</Text>
            <View style={styles.precipitationsContainer}>
              <Text style={styles.precipitationsTitle}>Precipitations</Text>
              <View style={styles.minMaxCont}>
                <Text style={styles.minMaxText}>Max: 30</Text>
                <Text style={styles.minMaxText}>Min: 25</Text>
              </View>
            </View>
          </View>
          <View style={styles.otherInfoContainer}>
            <View style={styles.otherInfoItem}>
              <Text style={styles.minMaxText}>Wind</Text>
              <Text style={styles.minMaxText}>10 km/h</Text>
            </View>
            <View style={styles.otherInfoItem}>
              <Text style={styles.minMaxText}>Wind</Text>
              <Text style={styles.minMaxText}>10 km/h</Text>
            </View>
            <View style={styles.otherInfoItem}>
              <Text style={styles.minMaxText}>Wind</Text>
              <Text style={styles.minMaxText}>10 km/h</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerRight: {},
  city: {
    color: "white",
    fontSize: 18,
    fontWeight: "semibold",
  },
  body: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.4,
    alignSelf: "center",
  },
  degree: {
    color: "white",
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: screenWidth * 0.05,
  },
  precipitationsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  precipitationsTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "regular",
  },
  minMaxCont: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 6,
  },
  minMaxText: {
    color: "white",
    fontSize: 16,
    fontWeight: "regular",
  },
  otherInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#001026",
    marginTop: 20,
    borderRadius: 20,
    width: screenWidth * 0.9,
    height: screenWidth * 0.13,
    paddingHorizontal: 16,
  },
  otherInfoItem: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
