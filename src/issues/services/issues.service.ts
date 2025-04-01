import { gitHubApi } from "../../api"
import { Sleep } from "../../helpers"
import { GitHubIssue } from "../models"

export const getIssues = async (): Promise<GitHubIssue[]> => {
  await Sleep(2000)
  const { data } = await gitHubApi.get<GitHubIssue[]>('/issues')
   return data
}

export const getIssueByNumber = async (issueNumber: number): Promise<GitHubIssue> => {
  await Sleep(2000)
  const { data } = await gitHubApi.get<GitHubIssue>(`/issues/${issueNumber}`)
  return data
}