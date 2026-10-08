import Enquiry from "../models/Enquiry.js";

export const createEnquiry = async (req, res, next) => {
  try {
    const { name, phone, message } = req.body;

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      res.status(400);
      throw new Error("Name, phone and message are required");
    }

    const enquiry = await Enquiry.create({
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: {
        id: enquiry._id,
        name: enquiry.name,
        phone: enquiry.phone,
        message: enquiry.message,
        status: enquiry.status,
        createdAt: enquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
