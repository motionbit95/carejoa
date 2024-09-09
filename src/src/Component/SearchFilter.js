import {
  Box,
  Button,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  StackDivider,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { cities, districts } from "../Page/Dashboard/data";

export const SearchFilter = () => {
  const [isDetailSearch, setIsDetailSearch] = useState(false);
  const [isSelectedCityDong, setIsSelectedCityDong] = useState(false);
  const [isShelterType, setIsShelterType] = useState(false);

  const handleClickCityDong = () => {
    setIsSelectedCityDong(!isSelectedCityDong);
  };

  const handleClickShelterType = () => {
    setIsShelterType(!isShelterType);
  };

  const handleClickDetailSearch = () => {
    setIsDetailSearch(!isDetailSearch);
  };

  return (
    <Stack p={2} borderBottom={"1px"} borderColor={"gray.300"}>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem>
          <Box onClick={handleClickCityDong}>
            <Select pointerEvents="none" fontSize={"sm"}>
              <option>시/도</option>
            </Select>
          </Box>
        </GridItem>
        <GridItem>
          <Box onClick={handleClickCityDong}>
            <Select pointerEvents="none" fontSize={"sm"}>
              <option>구/군</option>
            </Select>
          </Box>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem>
          <Box onClick={handleClickShelterType}>
            <Select pointerEvents="none" fontSize={"sm"}>
              <option>시설형태</option>
            </Select>
          </Box>
        </GridItem>
        <GridItem>
          <Button
            w={"full"}
            bgColor={"#D8D8D8"}
            color={"black"}
            fontWeight={"bold"}
            fontSize={"md"}
            onClick={handleClickDetailSearch}
            borderRadius={"md"}
          >
            상세조건 선택
          </Button>
        </GridItem>
      </Grid>
      <InputGroup position={"relative"}>
        <Input
          borderRadius={"md"}
          borderColor={"#E2E8F0"}
          placeholder="시설명으로 검색해주세요."
          fontSize={"sm"}
        />
        <InputRightElement>
          <Button
            borderLeftRadius={0}
            borderRightRadius={"md"}
            position={"absolute"}
            right={0}
          >
            검색
          </Button>
        </InputRightElement>
      </InputGroup>
      <SelectedCityDongDrawer
        isOpen={isSelectedCityDong}
        onClose={handleClickCityDong}
      />
      <SelectedShelterTypeDrawer
        isOpen={isShelterType}
        onClose={handleClickShelterType}
      />
      <SearchDetailDrawer
        isOpen={isDetailSearch}
        onClose={handleClickDetailSearch}
      />
    </Stack>
  );
};

const SelectedCityDongDrawer = ({ isOpen, onClose }) => {
  const [selectedCity, setSelectedCity] = useState("서울");
  const [selectedDong, setSelectedDong] = useState("전체");

  const handleselectCity = (value) => {
    setSelectedCity(value);
  };

  const handleselectDong = (value) => {
    setSelectedDong(value);
  };
  return (
    <Drawer
      isOpen={isOpen}
      placement="bottom"
      motionPreset="slideInBottom"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent zIndex={9999}>
        <DrawerCloseButton />
        <DrawerBody>
          <Container
            maxW={{ base: "full", md: "2xl" }}
            p={{ base: "2", md: "4" }}
          >
            <Stack>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                지역 선택
              </Text>
              <Text opacity={0.5}>원하시는 지역을 선택해주세요.</Text>
              <HStack
                w={"full"}
                justifyContent={"space-between"}
                spacing={0}
                borderRadius={"xl"}
                overflow={"hidden"}
                border={"1px"}
                borderColor={"gray.200"}
                alignItems={"flex-start"}
              >
                <Stack
                  w={"30%"}
                  maxH={"400px"}
                  py={{ base: "1", md: "2" }}
                  overflowY={"auto"}
                  overflowX={"hidden"}
                  bgColor={"gray.50"}
                  spacing={0}
                  divider={<StackDivider />}
                >
                  {cities.map((city) => (
                    <Center
                      key={city}
                      cursor={"pointer"}
                      p={{ base: "1", md: "2" }}
                      onClick={() => handleselectCity(city)}
                      bgColor={city === selectedCity ? "accent" : ""}
                      color={city === selectedCity ? "bg.surface" : ""}
                    >
                      <Text>{city}</Text>
                    </Center>
                  ))}
                </Stack>
                <Stack
                  spacing={0}
                  py={{ base: "1", md: "2" }}
                  w={"70%"}
                  maxH={"400px"}
                  overflowY={"auto"}
                  overflowX={"hidden"}
                  divider={<StackDivider />}
                >
                  <Center
                    p={{ base: "1", md: "2" }}
                    cursor={"pointer"}
                    onClick={() => setSelectedDong("전체")}
                    bgColor={selectedDong === "전체" ? "accent" : ""}
                    color={selectedDong === "전체" ? "bg.surface" : ""}
                  >
                    <Text>{"전체"}</Text>
                  </Center>
                  {districts[selectedCity]?.map((district) => (
                    <Center
                      key={district}
                      p={{ base: "1", md: "2" }}
                      cursor={"pointer"}
                      onClick={() => handleselectDong(district)}
                      bgColor={district === selectedDong ? "accent" : ""}
                      color={district === selectedDong ? "bg.surface" : ""}
                    >
                      <Text>{district}</Text>
                    </Center>
                  ))}
                </Stack>
              </HStack>
            </Stack>
          </Container>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const SelectedShelterTypeDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="bottom"
      motionPreset="slideInBottom"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent zIndex={9999}>
        <DrawerCloseButton />
        <DrawerBody>
          <Container maxW={{ base: "full", md: "2xl" }}>
            <Stack>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                시설형태
              </Text>
              <Text opacity={0.5}>원하시는 시설 형태를 선택하세요</Text>
              <Stack align={"center"} w={"full"}>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <GridItem>
                      <Box boxSize={"100px"} bgColor={"gray.200"}>
                        <Image />
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              </Stack>
            </Stack>
          </Container>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const SearchDetailDrawer = ({ isOpen, onClose }) => {
  const [selectedButton, setSelectedButton] = useState("");
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent maxW={{ base: "full", md: "md" }}>
        <DrawerCloseButton pt={28} />
        <DrawerBody px={0}>
          <Stack
            pt={20}
            px={4}
            divider={<StackDivider borderColor="gray.200" />}
          >
            <Text pb={4} fontWeight={"bold"} fontSize={"xl"}>
              상세조건 선택
            </Text>
            <Stack>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                시설규모
              </Text>
              <SelectButtons
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
                items={["대형", "중형", "소형"]}
              />
            </Stack>
            <Stack>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                평가등급
              </Text>
              <SelectButtons
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
                items={["1등급", "2등급", "3등급", "4등급", "5등급", "등급외"]}
              />
            </Stack>
            <Stack>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                설립연도
              </Text>
              <SelectButtons
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
                items={["신규시설", "5년이내", "10년이내", "10년이상"]}
              />
            </Stack>
            <Stack>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                특화영역
              </Text>
              <SelectButtons
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
                items={["물리치료", "재활치료", "양한방협진"]}
              />
            </Stack>
            <Stack>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                특수시설
              </Text>
              <SelectButtons
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
                items={["격리병실 있음", "상급병실 있음"]}
              />
            </Stack>
            <Stack>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                종교활동
              </Text>
              <SelectButtons
                selectedButton={selectedButton}
                setSelectedButton={setSelectedButton}
                items={["종교활동 지원"]}
              />
            </Stack>
          </Stack>
          <Stack
            position={"absolute"}
            bottom={0}
            align={"center"}
            w={"full"}
            p={4}
          >
            <Button w={"full"}>{`1개 항목 선택 완료`}</Button>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const SelectButtons = ({ selectedButton, setSelectedButton, items }) => {
  return (
    <Flex gap={3}>
      {items.map((item) => (
        <Button
          onClick={() => setSelectedButton(item)}
          size={"sm"}
          borderRadius={"full"}
          variant={selectedButton === item ? "solid" : "outline"}
        >
          {item}
        </Button>
      ))}
    </Flex>
  );
};
