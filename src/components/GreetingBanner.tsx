/**
 * GreetingBanner
 *
 * A small banner that greets the given name. Pure JS, no native deps.
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type GreetingBannerProps = {
  name: string;
};

function GreetingBanner({ name }: GreetingBannerProps) {
  return (
    <View style={styles.container}>
      <Text testID="greeting-banner-text" style={styles.text}>
        Hello, {name}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default GreetingBanner;
