import { UserService } from "@/services/area/userService";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
// console.log(localStorage.getItem("token"))
  try {
    if (req.method !== "DELETE") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
        const { id } = req.query;
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
          }
        const newUser = await UserService.deleteUser(Number(id), token.toLocaleString());
        return res.status(200).json("success");
  } catch (e) {
    return res.status(500).json(e);
  }
}