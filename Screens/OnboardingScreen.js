import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const slides = [
  {
    key: 'one',
    title: 'Best Insurance plans',
    text: 'Best Health Insurance plans.\nCustomized for you.',
    image: require('../assets/onboarding1.png'), // Make sure the image paths are correct
    backgroundColor: 'white', // You can change the color to match your design
  },
  {
    key: 'two',
    title: 'Most Reliable Plans',
    text: 'Most Reliable Plans at Lowest Rates',
    image: require('../assets/onboarding2.png'), // Make sure the image paths are correct
    backgroundColor: 'white', // You can change the color to match your design
  },
  {
    key: 'three',
    title: 'Find Best Offers',
    text: 'Compare prices and find the best deals.',
    image: require('../assets/onboarding3.png'), // Make sure the image paths are correct
    backgroundColor: 'white', // You can change the color to match your design
  }
];

const OnboardingScreen = ({ navigation }) => {
  const renderSlide = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.replace('HomePage'); // Adjust this as needed for your navigation
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onDone} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <AppIntroSlider 
      renderItem={renderSlide} 
      data={slides} 
      onDone={onDone}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      bottomButton // Add this prop if you want the button to overlay on top of the dots
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 60,
    marginBottom: 100,
  },
  title: {
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
    marginTop: 16,
  },
  text: {
    fontSize: 25,
    color: '#437E9B',
    textAlign: 'center',
    // paddingHorizontal: 30,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36, // Adjust the value as needed for your design
  },
  button: {
    backgroundColor: '#437E9B',
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
  activeDotStyle: {
    backgroundColor: 'black',
  },
});

export default OnboardingScreen;
