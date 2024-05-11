import { UserService } from "@/services/area/userService";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
        const { data, token } = req.body;
        const newUser = await UserService.createUser(data, token);
        return res.status(200).json("success");
  } catch (e) {
    return res.status(500).json(e);
  }
}
