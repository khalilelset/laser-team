const Contact = require("../../Models/Contact/Contact");

const addMessage = async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;
    const newContact = new Contact({
      fullName: fullName,
      email: email,
      subject: subject,
      message: message,
    });
    const contact = await newContact.save();
    res.status(200).json({ msg: "Message Added", data: contact });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json({ data: messages });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { addMessage, getMessages };
