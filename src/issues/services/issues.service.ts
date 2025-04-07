import { gitHubApi } from "../../api"
import { Sleep } from "../../helpers"
import { GitHubIssue, State } from "../models"

export const getIssues = async (state: State): Promise<GitHubIssue[]> => {
  await Sleep(2000)
  const params = new URLSearchParams

  if(state !== State.All) {
    params.append('state', state)
  }

  const { data } = await gitHubApi.get<GitHubIssue[]>('/issues', {
    params
  })
   return data
}

export const getIssueByNumber = async (issueNumber: number): Promise<GitHubIssue> => {
  await Sleep(2000)
  const { data } = await gitHubApi.get<GitHubIssue>(`/issues/${issueNumber}`)
  return data
}

export const getIssueComments = async (issueNumber: number): Promise<GitHubIssue[]> => {
  await Sleep(2000)
  const { data } = await gitHubApi.get<GitHubIssue[]>(`/issues/${issueNumber}/comments`)
  return data
}