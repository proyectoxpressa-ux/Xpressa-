import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  // Estados
  const [searchText, setSearchText] = useState('');
  const [profileVisible, setProfileVisible] = useState(false);
  const [progressPercent] = useState(75);

  // Manejadores de eventos
  const handleSearchPress = () => {
    if (searchText.trim()) {
      Alert.alert('Búsqueda', `Buscaste: ${searchText}`);
      setSearchText('');
    } else {
      Alert.alert('Error', 'Escribe algo para buscar');
    }
  };

  const handleProfilePress = () => {
    setProfileVisible(true);
  };

  const handleStartExercise = () => {//Aca va a estar el ejercicio del dia

  };

  const handleLettersPress = () => {
    navigation.navigate('Juegos'); // Navega a juegos, para las letras favoritas
  };

  const handleGamesPress = () => {
    navigation.navigate('Juegos'); // Navega directamente a Juegos
  };

  const handleProgressPress = () => {
    navigation.navigate('Progreso');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        {/* HEADER */}
        <LinearGradient
          colors={['#5B8CFF', '#7B61FF']}
          style={styles.header}
        >
          <View>
            <Text style={styles.greeting}>Hola 👋</Text>
            <Text style={styles.username}>Bienvenido a Xpressa+</Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={handleProfilePress}
          >
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
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearchPress}
          />
        </View>

        {/* QUICK ACTIONS */}
        <Text style={styles.sectionTitle}>Accesos rápidos</Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={handleLettersPress}
          >
            <Ionicons name="albums" size={32} color="#5B8CFF" />
            <Text style={styles.cardTitle}>Tus letras</Text>
            <Text style={styles.cardText}>
              Revisa tus letras favoritas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={handleGamesPress}
          >
            <Ionicons name="game-controller" size={32} color="#7B61FF" />
            <Text style={styles.cardTitle}>Juegos</Text>
            <Text style={styles.cardText}>
              Aprende jugando
            </Text>
          </TouchableOpacity>
        </View>

        {/* PROGRESS */}
        <Text style={styles.sectionTitle}>Tu progreso</Text>

        <TouchableOpacity
          style={styles.progressCard}
          onPress={handleProgressPress}
        >
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Nivel semanal</Text>
            <Text style={styles.progressPercent}>{progressPercent}%</Text>
          </View>

          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${progressPercent}%` },
              ]}
            />
          </View>

          <Text style={styles.progressText}>
            ¡Excelente trabajo! Sigue practicando.
          </Text>
        </TouchableOpacity>

        {/* DAILY EXERCISE */}
        <LinearGradient
          colors={['#7B61FF', '#5B8CFF']}
          style={styles.exerciseCard}
        >
          <Text style={styles.exerciseTitle}>
            Letra del día
          </Text>

          <Text style={styles.exerciseText}>
            Practica tus actividades con la letra R.
          </Text>

          <TouchableOpacity
            style={styles.exerciseButton}
            onPress={handleStartExercise}
          >
            <Text style={styles.exerciseButtonText}>
              Comenzar
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>

      {/* MODAL DE PERFIL */}
      <Modal visible={profileVisible} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setProfileVisible(false)}>
              <Ionicons name="close" size={30} color="#5B8CFF" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Mi Perfil</Text>
            <View style={{ width: 30 }} />
          </View>

          <View style={styles.modalContent}>
            <View style={styles.profileSection}>
              <View style={styles.profileAvatar}>
                <Ionicons name="person" size={50} color="white" />
              </View>
              <Text style={styles.profileName}>Juan Pérez</Text>
              <Text style={styles.profileEmail}>juan@ejemplo.com</Text>
            </View>

            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil" size={20} color="white" />
              <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton}>
              <Ionicons name="log-out" size={20} color="#5B8CFF" />
              <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
    paddingTop: -2,
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

  // ESTILOS DEL MODAL
  modalContainer: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },

  modalContent: {
    padding: 20,
  },

  profileSection: {
    alignItems: 'center',
    marginVertical: 40,
  },

  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#5B8CFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },

  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },

  editButton: {
    backgroundColor: '#5B8CFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
    gap: 10,
  },

  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  logoutButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    gap: 10,
    borderWidth: 1,
    borderColor: '#5B8CFF',
  },

  logoutButtonText: {
    color: '#5B8CFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});