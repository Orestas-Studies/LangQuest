import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the icons

const HomeScreen = () => {
  const router = useRouter(); // Hook to navigate to different routes

  const handlePressStart = () => {
    router.push('/gameScreen'); // Navigate to the "game" route (GameScreen)
  };

  const handlePressLogin = () => {
    router.push('/LoginScreen'); // Navigate to the "login" route (LoginScreen)
  };

  const handlePressSettings = () => {
    router.push('/settingScreen'); // Navigate to the "settings" route (SettingsScreen)
  };

  const handlePressGuest = () => {
    router.push('/profileScreen'); // Navigate to the "guest" route (GuestScreen)
  };

  return (
    <View style={styles.container}>
      {/* Background Linear Gradient */}
      <LinearGradient
        colors={['rgba(0, 5, 80, 1.1)', 'transparent']}
        style={styles.background}
      />

      {/* Settings Button - Positioned in the top-left corner */}
      <TouchableOpacity onPress={handlePressSettings} style={styles.settingsButton}>
        <Ionicons name="settings-outline" size={32} color="#f0cd95" />
      </TouchableOpacity>

      {/* Guest Button - Positioned next to the settings button */}
      <TouchableOpacity onPress={handlePressGuest} style={styles.guestButton}>
        <Ionicons name="person-outline" size={32} color="#f0cd95" /> 
      </TouchableOpacity>

      {/* Text above the button */}
      <Text style={styles.title}>Sveiki Sugryze I LangQuest!</Text>

      {/* Start Game Button */}
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']} // Button gradient
        style={styles.button}
      >
        <TouchableOpacity onPress={handlePressStart}>
          <Text style={styles.buttonText}>Pradekim kaip Svecias</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Login Button */}
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']} // Button gradient
        style={styles.button}
      >
        <TouchableOpacity onPress={handlePressLogin}>
          <Text style={styles.buttonText}>Prisijunk ir issaugok progresa!</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  settingsButton: {
    position: 'absolute',
    top: 40, // Space from the top
    left: 20, // Space from the left
    zIndex: 1, // Ensure the button is above other elements
  },
  guestButton: {
    position: 'absolute',
    top: 40, // Space from the top
    left: 370, // Adjusted space from the left for guest button
    zIndex: 1, // Ensure the button is above other elements
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100, // Adjust spacing as needed
    color: '#f0cd95',
    textShadowColor: 'rgba(10, 150, 20, 0.7)', // Shadow color
    textShadowOffset: { width: 50, height: 9 }, // Shadow offset
    textShadowRadius: 500, // Shadow radius
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20, // Space between buttons
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent', // Ensures text is readable on gradient
  },
});

export default HomeScreen;
