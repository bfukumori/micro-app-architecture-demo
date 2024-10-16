import { LogBox, StyleSheet, Text } from 'react-native';

import { StyledPageLayout, StyledText } from '@micro/core-components';
import { useSession } from '@micro/core-auth';

LogBox.ignoreAllLogs();

export default function HomeScreen() {
  const { signOut } = useSession();

  return (
    <StyledPageLayout>
      <StyledText style={styles.title}>Main App</StyledText>
      <Text style={styles.signOut} onPress={signOut}>
        Sign out
      </Text>
    </StyledPageLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  signOut: {
    textAlign: 'center',
    margin: 64,
  },
});
