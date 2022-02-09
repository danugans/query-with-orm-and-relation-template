// import models here

const { product, user } = require("../../models");

exports.getProduct = async (req, res) => {
  // code here
  try {
    const data = await product.findAll({
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.addProduct = async (req, res) => {
  // code here
};
