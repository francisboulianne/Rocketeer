import { Request, Response } from "express";

export const globalMiddleware = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, unknown>,
  res: Response,
  next: () => void
) => {
  console.log(req);
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
  res.setHeader("Cache-Control", "no-store");
  next();
};
