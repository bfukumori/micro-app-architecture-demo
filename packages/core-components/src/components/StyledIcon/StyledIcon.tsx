import { View } from 'react-native';
import { microColors } from '../../colors';
import { Chat } from './icons/Chat';

interface Props {
  name: 'card' | 'savings' | 'send-money' | 'add-money' | 'call' | 'chat';
  color?: string;
}

const getIcon = (name: Props['name'], color?: string) => {
  switch (name) {
    case 'chat':
      return <Chat color={color} />;

    default:
      return null;
  }
};

export const StyledIcon = ({ name, color }: Props) => {
  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          width: 48,
          height: 48,
          borderColor: microColors.darkGrey,
          borderWidth: 1,
          borderRadius: 16,
        },
      ]}
    >
      {getIcon(name, color)}
    </View>
  );
};
