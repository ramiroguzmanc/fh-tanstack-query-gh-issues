import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../services/issues.service"
import { State } from "../models"

interface Props {
  state: State
  selectedLabels: string[]
}

export const useIssues = ({ state, selectedLabels }: Props) => {

  const issuesQuery = useQuery({
    queryKey: ["issues", { state, selectedLabels }],
    queryFn: () => getIssues(state, selectedLabels),
    staleTime: 1000 * 60 * 1, // 1 minute
  })

  return {
    issuesQuery
  }
}