import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

import iconMindpool from '../../assets/desktop/mindpool_footer.png';

const Footer = () => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 62em)');

  return (
    <Box bgColor="black" float="left" w="100%">
      <Flex
        color="white"
        textAlign="center"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={['column', 'column', 'column', 'row']}
        py="12"
        px="4"
        maxW={['container.sm', 'container.sm', 'container.sm', 'container.lg']}
        mx="auto"
      >
        <Box>
          <Image textAlign={['center', 'center', 'center', 'left']}
           src={iconMindpool}
            mr='5'
           float="left"
           width="60%"
          />
          </Box>
        <Box>
         
            <Text mt="4" color="white">
              SIGN UP FOR OUR NEWSLETTER
            </Text>
            <Input w="60%" mb="10px" value="Name"/>
            <Input w="60%" value="Email"/>
              
          <Text mt="4" color="white">
          Terms & Conditions       Privacy Policy
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
