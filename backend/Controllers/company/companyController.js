const company = require("../../Models/company/company");
const bcrypt = require("bcrypt");

//REGISTER
const register = async (req, res) => {

  const newCompany = new company({
    CompanyName: req.body.CompanyName,
    CompanyImage: req.body.CompanyImage,
    email: req.body.email,
    password: (await bcrypt.hash(req.body.password, 10)).toString(),
  });
  try {
    const savedCompany = await newCompany.save();
    res.status(201).json({
      msg: "Company Added Successfully",
      data: {
        company: savedCompany,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
    register,
};