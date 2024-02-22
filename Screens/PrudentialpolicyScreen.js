import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const PrudentialpolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/Prudentential.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Prudential Insurance</Text>
      </View>

      <Image source={require('../assets/pruImage.jpg')} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Our Products</Text>
      <Text style={styles.sectionSubtitle}>We provide various products to serve your needs</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>MAXIMUM PROTECTION UNTIL AGE 70</Text>
        <Text style={styles.contentHeader}>Term Life Insurance</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InsuranceForm')}>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </TouchableOpacity>

        <Text style={styles.contentText}>
          A term life insurance that provides maximum protection till the attainment of age 70. This product provides 100% return of premiums, allowing term life insurance policyholders to recover all of their premiums paid over the life of the policy. Minimum duration is 5 years and maximum of 52 years.
          {'\n\n'}
          MAIN BENEFITS:
          {'\n\n'}
          Cash Back:
          100% return of all premiums paid at maturity, provided no claim is made and the policy is still active.
          {'\n\n'}
          Critical Illnesses Covered:
          • Alzheimer’s Disease
          • Blindness (Severe Glaucoma or Cataract)
          • Cancer
          • Coma
          • Coronary Artery Disease requiring surgery
          • Heart Attack
          • Loss of use of limb due to medical causes
          • Major Burns
          • Multiple Sclerosis
          • Organ transplant
          • Paralysis
          • Renal Failure
          • Stroke
          {'\n\n'}
          – Free Annual Medical Check-up
          – Death/TPD Benefit
          – Benefit Escalator (Optional Benefit)
          {'\n\n'}
          To protect your benefit against the effect of inflation, your premium can be increased every year by an agreed percentage between 5% – 30%.
          {'\n\n'}
          Cover amount: 100gh a month
          Premium amount: unlimited cover
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
    color: 'red',
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

export default PrudentialpolicyScreen;
