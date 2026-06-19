import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <LinearGradient
          colors={['#5B8CFF', '#7B61FF']}
          style={styles.header}
        >
          <View>
            <Text style={styles.greeting}>Hola 👋</Text>
            <Text style={styles.username}>Bienvenido a Xpressa+</Text>
          </View>

          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person" size={26} color="white" />
          </TouchableOpacity>
        </LinearGradient>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" />
          <TextInput
            placeholder="Buscar ejercicios..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>

        {/* QUICK ACTIONS */}
        <Text style={styles.sectionTitle}>Accesos rápidos</Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="albums" size={32} color="#5B8CFF" />
            <Text style={styles.cardTitle}>Tus letras</Text>
            <Text style={styles.cardText}>
              Revisa tus letras favoritas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="game-controller" size={32} color="#7B61FF" />
            <Text style={styles.cardTitle}>Juegos</Text>
            <Text style={styles.cardText}>
              Aprende jugando
            </Text>
          </TouchableOpacity>
        </View>

        {/* PROGRESS */}
        <Text style={styles.sectionTitle}>Tu progreso</Text>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Nivel semanal</Text>
            <Text style={styles.progressPercent}>75%</Text>
          </View>

          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>

          <Text style={styles.progressText}>
            ¡Excelente trabajo! Sigue practicando.
          </Text>
        </View>

        {/* DAILY EXERCISE */}
        <LinearGradient
          colors={['#7B61FF', '#5B8CFF']}
          style={styles.exerciseCard}
        >
          <Text style={styles.exerciseTitle}>
            Letra del día
          </Text>

          <Text style={styles.exerciseText}>
            Practica tus actividades con la letra “R”.
          </Text>

          <TouchableOpacity style={styles.exerciseButton}>
            <Text style={styles.exerciseButtonText}>
              Comenzar
            </Text>
          </TouchableOpacity>
        </LinearGradient>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },

  header: {
    padding: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    color: 'white',
    fontSize: 18,
  },

  username: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 4,
  },

  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: -30,
    borderRadius: 16,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    height: 55,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
    color: '#222',
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },

  card: {
    backgroundColor: 'white',
    width: '48%',
    borderRadius: 22,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#222',
  },

  cardText: {
    marginTop: 8,
    color: '#666',
  },

  progressCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  progressPercent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5B8CFF',
  },

  progressBarBackground: {
    height: 12,
    backgroundColor: '#E4E8FF',
    borderRadius: 10,
    marginTop: 15,
    overflow: 'hidden',
  },

  progressBarFill: {
    width: '75%',
    height: '100%',
    backgroundColor: '#5B8CFF',
    borderRadius: 10,
  },

  progressText: {
    marginTop: 12,
    color: '#666',
    fontSize: 15,
  },

  exerciseCard: {
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 24,
    padding: 24,
    marginBottom: 100,
  },

  exerciseTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  exerciseText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    opacity: 0.9,
  },

  exerciseButton: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  exerciseButtonText: {
    color: '#5B8CFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
