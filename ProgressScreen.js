import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProgressScreen() {
  const [statsModalVisible, setStatsModalVisible] = useState(false);
  const [level] = useState(5);
  const [progress] = useState(75);

  const handleShowStats = () => {
    setStatsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5B8CFF', '#7B61FF']}
        style={styles.gradient}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tu progreso</Text>
          <TouchableOpacity onPress={handleShowStats}>
            <Ionicons name="trophy" size={24} color="#FFD700" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <TouchableOpacity
        style={styles.card}
        onPress={handleShowStats}
        activeOpacity={0.7}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.levelTitle}>Nivel {level}</Text>
            <Text style={styles.text}>
              Completaste {level * 4 + Math.floor(progress / 25)} ejercicios
            </Text>
          </View>
          <View style={styles.levelBadge}>
            <Text style={styles.levelNumber}>{level}</Text>
          </View>
        </View>

        <View style={styles.barBackground}>
          <View style={[styles.barFill, { width: `${progress}%` }]} />
        </View>

        <Text style={styles.percent}>{progress}%</Text>

      </TouchableOpacity>

      {/* MODAL DE ESTADÍSTICAS */}
      <Modal visible={statsModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Estadísticas Detalladas</Text>
              <TouchableOpacity onPress={() => setStatsModalVisible(false)}>
                <Ionicons name="close" size={28} color="#5B8CFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.statsGrid}>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>5</Text>
                <Text style={styles.statName}>Rachas</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>45</Text>
                <Text style={styles.statName}>Ejercicios</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>88%</Text>
                <Text style={styles.statName}>Precisión</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>15h</Text>
                <Text style={styles.statName}>Tiempo</Text>
              </View>
            </View>

            <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}>Progreso Semanal</Text>
              <View style={styles.weekChart}>
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom'].map(
                  (day, index) => (
                    <View key={day} style={styles.dayBar}>
                      <View
                        style={[
                          styles.bar,
                          {
                            height: `${(index + 1) * 15}%`,
                            backgroundColor:
                              index < 5
                                ? '#5B8CFF'
                                : 'rgba(91, 140, 255, 0.3)',
                          },
                        ]}
                      />
                      <Text style={styles.dayLabel}>{day}</Text>
                    </View>
                  )
                )}
              </View>
            </View>

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setStatsModalVisible(false)}
            >
              <Text style={styles.closeModalButtonText}>Cerrar</Text>
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

  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 20,
    elevation: 10,
    shadowColor: '#5B8CFF',
    marginTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  levelTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  text: {
    marginTop: 5,
    color: '#666',
  },

  levelBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5B8CFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  levelNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },

  barBackground: {
    height: 14,
    backgroundColor: '#E4E8FF',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },

  barFill: {
    height: '100%',
    backgroundColor: '#5B8CFF',
  },

  percent: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#5B8CFF',
    fontSize: 16,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },

  actionButton: {
    flex: 1,
    backgroundColor: '#5B8CFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    gap: 8,
  },

  levelUpButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#5B8CFF',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },

  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 40,
    maxHeight: '90%',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },

  statBox: {
    width: '48%',
    backgroundColor: '#F5F7FF',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B8CFF',
  },

  statName: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },

  chartContainer: {
    marginBottom: 20,
  },

  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  },

  weekChart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 150,
  },

  dayBar: {
    alignItems: 'center',
    flex: 1,
  },

  bar: {
    width: '70%',
    borderRadius: 5,
  },

  dayLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 10,
  },

  closeModalButton: {
    backgroundColor: '#5B8CFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  closeModalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});