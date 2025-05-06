import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const router = useRouter();
  const [bannerImage, setBannerImage] = useState('https://i.etsystatic.com/30097568/r/il/d070a6/5068149823/il_794xN.5068149823_1k0d.jpg'); // Use your banner image URL here
  const [avatarImage, setAvatarImage] = useState('https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/299723678_176959964835512_8907956075924868119_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZiNOTq4OuVIQ7kNvgH6D2GQ&_nc_oc=AdnPSMbxWXrNRFhjJzsIBRwVwlCUa8VW9QZ-Inzy6ivOs0ku0XlSpvj-YiWBtaKNoAM&_nc_zt=23&_nc_ht=scontent.fvno8-1.fna&_nc_gid=59ZaLPz8cfinOT3wK5sFbA&oh=00_AYFAtciMq6Hj9ocXnHgTjqHR0q1QWXVSsfTfYPh_s-WCxw&oe=67F1D86B'); // Use your avatar image URL here
  const [userInfo, setUserInfo] = useState({
    country: 'LTU',
    followingCount: 420,
    followersCount: 1337,
  });

  const handleGoBack = () => {
    router.back(); // Navigate back to the previous screen
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Banner Image Section with Avatar */}
      <View style={styles.bannerSection}>
        {/* Banner Image */}
        <Image source={{ uri: bannerImage }} style={styles.bannerImage} resizeMode="stretch" />

        {/* Avatar Image (circular) */}
        <View style={styles.avatarContainer}>
          <Image source={{ uri: avatarImage }} style={styles.avatar} />
        </View>
      </View>

      {/* User Info Section */}
      <View style={styles.userInfoSection}>
        <Text style={styles.title}>User Profile</Text>

        {/* Country Info */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Country</Text>
          <Text style={styles.info}>{userInfo.country}</Text>
        </View>

        {/* Following & Followers Info */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Following</Text>
          <Text style={styles.info}>{userInfo.followingCount}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Followers</Text>
          <Text style={styles.info}>{userInfo.followersCount}</Text>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 1,
  },
  bannerSection: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Positioning the avatar on top of the banner
    top: 40
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular avatar
  },
  userInfoSection: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  info: {
    fontSize: 16,
    fontWeight: '300',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileScreen;
