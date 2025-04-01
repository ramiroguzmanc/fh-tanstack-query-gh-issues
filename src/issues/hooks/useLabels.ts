import { useQuery } from "@tanstack/react-query"
import { getLabels } from "../services"

export const useLabels = () => {

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
     staleTime: 1000 * 60 * 60, // 1 hour
  })

  return {
    labelsQuery
  }
}