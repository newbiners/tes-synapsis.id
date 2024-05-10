import axios, { AxiosError } from "axios";
import api from "@/constants/api";


type payload = {
    page?: string,
    per_page?: string
}

export const BlogsPostService = {
  getBlogsPost: async (payload: payload) => {
    try {
        const { page, per_page } = payload;
        console.log(payload, "pay")
      const response = await axios.get(
        `${api.blogsPostApi()}?page=${page}&per_page=${per_page}`
      );

      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
};
