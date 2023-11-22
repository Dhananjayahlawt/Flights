const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { logger } = require("../config");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(404).json({
      success: true,
      message: "Succesfully created an airplane",
      data: airplane,
      error: [],
    });
  } catch (error) {
    logger.error("Error in Controller:Airplane");
  }
}

module.exports = {
  createAirplane
};
