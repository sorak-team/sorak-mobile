import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppProviders } from './src/app/providers';
import { COLORS } from './src/shared/constants/theme';

function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>S</Text>
        </View>
        <Text style={styles.title}>Sorak Mobile</Text>
        <Text style={styles.subtitle}>
          Hệ thống theo dõi sức khỏe và phát triển trẻ mầm non
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProviders>
        <MainScreen />
      </AppProviders>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 360,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  badge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.foreground,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.mutedForeground,
    textAlign: 'center',
    lineHeight: 20,
  },
});