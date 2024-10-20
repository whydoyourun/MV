const ApiError = require("../error/ApiError");
const { Image } = require("../models/models");

class ImagesController {
  async addImage(title, imageBase64, next) {
    try {
      const image = await Image.create({
        title,
        imageBase64,
      });
      console.log("Image added:", image.toJSON());
    } catch (error) {
      next(
        ApiError.internal("Ошибка добавления изображения: " + error.message)
      );
    }
  }

  async getAllImages(req, res, next) {
    try {
      const images = await Image.findAll();
      return res.json(images);
    } catch (error) {
      next(ApiError.internal("Ошибка получения изображений: " + error.message));
    }
  }
}

module.exports = new ImagesController();
