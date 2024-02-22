import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HollardInsuranceScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/Hollard.jpg')} style={styles.logo} />
        <Text style={styles.headerTitle}>Hollard Insurance</Text>
      </View>

      <Image source={require('../assets/funeralimg.jpg')} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Our Product</Text>
      <Text style={styles.sectionSubtitle}>We provide various products to serve your needs</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>ADEPA FUNERAL PLAN</Text>
        <Text style={styles.contentHeader}>Comprehensive Family Protection</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InsuranceForm')}>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </TouchableOpacity>

        <Text style={styles.contentText}>
          Benefits of an Adepa Funeral Plan Include:
          {'\n\n'}
          • Funeral insurance quote is drawn up especially for you and your needs
          • No underwriting necessary.
          • Covers start immediately for accidental death.
          • 20% guaranteed premium return for every 60 months.
          • No premium payment upon retirement and also upon death of the policyholder
          • Free insurance cover up to five children of the policyholder
          {'\n\n'}
          Optional Extra Benefits:
          {'\n\n'}
          • Funeral Cover for partner, additional children, parents and parents-in-law, siblings, nieces, nephews, and even an additional spouse.
          • Tombstone Cover that caters for the 1 year anniversary of the death of the policyholder and, if applicable, the partner.
          • Life Cover that pays a lump sum upon the death of the policyholder and, if applicable, partner.
          • Family Income Benefit that pays a fixed monthly amount upon the death of the policyholder and, if applicable, the partner.
          • A steady fixed income that is payable through the Monthly Provider Benefit to your loved ones for a maximum of 24 months.
          {'\n\n'}
          What you need to know:
          {'\n\n'}
          • You must be a Ghanaian citizen or a permanent resident.
          • You must be 18 to 75 years old.
          {'\n\n'}
          Cover amount: 300gh a month
          Premium amount: 100,000gh
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
    backgroundColor: '#004da3', // Updated color for a more professional look
    padding: 20,
    marginTop: 50,
  },
  backButton: {
    padding: 10,
  },
  logo: {
    width: 50, // Slightly larger for better visibility
    height: 50,
    marginRight: 15,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22, // Slightly larger for better visibility
    marginLeft: 8,
  },
  headerImage: {
    width: '100%',
    height: 250, // Increased height for better visibility
    resizeMode: 'cover', // Ensure the image covers the frame fully
  },
  sectionTitle: {
    color: '#d71921', // Updated color for emphasis
    fontSize: 26, // Increased font size
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 20,
  },
  sectionSubtitle: {
    color: '#333333', // Darker color for a professional tone
    fontSize: 20, // Increased font size
    marginBottom: 25,
    marginLeft: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  contentTitle: {
    fontSize: 18, // Increased font size
    fontWeight: 'bold',
    color: '#0052A4',
  },
  contentHeader: {
    fontSize: 24, // Increased font size
    fontWeight: 'bold',
    color: '#d71921', // Updated color for emphasis
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#0052A4',
    padding: 18, // Increased padding for a larger button
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 18, // Increased font size for readability
    color: '#333333', // Darker color for a professional tone
    marginBottom: 25,
  },
});

export default HollardInsuranceScreen;
