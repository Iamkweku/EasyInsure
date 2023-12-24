import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const PolicyScreen = () => {
const navigation = useNavigation();
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/Acacia.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Enterprise Insurance</Text>
      </View>

      <Image source={require('../assets/entImg.png')} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Our Products</Text>
      <Text style={styles.sectionSubtitle}>We provide various products to serve your needs</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>PROTECT YOUR HOME TOTALLY</Text>
        <Text style={styles.contentHeader}>Home Insurance</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </TouchableOpacity>

        <Text style={styles.contentText}>
          This is a packaged policy specially designed for your home.
          {'\n\n'}
          It covers a myriad of perils including fire, lightning, explosion, earthquake, riot and strike, burglary (including armed robbery), civil commotion, impact, tornado or windstorm, flood, malicious acts, burst pipe, theft and many more.
          {'\n\n'}
          Besides all the above, it provides cover for the cost of alternative accommodation or rent, when your home is rendered uninhabitable as a result of the occurrence of an insured peril.
          {'\n\n'}
          It also pays for your legal liabilities to domestic staff or third parties, in addition to a Personal Accident Cover for yourself and other dependants.
          {'\n\n'}
          This is truly a packed policy to ensure that your property and dependants are well covered.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0052A4',
    padding: 20,
    marginTop: 50,
  },
  logo: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    marginRight: 10, // Add some margin between logo and title
    resizeMode: 'contain',
    marginLeft: 8,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 8,
  },
  headerImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    
  },
  sectionTitle: {
    color: '#0052A4',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  sectionSubtitle: {
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  contentHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0052A4',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#0052A4',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
});

export default PolicyScreen;
