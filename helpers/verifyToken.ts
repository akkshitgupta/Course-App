import jwt from "jsonwebtoken";

export default function verifyToken(token: string) {
  const decoded = jwt.verify(token, process.env.SECRET_KEY!);
  const { username, password } = decoded as {
    username: string;
    password: string;
  };
  return decoded;
}
