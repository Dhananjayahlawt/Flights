const { logger } = require("../config");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {

      const response = await this.model.create(data)
      return response;
    } catch (error) {
      logger.error("Something wnet wrong in crud:Create");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      logger.error("Something wnet wrong in crud:Destroy");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      logger.error("Something wnet wrong in crud:get");
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("Something wnet wrong in crud:findAll");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      logger.error("Something wnet wrong in crud:update");
      throw error;
    }
  }
}

module.exports=CrudRepository;