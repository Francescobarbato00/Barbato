import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { firstName, lastName, email, company, phone, jobRole, message } = req.body;

    // Configura il trasportatore SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail", // Puoi cambiare con il tuo provider SMTP
        auth: {
            user: process.env.EMAIL_USER,  // Usa variabili d'ambiente
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "francesco.barbato24@gmail.com", // Inserisci la tua email
            subject: "Nuovo Contatto dal Form",
            html: `
                <h2>Nuovo Messaggio dal Form</h2>
                <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Azienda:</strong> ${company}</p>
                <p><strong>Telefono:</strong> ${phone}</p>
                <p><strong>Ruolo:</strong> ${jobRole}</p>
                <p><strong>Messaggio:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: "Email inviata con successo" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Errore nell'invio dell'email" });
    }
}
