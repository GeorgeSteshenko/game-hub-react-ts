import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useGames from "./useGames";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getSingle(slug),
  });

export default useGame;
