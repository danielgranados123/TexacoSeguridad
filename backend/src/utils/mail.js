import nodemailer from "nodemailer";
import { config } from "../config.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

const sendEmail = async (to, subject, text = "", html = "") => {
  try {
    const info = await transporter.sendMail({
      from: `"Texaco Alertas" <${config.email.user}>`,
      to,
      subject,
      text,
      html,
    });
    return info;
  } catch (error) {
    console.error("Error al enviar correo:", error);
    throw error;
  }
};

export { sendEmail };
