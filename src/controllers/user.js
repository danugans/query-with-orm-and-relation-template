// import model here
const { user } = require("../../models");

exports.addUsers = async (req, res) => {
  // code here
  try {
    const data = req.body;

    await user.create(data);
    res.send({
      status: "success",
      message: "Add user success",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};
