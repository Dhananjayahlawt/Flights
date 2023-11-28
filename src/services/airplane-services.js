const { AirplaneRepository } = require("../repositories");
const { logger } = require("../config");
const { AppError } = require("../utils/error");
const { StatusCodes } = require("http-status-codes");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    let explanation = [];
    if ((error.name = "SequelizeValidationError")) {
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
    }
    logger.error("Error in Services:createAirplane");
    throw new AppError(explanation, StatusCodes.BAD_REQUEST);
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    let explanation = "Cannot fetch data of all Airplanes";
    throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    console.log(error);
    if (StatusCodes.NOT_FOUND == error.statusCode) {
      throw new AppError("Airplane not available", StatusCodes.NOT_FOUND);
    }
    let explanation = "Cannot fetch Data of Airplane";
    throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function destroyAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
    if (StatusCodes.NOT_FOUND == error.statusCode) {
      throw new AppError("Airplane not available", StatusCodes.NOT_FOUND);
    }
    let explanation = "Cannot Delete Data of Airplane";
    throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
