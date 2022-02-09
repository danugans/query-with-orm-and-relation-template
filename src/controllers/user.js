const { user } = require("../../models");

exports.addUsers = async (req, res) => {
  try {
    await user.create(req.body);

    res.send({
      status: "success",
      message: "Add user finished",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getUsers = async (req, res) => {
  // code here
  try {
    const dataUsers = await user.findAll();
    res.send({
      status: "success",
      data: {
        dataUsers,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getUser = async (req, res) => {
  // code here
  try {
    const { id } = req.params;

    const data = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      data: {
        user: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
