import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChatbotScreen = () => {
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const navigation = useNavigation();

  const handleSend = () => {
    console.log(userInput);
    setUserInput('');
  };

  return (
    <View style={styles.container}>
      <Feather name="arrow-left" size={24} style={styles.backIcon} onPress={() => navigation.navigate('HomePage')} />
      {!isTyping && (
        <>
          <Image source={require('../assets/chatbotImg.png')} style={styles.logo} />
          <Text style={styles.helperText}>
            I'm here to help you with whatever you need, from answering questions to providing recommendations. Let's chat!
          </Text>
        </>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything..."
          value={userInput}
          onChangeText={(text) => {
            setUserInput(text);
            setIsTyping(text.length > 0);
          }}
          onBlur={() => setIsTyping(false)}
        />
        <TouchableOpacity onPress={handleSend}>
          <Feather name="send" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50, // Adjust to fit your device's status bar
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  backIcon: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50, // Adjust as needed
    paddingTop: 100,
  },
  brandName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },

  helperText: {
    textAlign: 'center',
    marginHorizontal: 20,

    // Other styles as needed
  },

  helperText: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 100,
    marginHorizontal: 20,
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 15,
    marginTop: 388,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
});

export default ChatbotScreen;
