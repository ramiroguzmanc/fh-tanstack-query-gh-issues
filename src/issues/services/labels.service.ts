import { gitHubApi } from "../../api"
import { Sleep } from "../../helpers"
import { Label } from "../models/labels.models"

export const getLabels = async (): Promise<Label[]> => {
  await Sleep(2000)
  const { data } = await gitHubApi.get<Label[]>('/labels')
  return data
}