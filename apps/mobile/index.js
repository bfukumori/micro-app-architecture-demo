import { MicroAppRoot } from '@micro/core-navigation';
import { registerRootComponent } from 'expo';

const contexts = [
  {
    context: require.context('./app', true, /.*/),
    prefix: '.',
  },
  {
    context: require.context(
      '../higienization/app/(higienization)',
      true,
      /.*/
    ),
    prefix: '(higienization)',
  },
];

// Must be exported or Fast Refresh won't update the context
export function App() {
  return <MicroAppRoot contexts={contexts} />;
}

registerRootComponent(App);
