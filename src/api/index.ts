import axios from "axios";
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
