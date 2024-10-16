import { StyleSheet } from 'react-native';

import { StyledPageLayout, StyledText } from '@micro/core-components';
import { ExampleWidget } from '../widgets';

export const HigienizationScreen = () => (
  <StyledPageLayout>
    <StyledText style={styles.title}>Higienization Screen</StyledText>
    <ExampleWidget />
  </StyledPageLayout>
);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});
