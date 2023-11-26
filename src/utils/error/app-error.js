class AppError extends Error {
  constructor(message,statusCode) {
    super(message);
    this.statusCode=statusCode;
    this.msg=message;

  }
}

module.exports=AppError;
