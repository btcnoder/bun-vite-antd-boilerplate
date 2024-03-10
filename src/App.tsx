import { StyleProvider } from '@ant-design/cssinjs';
import Demo from '@/pages/demo';

const App = () => (
  <StyleProvider hashPriority="high">
    <Demo />
  </StyleProvider>
);

export default App;
