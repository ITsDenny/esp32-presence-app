import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.profileSection}>
          <Image source={require('@/assets/images/profile.jpg')} style={styles.profileImage} />
          <View>
            <Text style={styles.userName}>Ryomen Sukuna</Text>
            <Text style={styles.userJob}>React Native</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          {/* <Image source={require('@/assets/notification.png')} style={styles.iconImage} /> */}
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.companyName}>COMPANY NAME</Text>
        <Text style={styles.currentTime}>09:12 AM</Text>
        <Text style={styles.currentDate}>Wednesday, 12 Nov</Text>
        <TouchableOpacity style={styles.clockInButton}>
          {/* <Image source={require('@/assets/clock-in-icon.png')} style={styles.buttonIcon} /> */}
          <Text style={styles.buttonText}>CLOCK IN</Text>
        </TouchableOpacity>
        <Text style={styles.location}>Location: Sector 46, Gurgaon</Text>
      </View>

      {/* Additional Info */}
      <View style={styles.additionalInfo}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>09:15 AM</Text>
          <Text style={styles.infoSubtitle}>Clock In</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>06:30 PM</Text>
          <Text style={styles.infoSubtitle}>Clock Out</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>09h 15m</Text>
          <Text style={styles.infoSubtitle}>Working Hrs</Text>
        </View>
      </View>

      {/* Bottom Info Boxes */}
      <View style={styles.infoBoxes}>
        <TouchableOpacity style={styles.infoBox}>
          {/* <Image source={require('@/assets/leave-history-icon.png')} style={styles.infoBoxIcon} /> */}
          <Text style={styles.infoBoxTitle}>Leave History</Text>
          <Text style={styles.infoBoxSubtitle}>View Leaves</Text>
          <Text style={styles.infoBoxNote}>You don't have any Leave History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoBox}>
          {/* <Image source={require('@/assets/upcoming-holiday-icon.png')} style={styles.infoBoxIcon} /> */}
          <Text style={styles.infoBoxTitle}>Upcoming Holidays</Text>
          <Text style={styles.infoBoxSubtitle}>View Upcoming Holiday</Text>
          <Text style={styles.infoBoxNote}>You don't have any upcoming Holidays for this year</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#3572EF',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userJob: {
    color: 'white',
    fontSize: 12,
  },
  notificationIcon: {
    padding: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  mainContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  currentTime: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  currentDate: {
    fontSize: 16,
    color: '#666',
  },
  clockInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7E8EF1',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  infoItem: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  infoBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  infoBox: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  infoBoxIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  infoBoxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoBoxSubtitle: {
    fontSize: 14,
    color: '#6C63FF',
    marginBottom: 5,
  },
  infoBoxNote: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default ProfileScreen;
