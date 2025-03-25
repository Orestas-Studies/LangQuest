import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  const router = useRouter();

  const handleLoginWithGoogle = () => {
    // Handle Google login here
    console.log('Logging in with Google');
  };

  const handleLoginWithFacebook = () => {
    // Handle Facebook login here
    console.log('Logging in with Facebook');
  };

  return (
    <View style={styles.container}>
      {/* Background Linear Gradient */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
        style={styles.background}
      />

      {/* Login Options */}
      <Text style={styles.title}>Prisijunk prie savo paskyros</Text>

      {/* Google Login Button */}
      <LinearGradient
        colors={['#db4437', '#ffbc00', '#4285f4']} // Google button gradient
        style={styles.button}
      >
        <TouchableOpacity onPress={handleLoginWithGoogle}>
          <Text style={styles.buttonText}>Prisijunk su Google</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Facebook Login Button */}
      <LinearGradient
        colors={['#3b5998', '#192f6a']} // Facebook button gradient
        style={styles.button}
      >
        <TouchableOpacity onPress={handleLoginWithFacebook}>
          <Text style={styles.buttonText}>Prisijunk su Facebook</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#f0cd95',
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
    backgroundColor: 'transparent',
  },
});

export default LoginScreen;
