import express, { Response, Request } from "express";
import { authMiddleware } from "../../middleware/AuthMiddleware";
import { userService } from "../../AppContext";

const router = express.Router();

router.get("/users/:username", authMiddleware, async (req: Request<Record<string, unknown>, Record<string, unknown>>, res: Response) => {
  try {
    const username = req.params.username as string;
    const userDto = await userService.findByUsername(username);
    res.status(200).setHeader("Cache-Control", "no-store").send(userDto);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
