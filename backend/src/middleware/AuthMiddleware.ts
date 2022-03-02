import { Request, Response } from "express";
import { localAuthProvider } from "../AppContext";

export const authMiddleware = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, unknown>,
  res: Response,
  next: () => void
) => {
  try {
    const token = req.cookies["access-token"];
    if (!token) {
      res.status(403);
    }
    localAuthProvider.verifyToken(token);
    next();
  } catch (e) {
    res.status(403).json({ name: e.name, message: e.message });
  }
};
