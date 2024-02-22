import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StarlifepolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/StarLife.jpg')} style={styles.logo} />
        <Text style={styles.headerTitle}>StarLife Insurance LTD</Text>
      </View>

      <Image source={require('../assets/pruImage.jpg')} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Our Products</Text>
      <Text style={styles.sectionSubtitle}>We provide various products to serve your needs</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Family Protection Plan</Text>
        <Text style={styles.contentHeader}>Comprehensive Coverage for Your Loved Ones</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InsuranceForm')}>
          <Text style={styles.buttonText}>SIGN UP NOW</Text>
        </TouchableOpacity>

        <Text style={styles.contentText}>
          Embrace the peace of mind that comes with the Family Protection Plan from StarLife Insurance LTD. Our plan is specifically designed to provide comprehensive coverage, ensuring your family's financial stability in any circumstance.
          {'\n\n'}
          KEY BENEFITS:
          {'\n\n'}
          • High Cover Amount: Enjoy a substantial safety net of GH₵300k for your family's security.
          • Manageable Premiums: Benefit from extensive coverage at a premium of GH₵900/month.
          • Immediate Activation: Get coverage from the moment you sign up with us.
          • Tailored Policies: Customize your coverage to align with your family's unique needs and goals.
          {'\n\n'}
          Choose StarLife Insurance LTD and secure a robust financial foundation for your family with our Family Protection Plan.
          {'\n\n'}
          Cover amount: GH₵300k
          Premium: GH₵900/month
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
          backgroundColor: 'blue',
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
      

export default StarlifepolicyScreen;
