import jwt from "jsonwebtoken";

export default function generateToken(user: {
  username: string;
  email: string;
}) {
  const payload = {
    username: user.username,
    email: user.email,
  };

  const token: string = jwt.sign(payload, process.env.SECRET_KEY!, {
    expiresIn: "1h",
  });

  return token;
}
