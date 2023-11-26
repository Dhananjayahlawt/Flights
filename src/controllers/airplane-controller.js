const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { logger } = require("../config");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error=error;
    logger.error("Error in Controller:Airplane",ErrorResponse);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}
module.exports = {
  createAirplane,
};
