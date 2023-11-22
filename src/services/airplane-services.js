const { AirplaneRepository } = require("../repositories");
const { logger } = require("../config");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (err) {
    logger.error("Error in Services:createAirplane");
  }
}

module.exports={
    createAirplane
}