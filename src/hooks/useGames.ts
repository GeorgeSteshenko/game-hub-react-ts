import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");
const useGames = () => {
  // return useQuery<FetchResponse<Game>, Error>({
  //   queryKey: ["games", gameQuery],
  //   queryFn: () =>
  //     apiClient.getAll({
  //       params: {
  //         genres: gameQuery.genre?.id,
  //         parent_platforms: gameQuery.platform?.id,
  //         ordering: gameQuery.sortOrder,
  //         search: gameQuery.searchText,
  //       },
  //     }),
  // });

  const gameQuery = useGameQueryStore(select => select.gameQuery);
  
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          // page_size:
        },
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      // 1 -> 2
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
