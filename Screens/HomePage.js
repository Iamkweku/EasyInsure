import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const App = () => {

  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    console.log(`Category pressed: ${category}`);
    // Add navigation or other press handling logic here
  };

  const handleBellIconPress = () => {
    console.log('Bell icon pressed');
    // Add bell icon press handling logic here
  };

  const handleProfileIconPress = () => {
    console.log('Profile icon pressed');
    // Add profile icon press handling logic here
  };

  const handlePress = (title) => {
    console.log(`${title} pressed`);
    // Add any additional press handling logic here
  };



  return (
    <View style={styles.container}>
      {/* Header with logo and icons */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logoo.png')} // Replace with your logo's path
          style={styles.logo}
        />
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleBellIconPress}>
            <Feather name="bell" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconMargin}>
            <Feather name="user" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Insurance Plan"
        />
        <Feather name ='message-circle' size={40} color='#000'  style={styles.chaticon} onPress={() => navigation.navigate('ChatbotScreen')} />
      </View>

      {/* Horizontal ScrollView for categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
      >
        <TouchableOpacity onPress={() => handlePress('Health')}>
          <Image source={require('../assets/Health.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Motor')}>
          <Image source={require('../assets/Bike.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Car')}>
          <Image source={require('../assets/Car.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Property')}>
          <Image source={require('../assets/Property.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Fire')}>
          <Image source={require('../assets/Fire.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.budgetContainer}>
        <Text style={styles.budgetLabel}>What is your budget</Text>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={80}
          minimumTrackTintColor="#0000ff"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0000ff"
          value={25}
          onValueChange={(value) => console.log(value)}
        />
        <Text style={styles.budgetValue}>GH₵25K</Text>
      </View>

      <Text style={styles.RecommendText}>
        Recommended Health Insurance Plans On Your budget
      </Text>

      {/* ScrollView for Insurance Plans */}
      <ScrollView style={{flex: 1}}>
        <View style={styles.plansContainer}>
          {/* Plan components... */}
          <View style={styles.plan}>
            <Image
              source={require('../assets/Acacia.png')} // Replace with the actual image path
              style={styles.planImage}
            />
            <View style={styles.cardtext}>
              <Text style={styles.Companyname}>Acacia Health Insurance LTD</Text>
            </View>
            <Text style={styles.planName}>SupercarePlus Plan</Text>
            <Text style={styles.planDetails}>Cover Amount GH₵21k</Text>
            <Text style={styles.planDetails}>Premium GH₵1.18k/month</Text>
            {/* Additional details */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PolicyScreen')}>
              <Feather name="arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          
      <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.card}>
        <Image source={require('../assets/star.png')} style={styles.image} />
        <Text style={styles.cardTitle}>Most popular plans</Text>
        <TouchableOpacity onPress={() => {}} style={styles.button1}>
          <Text style={styles.buttonText}>Click</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/Money.png')} style={styles.image} />
        <Text style={styles.cardTitle}>Value for money plans</Text>
        <TouchableOpacity onPress={() => {}} style={styles.button1}>
          <Text style={styles.buttonText}>Click</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/healt.png')} style={styles.image} />
        <Text style={styles.cardTitle}>Best Health plans</Text>
        <TouchableOpacity onPress={() => {}} style={styles.button1}>
          <Text style={styles.buttonText}>Click</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
          <View style={styles.plan}>
            <Image
              source={require('../assets/Acacia.png')} // Replace with the actual image path
              style={styles.planImage}
            />
            <View style={styles.cardtext}>
              <Text style={styles.Companyname}>Acacia Health Insurance LTD</Text>
            </View>
            <Text style={styles.planName}>SupercarePlus Plan</Text>
            <Text style={styles.planDetails}>Cover Amount GH₵21k</Text>
            <Text style={styles.planDetails}>Premium GH₵1.18k/month</Text>
            {/* Additional details */}
            <TouchableOpacity style={styles.button}>
              <Feather name="arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
  logo: {
    width: 165,
    height: 75,
    resizeMode: 'stretch',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 20,
  },
  searchContainer: {
    paddingHorizontal: 20,
    flexDirection:'row',
    
    // alignItems: 'center',
  },
  
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#07A4DB',
    marginBottom: 20,
    flex: 1,
  },
  categoriesScroll: {
    paddingHorizontal: 20,
  },
  categoryIcon: {
    width: 77.11,
    height: 28.3,
    marginHorizontal: 10,
  },
  chaticon: {
    marginLeft: 10,
    paddingTop: 3,
  },
  budgetContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    marginTop: -480,
  },
  budgetLabel: {
    fontSize: 16,
    color: '#333333',
  },
  slider: {
    height: 40,
  },
  budgetValue: {
    textAlign: 'right',
    fontSize: 16,
    color: '#333333',
  },
  plansContainer: {
    alignItems: 'center',
  },
  RecommendText: {
    paddingLeft: 20,
    marginTop: -10,
    paddingBottom: 18,
    fontSize: 18,
    fontWeight: '300',
  },
  plan: {
    backgroundColor: '#fffafa',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  planImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    borderColor: 'black',
    marginRight: 15,
  },
  Companyname: {
    textAlign: 'center',
    marginTop: -60,
    marginLeft: 100,
    fontWeight: 'bold',
    fontSize: 20,
  },
  planName: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
  },
  planDetails: {
    fontSize: 14,
    color: '#666666',
    paddingVertical: 10,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#000',
    borderRadius: 15,
    width: 50,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  footerButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 25,
    width: '45%',
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 16,
  },

  scrollView: {
    backgroundColor: '#ffffff', // Set the background color of the scroll view
  },
  card: {
    backgroundColor: '#4a4a68', // The color of the card
    borderRadius: 30,
    margin: 10,
    width: 163, // Set the width of the card
    height: 213, // Set the height of the card
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60, // Set your image size
    height: 60, // Set your image size
    marginBottom: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  button1: {
    backgroundColor: '#7a7ab0', // Button background color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  // Add any additional styles as needed
});

export default App;



