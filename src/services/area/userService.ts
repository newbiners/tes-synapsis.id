import axios, { AxiosError } from "axios";
import api from "@/constants/api";
import { typeDataUser } from "@/types/User";
type payload = {
  page?: string;
  per_page?: string;
  token?: string;
};

// const headers = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${localStorage.getItem("token")}`,
// };

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
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${payload.token}`,
      };
      const { page, per_page } = payload;
      console.log("text");
      const response = await axios.get(
        `${api.usersApi()}?page=${page}&per_page=${per_page}`,{headers}
      );
      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  createUser: async (payload: typeDataUser, token: string) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.post(api.usersApi(), payload, { headers });
      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  deleteUser: async (id: number, token: string) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.delete(`${api.usersApi()}/${id}`, {
        headers,
      });
      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  editeUser: async (id: number, payload: typeDataUser, token: string) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.patch(`${api.usersApi()}/${id}`, payload, {
        headers,
      });
      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
};
