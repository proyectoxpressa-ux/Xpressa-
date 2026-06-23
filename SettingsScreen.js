import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5B8CFF', '#7B61FF']}
        style={styles.gradient}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Configuración</Text>
          <Ionicons name="settings" size={24} color="white" />
        </View>
      </LinearGradient>
      <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Editar perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Modo oscuro</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
    paddingTop: 40,
  },
  
  gradient: {
    padding: 40.5,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    flexDirection: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -5,
    color: 'white',
  },

   cardContainer: {
    flexDirection: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    gap:10,
    marginTop:10,
  },

  option: {
    backgroundColor: 'white',
    borderRadius: 0,
    padding: 5,
    elevation: 2,
    shadowColor: '#300be6',
  },

  optionText: {
    fontSize: 15,
  },
});