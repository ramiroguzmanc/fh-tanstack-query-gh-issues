import { useInfiniteQuery } from "@tanstack/react-query"
import { State } from "../models"
import { getIssues } from "../services/issues.service"

interface Props {
  state: State
  selectedLabels: string[]
}

export const useIssuesInfinite = ({ state, selectedLabels }: Props) => {


  const issuesQuery = useInfiniteQuery({
    queryKey: ["issues", 'infinite', { state, selectedLabels }],
    queryFn: ({pageParam, queryKey}) => {
      const [, , { state, selectedLabels }] = queryKey as [string, string, Props]
      
      return getIssues(state, selectedLabels, pageParam)
    },
    staleTime: 1000 * 60 * 1, // 1 minute
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? pages.length + 1 : undefined,
  })

  return {
    issuesQuery,
  }
}