import {
  Flex,
  List,
  ListItem,
  Box,
  Text,
  Avatar,
  Switch,
  Center,
  Divider,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  HStack,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { CgShapeHexagon, CgShapeRhombus } from "react-icons/cg";

import BackgroundLend from "../../assets/backgroundLend.png";
const ModalLend = () => {
  return (
    <Box>
      <Flex>
        <Text>
          Collateral : <Text as="span">WETH</Text>
        </Text>
        <Text>
          Oracle : <Text as="span">Chainlink</Text>
        </Text>
      </Flex>
      <Box
        bgImage={`url(${BackgroundLend.src})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        roundedLeft={"16px"}
        roundedRight={"16px"}
      >
        <Flex
          w="100%"
          justify="space-between"
          p="20px 30px"
          fontSize="md"
          color="#fff"
          h="122px"
        >
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Lent
            </Text>
            <Text>5,476 USDC</Text>
            <Text color="#ffffff99">%7,324.2</Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#ffffff33" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Borrowed
            </Text>
            <Text>85.27%</Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#ffffff33" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Supply APR
            </Text>
            <Text>7.21%</Text>
          </Box>
        </Flex>
      </Box>

      <Tabs
        variant="unstyled"
        isFitted
        align="center"
        colorScheme="green"
        width="100%"
        bg={"#FDFDFD"}
        mt="24px"
      >
        <TabList
          h={58}
          justifyContent="center"
          my="24px"
          roundedLeft={12}
          roundedRight={12}
          bg="#fff"
          color="#000"
        >
          <Tab
            _focus={{ boxShadow: "0px 12px 54px rgba(46, 46, 46, 0.1)" }}
            roundedLeft={12}
            roundedRight={12}
            _selected={{
              color: "#fff",
              bg: "#1D1D1D",
            }}
          >
            <CgShapeHexagon /> Deposit
          </Tab>
          <Tab
            _focus={{ boxShadow: "0px 12px 54px rgba(46, 46, 46, 0.1)" }}
            roundedLeft={12}
            roundedRight={12}
            _selected={{
              color: "#fff",
              bg: "#1D1D1D",
            }}
            style={{ position: "relative" }}
          >
            <CgShapeRhombus /> Withdraw
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            <TabLend />
          </TabPanel>
          <TabPanel p="0">
            <TabLend />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default ModalLend;

const TabLend = () => {
  return (
    <>
      <Heading as="h4" textAlign="left">
        Deposit USDC
      </Heading>
      <Box d="flex" flexDirection="column">
        <HStack justify="space-between">
          <Flex>
            <Text>Deposit USDC from</Text>
            <Badge ml="1" colorScheme="green">
              Wallet
            </Badge>
          </Flex>
          <Text>Balance 7,346.20</Text>
        </HStack>
        <InputGroup size="lg" mt="26px">
          <Input
            type="text"
            placeholder="0,0"
            _placeholder={{ color: "gray.500" }}
            _focus={{ border: "none", outline: "none" }}
          />
          <InputRightElement width="4.5rem">
            <Text fontWeight={500}>USDT</Text>
          </InputRightElement>
        </InputGroup>
        <Button
          py={"21px"}
          borderRadius="10px"
          bg={"#000"}
          colorScheme="white"
          size="sm"
        >
          Connect Wallet To Swap
        </Button>
      </Box>
    </>
  );
};
