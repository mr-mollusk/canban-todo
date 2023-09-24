import axios from "axios";
import { ITask } from "../models";
const baseURL = "https://todo.vkusnuts.ru/api";
export const api = axios.create({ baseURL: baseURL });

interface IOrder {
  status: string;
  items: Array<number>;
}

export const setNewCardsOrderForProject = async (
  projectId: number,
  newOrder: Array<IOrder>
) => {
  api.post(`projects/${projectId}/set-todos-order`, newOrder);
};

export const createNewCard = async (
  projectId: number,
  title: string,
  status: string
) => api.post("todos", { projectId, title, status });

export const getProjectsList = async () => {
  const data = await api.get("projects");
  if (data) {
    return data;
  }
};

export const editTask = async (id: number, newTask: ITask) =>
  api.patch(`todos/${id}`, newTask);

export const addComment = (taskId: number, value: string) =>
  api.post(`/todos/${taskId}/comments`, { username: "Artem", text: value });

export const getComments = async (taskId: number) => api.get(`todos/${taskId}/comments`);
