import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../services/issues.service"

export const useIssues = () => {

  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
    staleTime: 1000 * 60 * 1, // 1 minute
  })

  return {
    issuesQuery
  }
}