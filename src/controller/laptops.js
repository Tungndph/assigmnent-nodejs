import Laptop from "./../models/LaptopModel.js";

class LaptopsController {
  // Get all Laptop
  async getAllLaptops(req, res) {
    try {
      const laptops = await Laptop.find({});
      res.status(200).json({
        message: "Get Laptop Done!",
        data: laptops,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // Get Laptop Detail
  async getLaptopsDetail(req, res) {
    try {
      const laptop = await Laptop.findById(req.params.id);
      if (!laptop) {
        return res.status(404).json({
          message: "Laptop Not Found",
        });
      }
      res.status(200).json({
        message: "Get Laptop Detail Done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // Create Lpatop
  async careateLaptops(req, res) {
    try {
      const laptop = await Laptop.create(req.body);
      res.status(200).json({
        message: "Create Laptop Successfully!",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  // Update laptop
  async updateLaptops(req, res) {
    try {
      const laptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!laptop) {
        return res.status(404).json({
          message: "Laptop Not Found",
        });
      }
      const updateLaptop = await Laptop.findById(req.params.id);
      res.status(200).json({
        message: "Update Laptop Successfully!",
        data: updateLaptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // Delete Laptop
  async deleteLaptops(req, res) {
    try {
      const laptop = await Laptop.findByIdAndDelete(req.params.id);
      if (!laptop) {
        return res.status(404).json({
          message: "Laptop Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Laptop Successfully!",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
export default LaptopsController;
