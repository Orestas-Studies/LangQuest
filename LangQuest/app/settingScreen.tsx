import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Background gradient for settings screen

const SettingsScreen = () => {
  // State hooks for toggles
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [vibrationEnabled, setVibrationEnabled] = useState(false);
  const [languageEnabled, setLanguageEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Background Linear Gradient with orange and blue shadows */}
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']} // Orange to light blue gradient
        style={styles.background}
      />

      <Text style={styles.title}>Settings</Text>

      {/* Sound Toggle */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Sound</Text>
        <Switch value={soundEnabled} onValueChange={(value) => setSoundEnabled(value)} />
      </View>

      {/* Music Toggle */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Music</Text>
        <Switch value={musicEnabled} onValueChange={(value) => setMusicEnabled(value)} />
      </View>

      {/* Notifications Toggle */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>

      {/* Vibration Toggle */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Vibration</Text>
        <Switch value={vibrationEnabled} onValueChange={(value) => setVibrationEnabled(value)} />
      </View>

      {/* Language Toggle */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Language</Text>
        <Switch value={languageEnabled} onValueChange={(value) => setLanguageEnabled(value)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#fff', // White text for contrast
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)', // Dark shadow for readability
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff', // White border for separation
    paddingBottom: 10,
  },
  optionText: {
    fontSize: 20,
    color: '#fff', // White text for readability
  },
});

export default SettingsScreen;
