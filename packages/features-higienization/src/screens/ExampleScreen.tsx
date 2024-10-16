import { StyleSheet } from 'react-native';
import { StyledPageLayout, StyledText } from '@micro/core-components';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { useSession } from '@micro/core-auth';

export const ExampleScreen = () => {
  const navigation = useNavigation();
  const { session } = useSession();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Example Screen',
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <StyledPageLayout>
      <StyledText style={styles.title}>Examples Screen Content</StyledText>
      <StyledText style={styles.title}>{JSON.stringify(session)}</StyledText>
    </StyledPageLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});
