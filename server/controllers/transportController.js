const ApiError = require("../error/ApiError");

const { Transport } = require("../models/models");

class TransportController {
  async addTransport(title, imageBase64) {
    try {
      const transport = await Transport.create({
        title,
        imageBase64,
      });
      console.log("Transport added:", transport.toJSON());
    } catch (error) {
      next(ApiError.internal("Ошибка добавления транспорта" + error.message));
    }
  }
}

module.exports = new TransportController();
