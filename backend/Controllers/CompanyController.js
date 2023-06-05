const Company = require("../models/Company/Company");

exports.signup = async (req, res, next) => {
    try {
        const newCompany = await Company.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                user: newCompany,
            },
        });
    }
    catch (error) {
        res.status(500).json(error)
    }
}