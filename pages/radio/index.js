import {
  SimpleGrid,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Icon,
  Skeleton,
  SkeletonText,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {

  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

function index() {
  const [currentRadioData, setCurrentRadioData] = useState();
  const [radioData, setRadioData] = useState([]);
  const [radioFilterData, setRadioFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [playerRef, setPlayerRef] = useState();
  const [playerPlay, setPlayerPlay] = useState(false);
  const [audioStatus, setAudioStatus] = useState(false);
  const [catsData, setCatsData] = useState([]);



  const toggle = () => setPlaying(!playing);

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

 
  const getRadioStations = async () => {
    setLoading(true);
    try {
      await fetch("/radio/radio.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data) {
            setRadioData(data);
            setRadioFilterData(data);
            setInterval(() => {
              setLoading(false);
            }, 1800);
          }
        });
    } catch (e) {
      console.log("error is ", e);
    }
  };

  const getCats = async () => {
    setLoading(true);
    try {
      await fetch("/radio/cats.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data) {
            setCatsData(data);
            setInterval(() => {
              setLoading(false);
            }, 1800);
          }
        });
    } catch (e) {
      console.log("error is ", e);
    }
  };

  useEffect(() => {
    getRadioStations();
    getCats();
  }, []);

  const filterFn = (cat) => {
    let filtredData = [];
    if (cat === 1) {
      setRadioFilterData(radioData);
      setFilter(1)
    } else {
      radioData.forEach((item) => {
        item.cat.filter((e) => {
          if (e === cat.title) {
            filtredData.push(item);
            setRadioFilterData(filtredData);
            setFilter(cat)
          } else {
            setRadioFilterData(filtredData);
          }
        });
      });
    }
  };

  const filterDataCount = (cat) => {
    let filteredAmount = 0;
    radioData.forEach((item) => {
      item.cat.filter((e) => {
        if (e === cat.title) {
          filteredAmount += 1;
        }
      });
    });
    return filteredAmount;
  };



  if(loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={"/images/loader.gif"}
          alt={"loader"}
          style={{
            width: "300px",
          }}
        />
      </div>
    );
  }
  return (
    <>
      <SimpleGrid columns={1} spacing={10}>
        <Box
          bg="transparent"
          p={2}
          display={"flex"}
          flexDir={"column"}
          minH={"100vh"}
          justifyContent={"space-between"}
        >
          <Box>
            <Flex flexDir={"row"} mt={3} overflowX={"scroll"} pb={3}>
              {catsData && !loading ? (
                <>
                  <Flex
                    ml={2}
                    flexDir={"row"}
                    backgroundColor={filter?.id == 1 ? "gray.400" : "gray.300"}
                    p={2}
                    borderRadius={15}
                    justifyContent={"center"}
                    onClick={() => filterFn(1)}
                  >
                    <Text
                      mr={2}
                      backgroundColor={"gray.200"}
                      borderRadius={50}
                      py={1}
                      px={2}
                      fontSize="xs"
                    >
                      {radioData.length}
                    </Text>{" "}
                    <Text fontSize={"xs"} p={1}>
                      All
                    </Text>
                  </Flex>
                  {catsData.map((cat, index) => (
                    <>
                      {filterDataCount(cat) ? (
                        <Flex
                          ml={2}
                          flexDir={"row"}
                          backgroundColor={
                            cat.id == filter?.id ? "gray.400" : "gray.300"
                          }
                          p={2}
                          borderRadius={15}
                          justifyContent={"center"}
                          onClick={() => filterFn(cat)}
                          key={index}
                        >
                          <Text
                            mr={2}
                            backgroundColor={"gray.200"}
                            borderRadius={20}
                            p={1}
                            px={2}
                            fontSize="xs"
                          >
                            {filterDataCount(cat)}
                          </Text>{" "}
                          <Text fontSize={"xs"} p={1}>
                            {cat.title}
                          </Text>
                        </Flex>
                      ) : null}
                    </>
                  ))}
                </>
              ) : (
                <>
                  <Flex
                    flexDir={"row"}
                    borderRadius={7}
                    justifyContent={"center"}
                  >
                    <Skeleton
                      borderRadius={15}
                      p={1}
                      width={"70px"}
                      height={"40px"}
                    />
                  </Flex>
                </>
              )}

              {!loading ? null : (
                <>
                  <Flex
                    flexDir={"row"}
                    borderRadius={7}
                    justifyContent={"center"}
                  >
                    <Skeleton
                      borderRadius={15}
                      ml={2}
                      p={1}
                      width={"100px"}
                      height={"40px"}
                    />
                  </Flex>
                </>
              )}
            </Flex>
            <Box
              className="scrollbar-hidden"
              overflowY={"scroll"}
              css={{
                "&::-webkit-scrollbar": {
                  width: "0px!important",
                },
              }}
            
            >
              {radioFilterData.map((radio) => (
                <>
                  <Flex
                    flexDir={"column"}
                    mt={5}
                    key={radio.id}
                    onClick={() => {
                      setCurrentRadioData(radio);
                      setPlayerPlay(false);
        
                      setPlayerPlay(true);
                    }}
                  >
                    <Flex my={3} flexDir={"row"}>
                      {!loading ? (
                        <>
                          <Image
                            src={radio.image}
                            w={"20%"}
                            borderTopLeftRadius={20}
                            borderBottomRightRadius={20}
                            borderTopRightRadius={5}
                            borderBottomLeftRadius={5}
                            boxShadow={"xl"}
                          />
                          <Flex
                            flexDir={"column"}
                            pl={2}
                            justifyContent={"center"}
                          >
                            <Heading
                              size={"sm"}
                              color={"#333333"}
                              fontWeight={500}
                            >
                              {radio.name}
                            </Heading>
                            <Flex flexDir={"row"}>
                              <Text
                                size={"md"}
                                color={"#575757"}
                                fontWeight={500}
                              >
                                {radio.subline}
                              </Text>
                              {currentRadioData?.id == radio.id &&
                              audioStatus ? (
                                <Image
                                  ml={3}
                                  src="https://rtionline.gov.in/request/sound_200.gif"
                                  w={"10px"}
                                />
                              ) : null}
                            </Flex>
                          </Flex>

                          <Flex
                            ml={"auto"}
                            flexDir={"column"}
                            justifyContent={"center"}
                          ></Flex>
                        </>
                      ) : (
                        <>
                          <Skeleton
                            borderTopLeftRadius={20}
                            borderBottomRightRadius={20}
                            borderTopRightRadius={5}
                            borderBottomLeftRadius={5}
                            boxShadow={"xl"}
                            width={"20%"}
                            height={"70px"}
                          />
                          <Box
                            flexDir={"column"}
                            pl={2}
                            justifyContent={"center"}
                          >
                            <Flex
                              flexDir={"column"}
                              justifyContent={"center"}
                              height={20}
                            >
                              <SkeletonText mt="2" noOfLines={1} w={40} h={3} />
                              <SkeletonText mt="2" noOfLines={1} w={20} h={3} />
                            </Flex>
                          </Box>
                        </>
                      )}
                    </Flex>
                  </Flex>
                </>
              ))}
            </Box>
          </Box>
          <Flex mx={2}>
            {currentRadioData ? (
              <>
                <Box p={3}>
                  <Box
                    bgGradient={
                      "linear-gradient(135deg, #D93C54 26.87%, #D43477 81.56%)"
                    }
                    w={"100%"}
                    borderTopLeftRadius={20}
                    borderBottomRightRadius={0}
                    borderTopRightRadius={20}
                    borderBottomLeftRadius={0}
                    zIndex={1000}
                    pos={"fixed"}
                    bottom={0}
                    display={"flex"}
                    right={0}
                  >
                    <Flex my={3} p={3} flexDir={"row"}>
                      <Image
                        src={currentRadioData.image}
                        w={"15%"}
                        animation={audioStatus ? animation : false}
                        borderRadius={50}
                        boxShadow={"xl"}
                      />

                      <Flex flexDir={"column"} pl={2} justifyContent={"center"}>
                        <Heading size={"xs"} color={"#fff"} fontWeight={500}>
                          {currentRadioData.name}
                        </Heading>
                        <Text size={"xs"} color={"#fff"} fontWeight={250}>
                          {currentRadioData.subline}
                        </Text>
                      </Flex>
                      <Flex
                        ml={"auto"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        pr={3}
                      >
                        {audioStatus ? (
                          <>
                            <Icon
                              as={AiOutlinePauseCircle}
                              color={"whiteAlpha.600"}
                              fontSize={30}
                              onClick={() => {
                                setPlayerPlay(false);
                                setAudioStatus(false);
                              }}
                            />
                          </>
                        ) : (
                          <Icon
                            as={AiOutlinePlayCircle}
                            color={"whiteAlpha.600"}
                            fontSize={30}
                            onClick={() => setPlayerPlay(true)}
                          />
                        )}
                      </Flex>
                    </Flex>
                  </Box>
                </Box>
              </>
            ) : null}
          </Flex>
          {playerPlay ? (
          
            <ReactPlayer
              url={currentRadioData?.fetch}
              playing={true}
              onPlay={() => {
                setAudioStatus(true);
              }}
              width={0}
              height={0}
            />
          ) : null}
        </Box>
      </SimpleGrid>
    </>
  );
}

export default index;
