import express from "express";
import LaptopsController from "../controller/laptops.js";

const laptopsRouter = express.Router();

const laptopsController = new LaptopsController();

laptopsRouter.get("/", laptopsController.getAllLaptops);
laptopsRouter.get("/:id", laptopsController.getLaptopsDetail);
laptopsRouter.post("/", laptopsController.careateLaptops);
laptopsRouter.put("/:id", laptopsController.updateLaptops);
laptopsRouter.delete("/:id", laptopsController.deleteLaptops);
export default laptopsRouter;
