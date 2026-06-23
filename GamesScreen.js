import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function GamesScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#5B8CFF', '#7B61FF']} 
      style={styles.gradient}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Juegos</Text>
        <Ionicons name="game-controller" size={24} color="white"/>
      </View>

      </LinearGradient>

      <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.gameCard}>
        <Text style={styles.gameTitle}>Pronuncia la R</Text>
        <Text style={styles.gameText}>
          Completa palabras con la letra R
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.gameCard}>
        <Text style={styles.gameTitle}>Memoria</Text>
        <Text style={styles.gameText}>
          Encuentra las parejas correctas
        </Text>
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
    gap:20,
    marginTop:20,
  },


  gameCard: {
    backgroundColor: 'white',
    borderRadius: 22,
    padding: 20,
    elevation: 8,
    shadowColor: '#300be6',
  },

  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  gameText: {
    color: '#666',
    marginTop: 8,
  },
});