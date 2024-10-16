import {
  StyledIcon,
  StyledListItem,
  Widget,
  microColors,
} from '@micro/core-components';
import { useRouter } from 'expo-router';

export const ExampleWidget = () => {
  const router = useRouter();

  return (
    <Widget style={{ marginTop: 16 }}>
      <StyledListItem
        title="Example"
        subtitle="Direciona para alguma rota interna do micro-app"
        icon={<StyledIcon name="chat" color={microColors.blue} />}
        onPress={() => router.navigate('(higienization)/example')}
      />
    </Widget>
  );
};
