import { View, Image } from "react-native";
import React from "react";
import KMH from "../assets/icons/wind.png";
import Cloud from "../assets/icons/cloud.png";
import WaterDrop from "../assets/icons/water-drop.png";
import { StyleSheet } from "react-native";
import Text from "./common/AppText";

export default function WindInfo({ weatheInfo, darkMode }) {
  return (
    <View style={styles.WindInfoCon}>
      <WindDetails
        image={KMH}
        textInfo={Math.round(weatheInfo.wind?.speed * 1.60934) + "KM/hr"}
        darkMode={darkMode}
      />
      <WindDetails
        image={Cloud}
        textInfo={weatheInfo?.clouds?.all + "%"}
        darkMode={darkMode}
      />
      <WindDetails
        image={WaterDrop}
        textInfo={weatheInfo?.main?.humidity + "%"}
        darkMode={darkMode}
      />
    </View>
  );
}

const WindDetails = ({ image, textInfo, darkMode }) => (
  <View style={{ alignItems: "center" }}>
    <View
      style={{
        ...styles.WindDetailsImgCon,
        backgroundColor: darkMode ? "#f3f3f3" : "#3e3e42",
      }}
    >
      <Image style={styles.kmhImg} source={image} />
    </View>
    <Text
      style={{
        fontWeight: "500",
        marginTop: 10,
        color: darkMode ? "#2f2f2f" : "#eee",
      }}
    >
      {textInfo}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  WindInfoCon: {
    flexDirection: "row",
    justifyContent: "space-around",
    // paddingVertical: 25,
  },

  WindDetailsImgCon: {
    // padding: 15,
    borderRadius: 10,
  },

  kmhImg: {
    width: 30,
    height: 30,
    tintColor: "#7366cc",
  },
});
