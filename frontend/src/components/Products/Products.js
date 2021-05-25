import { Box, Button, Select, Flex, Heading, Image, Text } from '@chakra-ui/react';


import { FaHeart } from 'react-icons/fa';
import fotoVerduras from '../../assets/desktop/verduras.png';
import fotoCeu from '../../assets/desktop/ceu-vermelho.png';
import fotoPessoas from '../../assets/desktop/manifestacao.png';

const Products = () => {
    
  return (
    <Box
        position="relative" 
        h={["650px"]}
        padding="10"
        color="#9B9FA4"
        w="full"
    >
        <Box w="65%" float="left">
        <Image
            src={fotoVerduras}
            mr='5'
            float="left"
          />
            <Box>
                <FaHeart /> 732
                <Heading color="#31D8B3" fontSize="30px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing?
                </Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla odio aliquam phasellus ipsum blandit non egestas eget sit. 
                </Text>
            </Box>
        </Box>
        <Box w="35%" float="left" paddingLeft="15px">
            <Box>
                
                <Image
                    src={fotoCeu}
                    mr='5'
                    float="right"
                    w="50%"
                />
                <Box backgroundColor="white" paddingBottom='30px' >
                    <FaHeart /> 1045
                    <Heading color="#31D8B3" fontSize="30px">
                        Lorem ipsum dolor sit amet, consectetur.
                    </Heading>
                    
                </Box>
            </Box>
            <Box paddingTop="40px">
                <Image
                    src={fotoPessoas}
                    mr='5'
                    float="left"
                />
                <FaHeart /> 1045
                <Box>
                    <Heading color="#31D8B3" fontSize="30px">
                        Lorem ipsum dolor sit amet, consectetur.
                    </Heading>
                </Box>
            </Box>
        </Box>
          
  </Box>
  
);
};

export default Products;


  

  