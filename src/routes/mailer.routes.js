import { Router } from "express";
import sendEmail from "../controllers/mailer.controller.js";

const router = Router();

const mailerRoutes = (app) => {
  app.use("/", router);

  router.get("", sendEmail);
};

export default mailerRoutes;
