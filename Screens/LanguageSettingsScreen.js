import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LanguageSettingsScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English (UK)');

  const languages = [
    'English (US)',
    'English (UK)',
    'Mandarin',
    'Hindi',
    'Spanish',
    'French',
    'Arabic',
    'Russian',
    'Indonesia',
    'Vietnamese',
  ];

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Language</Text>
      <Text style={styles.sectionHeader}>Suggested</Text>
      {languages.slice(0, 2).map((language) => (
        <TouchableOpacity
          key={language}
          style={styles.languageItem}
          onPress={() => selectLanguage(language)}
        >
          <Text style={styles.languageText}>{language}</Text>
          <Feather name={selectedLanguage === language ? 'check-circle' : 'circle'} size={24} color="black" />
        </TouchableOpacity>
      ))}
      <Text style={styles.sectionHeader}>Others</Text>
      {languages.slice(2).map((language) => (
        <TouchableOpacity
          key={language}
          style={styles.languageItem}
          onPress={() => selectLanguage(language)}
        >
          <Text style={styles.languageText}>{language}</Text>
          <Feather name={selectedLanguage === language ? 'check-circle' : 'circle'} size={24} color="black" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 70, // Adjust this value to match your status bar + navbar height
    marginLeft: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 8,
    paddingLeft: 16,
    marginTop: 16,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  languageText: {
    fontSize: 16,
  },
});

export default LanguageSettingsScreen;
