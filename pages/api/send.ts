import nodemailer from 'nodemailer'
import dotenv from 'dotenv/config'

export default async (req, res) => {
  try {
    alert('dsd '+req.method);
    if(req.method !== 'POST') throw new Error('The method is wrong. Please change to POST.');

    const transport: any = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const info: any = await transport.sendMail(
      {
          from: `${req.body.name} <${req.body.email}>`,
          to: `Charles Agra <${process.env.SMTP_USER}>`,
          subject: req.body.subject,
          text: req.body.message + `\n\nEmail: ${req.body.email}`,
      }
    );

    res.status(200).json({ message: info })
  } catch (e) {
    res.status(400).json({ message_error: e.message })
  }
}
