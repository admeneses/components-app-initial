import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { EditScreenInfo } from 'components/EditScreenInfo';

import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent
        title="Home"
        path="App.tsx"
        // children={<Text className="text-red-500">Teste children</Text>}
        children={<EditScreenInfo path="App.tsx" />}
      ></ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
