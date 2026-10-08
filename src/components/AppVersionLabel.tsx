/**
 * @format
 */

import { StyleSheet, Text } from 'react-native';

type AppVersionLabelProps = {
  version: string;
};

function AppVersionLabel({ version }: AppVersionLabelProps) {
  return (
    <Text testID="app-version-label" style={styles.label}>
      v{version}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    padding: 8,
  },
});

export default AppVersionLabel;
