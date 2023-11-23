const { StatusCodes } = require("http-status-codes");
const ValidateCreateAirplane = function (req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Something Went wrong WHile Creating Airplane",
      data: {},
      error: [
        {
          explanation: "Model Number not found in Incoming Request ",
        },
      ],
    });
  }
  next();
};

module.exports={
    ValidateCreateAirplane
}
