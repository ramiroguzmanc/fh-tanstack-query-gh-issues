import { useQuery } from "@tanstack/react-query"
import { getIssueByNumber } from "../services/issues.service"

export const useIssue = (issueNumber: number) => {

  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssueByNumber(issueNumber),
    staleTime: 1000 * 60 * 1, // 1 minute
  })

  return {
    issueQuery
  }
}