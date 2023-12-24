import React, { useState } from 'react';
import { View, Text, Switch, Image, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';



export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
  const navigation = useNavigation();

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setProfileImage(pickerResult.uri);
  };

  const OptionItem = ({ icon, iconLib, title, onPress, isSwitch, switchValue, onSwitch }) => (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      {iconLib === 'Feather' ? <Feather name={icon} size={24} color="black" /> : <MaterialIcons name={icon} size={24} color="black" />}
      <Text style={styles.optionText}>{title}</Text>
      {isSwitch ? (
        <Switch value={switchValue} onValueChange={onSwitch} />
      ) : (
        <Feather name="chevron-right" size={24} color="black" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header1}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Feather name="arrow-left" size={24} color="black" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <TouchableOpacity style={styles.profileContainer} onPress={handleImagePicker}>
          <Image style={styles.avatar} source={{ uri: profileImage }} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Daniel Doe</Text>
            <Text style={styles.userHandle}>@Danny01</Text>
          </View>
          <Feather name="edit-2" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.optionsContainer}>
          <OptionItem icon="settings" iconLib="Feather" title="My Account" onPress={() => navigation.navigate('MyAccountScreen')}  />
          <OptionItem icon="notifications-none" iconLib="MaterialIcons" title="Notification" onPress={() => navigation.navigate('NotificationSettingsScreen')} />
          <OptionItem icon="brightness-2" iconLib="MaterialIcons" title="Turn On Dark Mode" isSwitch={true} switchValue={darkMode} onSwitch={() => setDarkMode(!darkMode)} />
          <OptionItem icon="language" iconLib="MaterialIcons" title="Language" onPress={() => navigation.navigate('LanguageSettingsScreen')} />
          <OptionItem icon="exit-to-app" iconLib="MaterialIcons" title="Log out" onPress={() => navigation.navigate('Login')} />
        </View>
        
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backIcon: {
        marginRight: 10,
        paddingLeft: 30,
        paddingTop: -5,
    },
    optionsContainer: {
        marginTop: 20,
      },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#dedede',
    },
    headerTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 26,
      marginTop: 20,
      marginBottom: 20,
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fffafa',
      borderRadius: 10,
    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 16,
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    userHandle: {
      fontSize: 16,
      color: '#666',
    },
    option: {
        flexDirection: 'row',
        paddingVertical: 40, 
        paddingHorizontal: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dedede',
        backgroundColor: '#ffffff', 
      },
    optionText: {
      flex: 1,
      marginLeft: 16,
      fontSize: 16,
    },

    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 16,
        borderTopWidth: 1,
        borderColor: '#cccccc',
      },
  });
  



