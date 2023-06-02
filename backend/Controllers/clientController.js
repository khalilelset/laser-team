const Client = require("./../Models/Client/ClientUser");
exports.signup = async (req, res, next) => {
  const newClient = await Client.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user: newClient,
    },
  });
};
