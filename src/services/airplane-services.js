const { AirplaneRepository } = require("../repositories");
const { logger } = require("../config");
const {AppError}=require("../utils/error")
const {StatusCodes}=require("http-status-codes")

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.creat(data);
    return airplane;
  } catch (error) {
    if ((error.name = "SequelizeValidationError")) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
    }
    logger.error("Error in Services:createAirplane");
    throw new AppError(explanation,StatusCodes.BAD_REQUEST);
  }
}

module.exports = {
  createAirplane,
};
