import { NextApiRequest, NextApiResponse } from "next";
import { BlogsPostService } from "@/services/area/blogPostService";
import { UserService } from "@/services/area/userService";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
    if(!req.query){
        const { data } = await UserService.getUsers();
        return res.status(200).json(data);
    }else{
        const { page, per_page } = req.query;
        const token = req.headers.token;
        const { data } = await UserService.getUsersPage({
            page : page as string,
            per_page: per_page as string,
            token: token as string
        });
        return res.status(200).json(data);
    }
  } catch (e) {
    return res.status(500).json(e);
  }
}
