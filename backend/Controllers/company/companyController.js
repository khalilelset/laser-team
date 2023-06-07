const company = require("../../Models/company/company");
const bcrypt = require("bcrypt");

//REGISTER
const register = async (req, res) => {

  const newCompany = new company({
    CompanyID: req.body.CompanyID,
    CompanyName: req.body.CompanyName,
    CompanyImage: req.body.CompanyImage,
    CompanyDescription: req.body.CompanyDescription,
    CompanyPhNumber: req.body.CompanyPhNumber,
    CompanyLocation: req.body.CompanyLocation,
    OpportunityId: req.body.OpportunityId,
    RatingCraftId: req.body.RatingCraftId,
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