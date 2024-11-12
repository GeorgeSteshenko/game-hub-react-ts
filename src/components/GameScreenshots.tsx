import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const screenshots = data?.results;

  return screenshots ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {screenshots.map((screenshot) => (
        <Image key={screenshot.id} src={getCroppedImageUrl(screenshot.image)} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
