import { UserService } from "@/services/area/userService";
import { NextApiRequest, NextApiResponse } from "next";
import { typeDataUser } from "@/types/User";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "PATCH") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
        const { id } = req.query;
        const {data, token} = req.body
        const newUser = await UserService.editeUser(Number(id),data, token);
        return res.status(200).json("success");
  } catch (e) {
    return res.status(500).json(e);
  }
}