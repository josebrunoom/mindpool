import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import DesktopBackground from '../../assets/desktop/dino.png';
import MobileBackground from '../../assets/mobile/dino.png';
import iconMindpool from '../../assets/desktop/mindpool.png';

const Header = () => {
  const [isLargerThanMobile] = useMediaQuery('(min-width: 30em)');
  const [isLargerThanTablet] = useMediaQuery('(min-width: 48em)');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuButtonPressedHandler = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <Box position="relative" w="full" h={['100%', '908px']}>
      <Image
        src={isLargerThanMobile ? DesktopBackground : MobileBackground}
        objectFit="cover"
        w="full"
        h="full"
      />
      <Box
        bg={isLargerThanTablet ? 'none' : isMenuOpen ? 'black' : 'none'}
        position="absolute"
        top="0"
        left="0"
        right="0"
        px="4"
        color="white"
        h="full"
        maxW={['container.sm', 'container.md', 'container.lg', '1200px']}
        mx="auto"
      >
      <Box flex='none' mt='10' h="12vh">
        <Image
          src={iconMindpool}
          mr='5'
          float="left"
          width='11%'
        />
          {isLargerThanTablet ? (
            <HStack spacing="5" fontWeight="100" fontSize="24px" float='left' >
              <Link href="#">About</Link>
              <Link href="#">Posts</Link>
              <Link href="#">Your Opnion</Link>
              <Link href="#">Newsletter</Link>
            </HStack>
          ) : isMenuOpen ? (
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={onMenuButtonPressedHandler}
            >
              <path
                d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                fill="#FFF"
                fill-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={onMenuButtonPressedHandler}
            >
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
              </g>
            </svg>
          )}
          <HStack justifyContent='flex-end' width='30%' float="right" spacing="4" fontWeight="100" fontSize="14px">
            <Link href="#" borderTop='1px solid white' borderBottom='1px solid white'>EN</Link>
            <Link href="#">ES</Link>
            <Link href="#">FR</Link>
            <Link href="#">|</Link>
            <Link href="#" fontSize='18px' fontWeight='800'>Log in</Link>
            <Button
              bg='linear-gradient(135deg, #00FFBF 0%, #31D8B3 33.33%, #1C987D 100%);' 
              w='30%'
              mr='5%'
              borderRadius='50px'
            >
              Join now
            </Button>
          </HStack>
        </Box>
        <Flex
          color="white"
          justifyContent={['center', 'center', 'flex-start']}
          alignItems="center"
        >
          {!isLargerThanTablet && isMenuOpen ? (
            <VStack
              h={['90vh', '50vh']}
              spacing="6"
              textTransform="uppercase"
              letterSpacing="widest"
              fontSize="56px"
              lineHeight="59,58px"
            >
              <Link href="#">About</Link>
              <Link href="#">Posts</Link>
              <Link href="#">Your Opnion</Link>
              <Link href="#">Newsletter</Link>
            </VStack>
          ) : ''}        
        </Flex>
        
        <Box
        mt={'8'}
        p={['0', '0', '0', '1rem 0 0 6rem']}
        w={['full', 'full', 'full', '45%']}
        ml={['0', '0', '0', '-24']}
      >
        <Text
          fontWeight="hairline"
          lineHeight="10"
          fontSize="24px"
          fontWeight="700"
          mt='10'
          color="rgba(49, 216, 180, 1)"
        >
          Make your employees voice heard
        </Text>
        <Text
          mt="4"
          color="white"
          letterSpacing="wide"
          fontWeight="700"
          fontSize="56px"
          lineHeight="59.58px"
        >
          Are you ready
          to know what your
          employees think?
        </Text>
        <Button
          bg='linear-gradient(135deg, #00FFBF 0%, #31D8B3 33.33%, #1C987D 100%);' 
          w='25%'
          mr='5%'
          borderRadius='50px'
          mt='33px'
        >
          Yes
        </Button>
        <Button
          bg='linear-gradient(135deg, #00FFBF 0%, #31D8B3 33.33%, #1C987D 100%);' 
          w='25%'
          borderRadius='50px'
          mt='33px'
        >
          No
        </Button>
        <Text
          mt='32px'
          fontSize="18px"
          lineHeight="27px"
          fontWeight="700"
          width="80%"
        >
        Employees can have awesome insights about your company, that not even some specialist know. Why not gather that knowledge?
        </Text>
      </Box>
    

      </Box>
    </Box>
  );
};

export default Header;
