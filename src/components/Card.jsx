import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack>
      <Box borderWidth="1px" borderRadius="lg" bg="white" p={2} color="black">
        <VStack space={1}>
          <Image src={imageSrc} alt={title} />
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Card;
