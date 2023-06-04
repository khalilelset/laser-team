const Client = require("./../Models/Client/ClientUser");
exports.signup = async (req, res, next) => {
  const { fname, lname, image, email, password, cardClientId } = req.body;

  // Check if the email is already taken
  // const existingClient = Client.find((u) => u.email === email);
  // if (existingClient) {
  //   return res.status(409).json({ error: "Email is already taken" });
  // }

  // Hash the password using bcrypt
  // const hashedPassword = bcrypt.hashSync(password, 10);

  // Generate a unique ID for the new user
  // const clientId = Math.max(...Client.map((u) => u.id)) + 1;

  // Create the new user object
  const newClient = {
    fname,
    lname,
    image,
    email,
    password,
    cardClientId,
  };

  // Add the new user to the database
  const clientUser = await Client.create(newClient);

  // Generate a JWT token for the new user
  // const token = jwt.sign({ clientId: newClient.id }, secretKey);

  // Return the token and user information
  // res.json({ token, client: newClient });
  res.status(201).json({
    status: "success",
    data: {
      user: clientUser,
    },
  });
};
