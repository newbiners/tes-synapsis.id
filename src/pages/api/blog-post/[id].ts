import { NextApiRequest, NextApiResponse } from "next";
import { BlogsPostService } from "@/services/area/blogPostService";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
    const { id } = req.query;
    const { data } = await BlogsPostService.getBlogPostById({
      blogId: Number(id),
    });
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json(e);
  }
}
