import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, SafeAreaView } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Web Learn</Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          style={styles.navbarIcon}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <StatusBar style="auto" />
      </View>
      <Image style={styles.image} source={require('./assets/welcome.png')}/>
      <View style={styles.main}>
        <Text style={styles.mainTitle}>Welcome to our website!</Text>
        <Text style={styles.mainText}>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on
        </Text>
      </View>
      <View style={styles.btns}>
        <Text style={styles.readBtn}>Read More...</Text>
        <Text style={styles.readBtn}>Get Started</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "start",
  },
  navbar: {
    width: "100%",
    padding: "20px",
    backgroundColor: "#222",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  navbarText: {
    color: "#ccc",
    fontSize: "30px",
    fontWeight: "900",
  },
  navbarIcon: {
    width: "40px",
    height: "40px",
    color: "#ccc",
  },
  main: {
    width: "100%",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: "35px",
    fontWeight: "900",
    color: "#eee",
    textAlign: 'center'
  },
  mainText: {
    width: "90%",
    fontSize: "16px",
    fontWeight: "100",
    color: "#eee",
    textAlign: "center",
    lineHeight: "22px",
    marginTop: "10px",
  },
  btns: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  readBtn: {
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  image: {
    width: '400px',
    height: '400px'
  }
});
