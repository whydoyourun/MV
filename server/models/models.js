const sequelize = require("../db");
const { DataTypes } = require("sequelize");

//Image
const Image = sequelize.define(
  "Image",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    base64: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "images",
    timestamps: true,
  }
);

//Transport
const Transport = sequelize.define(
  "Transport",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageBase64: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "transports",
    timestamps: true,
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("Модели успешно синхронизированы с базой данных.");
  })
  .catch((error) => {
    console.error("Ошибка синхронизации моделей:", error);
  });

module.exports = { sequelize, Image, Transport };
