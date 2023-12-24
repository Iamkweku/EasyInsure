import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const NotificationSettingsScreen = ({ navigation }) => {
  const [settings, setSettings] = useState({
    generalNotification: false,
    sound: true,
    vibrate: false,
    appUpdates: false,
    renewalReminder: true,
    promotion: false,
    discountAvailable: true,
    alert: false,
    newServiceAvailable: false,
    newTipsAvailable: true,
  });

  const toggleSwitch = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Notifications</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Common</Text>
        {['generalNotification', 'sound', 'vibrate'].map((setting) => (
          <View style={styles.option} key={setting}>
            <Text style={styles.optionText}>{setting.split(/(?=[A-Z])/).join(' ')}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={settings[setting] ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={() => toggleSwitch(setting)}
              value={settings[setting]}
            />
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>System & services update</Text>
        {['appUpdates', 'renewalReminder', 'promotion', 'discountAvailable', 'alert'].map((setting) => (
          <View style={styles.option} key={setting}>
            <Text style={styles.optionText}>{setting.split(/(?=[A-Z])/).join(' ')}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={settings[setting] ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={() => toggleSwitch(setting)}
              value={settings[setting]}
            />
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Others</Text>
        {['newServiceAvailable', 'newTipsAvailable'].map((setting) => (
          <View style={styles.option} key={setting}>
            <Text style={styles.optionText}>{setting.split(/(?=[A-Z])/).join(' ')}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={settings[setting] ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={() => toggleSwitch(setting)}
              value={settings[setting]}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  section: {
    marginBottom: 35,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default NotificationSettingsScreen;
