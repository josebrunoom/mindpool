import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';
import Action from './components/Action';

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Products />
      <Action />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
