import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary';
import { themes } from './src/themes';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ErrorBoundary>
        <ThemeProvider theme={themes.light}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar/>
          </SafeAreaProvider>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
}
