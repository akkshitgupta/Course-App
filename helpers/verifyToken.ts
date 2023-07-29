import jwt from "jsonwebtoken";

export default function verifyToken(token: string) {
  const decode: any = jwt.verify(token, process.env.SECRET_KEY!);
  return decode.username;
}
