import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [profileModalVisible, setProfileModalVisible] = useState(false);

  const handleProfileEdit = () => {
    setProfileModalVisible(true);
  };

  const handleNotificationsToggle = (value) => {
    setNotifications(value);//notificaciones

  };

  const handleDarkModeToggle = (value) => {
    setDarkMode(value);//modo oscuro
  };

  const handleSoundToggle = (value) => {
    setSoundEnabled(value);//sonido
  };

  const handleLogout = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Cerrar sesión',
          onPress: () =>[],
          style: 'destructive',
        },
      ]
    );
  };

  const handleAbout = () => {
    Alert.alert(
      'Acerca de Xpressa+',
      'Xpressa+ v1.0.0\nAplicación de terapia del habla\n© 2024 Todos los derechos reservados'
    );
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
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
        {/* PERFIL */}
        <TouchableOpacity
          style={styles.optionCard}
          onPress={handleProfileEdit}
        >
          <View style={styles.optionLeft}>
            <View style={styles.iconBox}>
              <Ionicons name="person" size={24} color="#5B8CFF" />
            </View>
            <View>
              <Text style={styles.optionTitle}>Editar perfil</Text>
              <Text style={styles.optionSubtitle}>
                Actualiza tu información
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#CCC" />
        </TouchableOpacity>

        {/* NOTIFICACIONES */}
        <View style={styles.optionCard}>
          <View style={styles.optionLeft}>
            <View style={styles.iconBox}>
              <Ionicons name="notifications" size={24} color="#5B8CFF" />
            </View>
            <View>
              <Text style={styles.optionTitle}>Notificaciones</Text>
              <Text style={styles.optionSubtitle}>
                Recibe recordatorios diarios
              </Text>
            </View>
          </View>
          <Switch
            value={notifications}
            onValueChange={handleNotificationsToggle}
            trackColor={{ false: '#DDD', true: '#5B8CFF' }}
          />
        </View>

        {/* SONIDO */}
        <View style={styles.optionCard}>
          <View style={styles.optionLeft}>
            <View style={styles.iconBox}>
              <Ionicons name="volume-high" size={24} color="#5B8CFF" />
            </View>
            <View>
              <Text style={styles.optionTitle}>Sonido</Text>
              <Text style={styles.optionSubtitle}>
                Efectos de sonido y pronunciación
              </Text>
            </View>
          </View>
          <Switch
            value={soundEnabled}
            onValueChange={handleSoundToggle}
            trackColor={{ false: '#DDD', true: '#5B8CFF' }}
          />
        </View>

        {/* MODO OSCURO */}
        <View style={styles.optionCard}>
          <View style={styles.optionLeft}>
            <View style={styles.iconBox}>
              <Ionicons name="moon" size={24} color="#5B8CFF" />
            </View>
            <View>
              <Text style={styles.optionTitle}>Modo oscuro</Text>
              <Text style={styles.optionSubtitle}>Tema para la noche</Text>
            </View>
          </View>
          <Switch
            value={darkMode}
            onValueChange={handleDarkModeToggle}
            trackColor={{ false: '#DDD', true: '#5B8CFF' }}
          />
        </View>

        {/* ACERCA DE */}
        <TouchableOpacity
          style={styles.optionCard}
          onPress={handleAbout}
        >
          <View style={styles.optionLeft}>
            <View style={styles.iconBox}>
              <Ionicons name="information-circle" size={24} color="#5B8CFF" />
            </View>
            <View>
              <Text style={styles.optionTitle}>Acerca de</Text>
              <Text style={styles.optionSubtitle}>Versión y información</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#CCC" />
        </TouchableOpacity>

        {/* CERRAR SESIÓN */}
        <TouchableOpacity
          style={[styles.optionCard, styles.logoutCard]}
          onPress={handleLogout}
        >
          <View style={styles.optionLeft}>
            <View style={[styles.iconBox, styles.logoutIconBox]}>
              <Ionicons name="log-out" size={24} color="#FF6B6B" />
            </View>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* MODAL DE EDITAR PERFIL */}
      <Modal visible={profileModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setProfileModalVisible(false)}>
              <Ionicons name="close" size={28} color="#5B8CFF" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Editar Perfil</Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Guardado', 'Los cambios se han guardado');
                setProfileModalVisible(false);
              }}
            >
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileEditForm}>
            <View style={styles.avatarSection}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={60} color="white" />
              </View>
              <TouchableOpacity style={styles.changeAvatarButton}>
                <Ionicons name="camera" size={20} color="white" />
                <Text style={styles.changeAvatarText}>Cambiar foto</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>Nombre</Text>
              <View style={styles.input}>
                <Text>ian peralta</Text>
              </View>
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.input}>
                <Text>ian08.mp@gmail.com</Text>
              </View>
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>Edad</Text>
              <View style={styles.input}>
                <Text>18 años</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Actualizar información</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
    paddingTop: 40,
  },

  darkContainer: {
    backgroundColor: '#1a1a1a',
  },

  gradient: {
    padding: 40.5,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    flexDirection: 'row',
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
    flex: 1,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -5,
    color: 'white',
  },

  cardContainer: {
    marginHorizontal: 20,
    gap: 15,
    marginTop: 20,
    marginBottom: 40,
  },

  optionCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 15,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F0F4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },

  optionSubtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 3,
  },

  logoutCard: {
    backgroundColor: '#FFE6E6',
  },

  logoutIconBox: {
    backgroundColor: '#FFE6E6',
  },

  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },

  // MODAL STYLES
  modalContainer: {
    flex: 1,
    backgroundColor: '#F5F7FF',
    paddingTop: 40,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  saveButtonText: {
    color: '#5B8CFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  profileEditForm: {
    padding: 20,
  },

  avatarSection: {
    alignItems: 'center',
    marginBottom: 30,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#5B8CFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  changeAvatarButton: {
    backgroundColor: '#5B8CFF',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    gap: 8,
  },

  changeAvatarText: {
    color: 'white',
    fontWeight: 'bold',
  },

  formField: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
  },

  updateButton: {
    backgroundColor: '#5B8CFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },

  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});