import { HStack, List, ListItem, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack gap="5">
          <SkeletonCircle size="32px" />
          <Stack flex="1">
            <Skeleton height="5" />
          </Stack>
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
