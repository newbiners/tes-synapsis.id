import axios, { AxiosError } from "axios";
import api from "@/constants/api";

type payload = {
    page?: string,
    per_page?: string
}


export const UserService = {
  getUsersById: async (user_id: number) => {
    try {
      console.log(user_id, "user_id");
      const response = await axios.get(`${api.usersApi()}/${user_id}`);
      console.log(response, "ressss");
      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  getUsers: async () => {
      try {
      const response = await axios.get(api.usersApi());
      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  getUsersPage: async (payload: payload) => {
    try {
        const { page, per_page } = payload;
        const response = await axios.get(`${api.usersApi()}?page=${page}&per_page=${per_page}`);
        return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
};
