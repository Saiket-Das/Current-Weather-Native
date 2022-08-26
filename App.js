import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './screens/Home';
import DarkMode from './assets/icons/mode.png'



export default function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false)


  // Animated Properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;


  return (
    <SafeAreaView style={{
      ...styles.menuContainer, backgroundColor: darkMode ? '#FFFFFF' : '#2f2f2f',
    }}>
      <StatusBar style={darkMode ? "dark" : 'light'} />


      {/* ------- Drawer Overlay ------- */}
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
        <View style={{ margin: 10 }}>

          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              setDarkMode(!darkMode)
              setShowMenu(!showMenu)
            }}>
            <Image source={DarkMode} style={{ ...styles.modeImg, tintColor: darkMode ? '#2f2f2f' : '#FFFFFF' }} />
            <Text style={{ ...styles.modeText, color: darkMode ? '#2f2f2f' : '#FFFFFF' }}>Dark</Text>
          </TouchableOpacity>

        </View>
      </View>


      {/* ------- Home Page ------- */}

      <Animated.View style={{
        ...styles.animatedScreen,
        backgroundColor: darkMode ? '#FFFFFF' : '#2f2f2f',
        shadowColor: darkMode ? '#2f2f2f' : '#515151',
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue },
        ]
      }}>
        <ScrollView showsVerticalScrollIndicator={false} >

          <Home
            scaleValue={scaleValue}
            offsetValue={offsetValue}
            closeButtonOffset={closeButtonOffset}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            darkMode={darkMode}
          >
          </Home>
        </ScrollView>

      </Animated.View>


    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },

  animatedScreen: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 15,
    shadowOffset: { width: -10, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  modeImg: {
    width: 28,
    height: 28,
  },

  modeText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500'
  }
});
