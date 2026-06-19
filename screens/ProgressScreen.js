import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient 
      colors={['#5B8CFF', '#7B61FF']} 
      style={styles.gradient}>

      <View style={styles.titleContainer}>
        
        <Text style={styles.title}>Tu progreso </Text>
        <Ionicons name="trophy" size={24} color="#FFD700" />
        
      </View>

      </LinearGradient>

      <View style={styles.card}>
        <View style={styles.header}>
         <Text style={styles.title}>Nivel 5</Text>
         <Text style={styles.text}>Completaste 18 ejercicios</Text>
        </View>

        <View style={styles.barBackground}>
          <View style={styles.barFill} />
        </View>

        <Text style={styles.percent}>75%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
    paddingTop:28,
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

  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 20,
    elevation: 10,
    shadowColor: '#5B8CFF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  level: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  text: {
    marginTop: 10,
    color: '#666',
  },

  barBackground: {
    height: 14,
    backgroundColor: '#E4E8FF',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },

  barFill: {
    width: '75%',
    height: '100%',
    backgroundColor: '#5B8CFF',
  },

  percent: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#5B8CFF',
  },
});