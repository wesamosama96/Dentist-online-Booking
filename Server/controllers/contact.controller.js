const Contact = require("../Modules/contact.Model");
const sendMessage = async (req, res, next) => {
  try {
    const { fullName, email, phone, message } = req.body;

    const newMessage = await Contact.create({
      fullName,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendMessage };
