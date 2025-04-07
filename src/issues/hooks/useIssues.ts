import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../services/issues.service"
import { State } from "../models"
import { useEffect, useState } from "react"

interface Props {
  state: State
  selectedLabels: string[]
}

export const useIssues = ({ state, selectedLabels }: Props) => {

  const [page, setPage] = useState<number>(1);

  const issuesQuery = useQuery({
    queryKey: ["issues", { state, selectedLabels, page }],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 1000 * 60 * 1, // 1 minute
  })

  useEffect(() => {
    setPage(1)
  }, [state, selectedLabels])

  const nextPage = () => {
    if(issuesQuery.data?.length === 0) return

    setPage(page + 1)
  }

  const prevPage = () => {
    if(page === 1) return

    setPage((prevPage) => prevPage -1)
  }

  return {
    issuesQuery,
    nextPage,
    prevPage,
    page,
  }
}