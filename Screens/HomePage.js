
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const insurancePlans = [
  {
    companyName: 'Prudential Insurance LTD',
    planName: 'SupercarePlus Plan',
    coverAmount: 'GH₵20k',
    premium: 'GH₵150/month',
    image: require('../assets/Prudentential.png'),
    policyScreen: 'PrudentialpolicyScreen',
  },
  {
    companyName: 'Hollard Insurance LTD',
    planName: 'Adepa Funeral Plan ',
    coverAmount: 'GH₵100k',
    premium: 'GH₵300/month',
    image: require('../assets/Hollard.jpg'),
    policyScreen: 'HollardInsuranceScreen',
  },

  {
    companyName: 'MiLife Insurance LTD',
    planName: 'MiTribute Plan',
    coverAmount: 'GH₵30k',
    premium: 'GH₵100/month',
    image: require('../assets/Milife.png'),
    policyScreen: 'MilifepolicyScreen',
  },
  {
    companyName: 'SIC Insurance LTD',
    planName: 'Life Insurance',
    coverAmount: 'GH₵10k',
    premium: 'GH₵20/month',
    image: require('../assets/Sic.jpg'),
    policyScreen: 'SicpolicyScreen',
  },

  {
    companyName: 'StarLife Insurance LTD',
    planName: 'Family Protection Plan',
    coverAmount: 'GH₵300k',
    premium: 'GH₵900/month',
    image: require('../assets/StarLife.jpg'),
    policyScreen: 'StarlifepolicyScreen',
  },
 
 
  // ... more plans
];

const App = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const renderFilteredPlans = (plans) => {
    return plans
      .filter(plan => plan.companyName.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((plan, index) => (
        <View key={index} style={styles.plan}>
          <Image source={plan.image} style={styles.planImage} />
          <View style={styles.cardtext}>
            <Text style={styles.Companyname}>{plan.companyName}</Text>
          </View>
          <Text style={styles.planName}>{plan.planName}</Text>
          <Text style={styles.planDetails}>Cover Amount {plan.coverAmount}</Text>
          <Text style={styles.planDetails}>Premium {plan.premium}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(plan.policyScreen, { planDetails: plan })}>
            <Feather name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ));
  };
  

  const renderSpecialCards = () => {
    return (
      <ScrollView horizontal={true} style={styles.specialCardContainer}>
        <View style={styles.specialCard}>
          <Image source={require('../assets/star.png')} style={styles.specialCardImage} />
          <Text style={styles.specialCardTitle}>Most Popular Plans</Text>
          <TouchableOpacity style={styles.specialCardButton} onPress={() => {}}>
            <Text style={styles.specialCardButtonText}>Click</Text>
          </TouchableOpacity>
        </View>
        {/* ... Other special cards */}
        <View style={styles.specialCard}>
        <Image source={require('../assets/Money.png')} style={styles.specialCardImage} />
        <Text style={styles.specialCardTitle}>Most Popular Plans</Text>
          <TouchableOpacity style={styles.specialCardButton} onPress={() => {}}>
            <Text style={styles.specialCardButtonText}>Click</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.specialCard}>
        <Image source={require('../assets/healt.png')} style={styles.specialCardImage} />
        <Text style={styles.specialCardTitle}>Most Popular Plans</Text>
          <TouchableOpacity style={styles.specialCardButton} onPress={() => {}}>
            <Text style={styles.specialCardButtonText}>Click</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logoo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => setShowNotification(!showNotification)}>
            <Feather name="bell" size={24} color="#000" />
            {showNotification && (
              <View style={styles.notificationPopup}>
                <Text>No Notification!</Text>
              </View>
            )}
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
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Feather name='message-circle' size={40} color='#000' style={styles.chaticon} onPress={() => navigation.navigate('ChatbotScreen')} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
      >
        {/* Replace these TouchableOpacities with your actual category buttons */}
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Image source={require('../assets/Heathy.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Motor')}>
          <Image source={require('../assets/Bike.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Car')}>
          <Image source={require('../assets/Car.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Property')}>
          <Image source={require('../assets/Property.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Fire')}>
        <Image source={require('../assets/Fire.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
      </ScrollView>

      <View>
       <Text style={styles.RecommendText}>Recommended Health Insurance Plans</Text>
      </View>
      
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.plansContainer}>
          {renderFilteredPlans(insurancePlans.slice(0, 1))}
          {/* Conditionally render special cards based on search query */}
          {searchQuery === '' && renderSpecialCards()}
          {renderFilteredPlans(insurancePlans.slice(1))}
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
    paddingTop: 35,
  },
  logo: {
    width: 165,
    height: 75,
    resizeMode: 'stretch',
  },
  iconsContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  iconMargin: {
    marginLeft: 20,
  },
  notificationPopup: {
    position: 'absolute',
    top: 30,
    right: 0,
    width: 200,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    zIndex: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#07A4DB',
    marginRight: 10,
  },
  chaticon: {
    paddingTop: 3,
  },
  categoriesScroll: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  categoryIcon: {
    width: 77.11,
    height: 28.3,
    marginHorizontal: 10,
  },
  RecommendText: {
    paddingLeft: 20,
    marginTop: -600,
    paddingBottom: 18,
    fontSize: 18,
    fontWeight: '300',
  },
  plansContainer: {
    alignItems: 'center',
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
  specialCardContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  specialCard: {
    backgroundColor: '#4a4a68',
    borderRadius: 30,
    margin: 10,
    width: 163,
    height: 213,
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialCardImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  specialCardTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  specialCardButton: {
    backgroundColor: '#7a7ab0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  specialCardButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
