import {
  Box,
  Button,
  Text,
  useMediaQuery,
  Heading,
} from '@chakra-ui/react';

import DesktopEarth from '../../assets/desktop/verduras.png';
import DesktopSky from '../../assets/desktop/ceu-vermelho.png';
import DesktopPeople from '../../assets/desktop/manifestacao.png';
import { FaRegHeart, FaLongArrowAltRight } from 'react-icons/fa';


const Action = () => {
  const [isSmallerThanTablet] = useMediaQuery('(max-width: 48em)');

  return (
    <Box position="relative" textAlign="center" pt="10" px="10" bg="white" w="full" h="350px">
    
      <Text
        textTransform="uppercase"
        fontWeight="hairline"
        fontSize="14px"
        letterSpacing="widest"
        textAlign="center"
        mb="35px"
        color="#9B9FA4"
      >
        TAKE ACTION NOW
      </Text>
      <Box margin="auto" w="50%">
        <Heading>
          Do you think employess can change 
          the way your board thinks?
        </Heading>
        <Button
          bg='linear-gradient(135deg, #00FFBF 0%, #31D8B3 33.33%, #1C987D 100%);' 
          w='25%'
          mr='5%'
          borderRadius='50px'
          mt='33px'
          color="white"
        >
          Yes
        </Button>
        <Button
          bg='linear-gradient(135deg, #00FFBF 0%, #31D8B3 33.33%, #1C987D 100%);' 
          w='25%'
          borderRadius='50px'
          mt='33px'
          color="white"
        >
          No
        </Button>
      </Box>
    </Box>
  );
};

export default Action;
