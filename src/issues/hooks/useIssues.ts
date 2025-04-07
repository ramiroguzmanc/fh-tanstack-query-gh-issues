import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../services/issues.service"
import { State } from "../models"

interface Props {
  state: State
}

export const useIssues = ({ state }: Props) => {

  const issuesQuery = useQuery({
    queryKey: ["issues", { state }],
    queryFn: () => getIssues(state),
    staleTime: 1000 * 60 * 1, // 1 minute
  })

  return {
    issuesQuery
  }
}