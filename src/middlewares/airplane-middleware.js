const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/error");
const ValidateCreateAirplane = function (req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something Went wrong WHile Creating Airplane";
    ErrorResponse.error = new AppError(
      ["Model Number not found in Incoming Request"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.capacity) {
    ErrorResponse.message = "Something Went wrong WHile Creating Airplane";
    ErrorResponse.error = new AppError(
      ["Capcity not found in Incoming Request"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};

module.exports = {
  ValidateCreateAirplane,
};
