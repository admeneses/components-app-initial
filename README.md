# Components App - React Native com NativeWind

Este projeto é uma aplicação React Native/Expo configurada com **NativeWind** para estilização baseada em Tailwind CSS, focada na criação e organização de componentes reutilizáveis.

## Stack

- **React Native** 0.79.5
- **Expo** 53.0.22
- **NativeWind** (última versão)
- **TypeScript** 5.8.3
- **Tailwind CSS** 3.4.0

## 📁 Estrutura do Projeto

```
components-app/
├── components/           # Componentes reutilizáveis
│   ├── Container.tsx    # Container principal com SafeAreaView
│   ├── EditScreenInfo.tsx
│   └── ScreenContent.tsx
├── assets/              # Recursos estáticos
├── App.tsx             # Componente principal da aplicação
├── global.css          # Estilos globais do Tailwind
├── tailwind.config.js  # Configuração do Tailwind CSS
├── babel.config.js     # Configuração do Babel com NativeWind
├── metro.config.js     # Configuração do Metro bundler
└── package.json        # Dependências e scripts
```

## Configurações

### 1. NativeWind Setup

O projeto está configurado com NativeWind para usar classes do Tailwind CSS diretamente nos componentes React Native.

#### Babel Configuration (`babel.config.js`)
```javascript
module.exports = function (api) {
  api.cache(true);
  let plugins = [];

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }], 
      'nativewind/babel'
    ],
    plugins,
  };
};
```

#### Metro Configuration (`metro.config.js`)
```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
```

#### Tailwind Configuration (`tailwind.config.js`)
```javascript
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2. Estilos Globais (`global.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. TypeScript Support

O projeto inclui suporte completo ao TypeScript com:
- `tsconfig.json` configurado para React Native
- `nativewind-env.d.ts` para tipos do NativeWind
- `app-env.d.ts` para tipos da aplicação

## Componentes

### Container Component
```typescript
import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className={styles.container}>{children}</SafeAreaView>;
};

const styles = {
  container: 'flex flex-1 m-6',
};
```

**Características:**
- Usa `SafeAreaView` para compatibilidade com diferentes dispositivos
- Aplica classes Tailwind via objeto `styles`
- Componente wrapper reutilizável

### Uso dos Componentes
```typescript
import { ScreenContent } from 'components/ScreenContent';
import { EditScreenInfo } from 'components/EditScreenInfo';

export default function App() {
  return (
    <ScreenContent
      title="Home"
      path="App.tsx"
      children={<EditScreenInfo path="App.tsx" />}
    />
  );
}
```

## NativeWind

### Classes Tailwind Disponíveis
- **Layout**: `flex`, `flex-1`, `m-6`, `p-4`
- **Cores**: `text-red-500`, `bg-blue-600`
- **Tipografia**: `text-lg`, `font-bold`
- **Espaçamento**: `mt-4`, `mb-2`, `px-3`
- **Bordas**: `rounded-lg`, `border-2`

### Exemplo de Uso
```typescript
// Aplicando classes diretamente
<Text className="text-red-500 font-bold text-lg">
  Texto estilizado
</Text>

// Usando objeto styles (recomendado para componentes)
const styles = {
  button: 'bg-blue-500 px-4 py-2 rounded-lg',
  text: 'text-white font-semibold text-center',
};
```

## Scripts

```bash
# Desenvolvimento
npm start          # Inicia o servidor de desenvolvimento
npm run ios        # Executa no simulador iOS
npm run android    # Executa no emulador Android
npm run web        # Executa na web

# Qualidade de Código
npm run lint       # Executa ESLint
npm run format     # Formata código com Prettier
```

## Executando o Projeto

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o projeto:**
   ```bash
   npm start
   ```

3. **Escolher plataforma:**
   - Pressione `i` para iOS
   - Pressione `a` para Android
   - Pressione `w` para web

## Configurações de Desenvolvimento

### ESLint
- Configurado com `eslint-config-expo`
- Integrado com Prettier
- Regras específicas para React Native

### Prettier
- Configurado com `prettier-plugin-tailwindcss`
- Formatação automática de classes Tailwind
- Integração com ESLint

## Recursos Adicionais

- **React Native Reanimated**: Para animações fluidas
- **Safe Area Context**: Para compatibilidade com diferentes dispositivos
- **Status Bar**: Configuração automática da barra de status
