import axios, { AxiosError } from "axios";
import api from "@/constants/api";

type payload = {
  page?: string;
  per_page?: string;
};

type typeBlogById = {
  blogId: number;
};

export const BlogsPostService = {
  getBlogsPost: async (payload: payload) => {
    try {
      const { page, per_page } = payload;
      console.log(payload, "pay");
      const response = await axios.get(
        `${api.blogsPostApi()}?page=${page}&per_page=${per_page}`
      );

      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  getBlogPostById: async (payload: typeBlogById) => {
    try {
      const { blogId } = payload;
      const response = await axios.get(`${api.blogsPostApi()}/${blogId}`)
      return response
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  getCommentsBlog: async (payload: typeBlogById) => {
    try{
      const { blogId } = payload;
      const response = await axios.get(`${api.blogsPostApi()}/${blogId}/comments`)
      return response
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  }
};
