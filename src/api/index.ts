import axios from "axios";
const baseURL = "https://todo.vkusnuts.ru/api";
export const api = axios.create({ baseURL: baseURL });
