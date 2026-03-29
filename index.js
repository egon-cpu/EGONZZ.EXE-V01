const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get('/api/ban', async (req, res) => {
    const number = req.query.number;
    if (!number) return res.send("MANA NOMORNYA TUAN EGONZZ? 🤤");

    // KONFIGURASI SATELIT GMAIL EGONZZ (VERSI TERBARU)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mgxegon6@gmail.com', // Markas Besar Baru!
            pass: 'ygfomrdjxbtvaruw'     // Kode Nuklir Lu!
        }
    });

    // PESAN LAPORAN KE SUPPORT WHATSAPP
    let mailOptions = {
        from: 'EGONZZ SATELLITE 🛰️ <mgxegon6@gmail.com>',
        to: 'support@support.whatsapp.com',
        subject: `Urgent: Dangerous content detected from +${number}`,
        text: `Hello WhatsApp Support,\n\nI am reporting the account +${number} for serious violations of your Terms of Service. This user is distributing prohibited and harmful content. Please review and BAN this account immediately to maintain community safety.\n\nThank you.`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send(`REPORT MASSAL TERKIRIM DARI MGXEGON6! TARGET ${number} SEDANG DI-EKSEKUSI! 🔥💀`);
    } catch (error) {
        console.log(error);
        res.send("GAGAL KIRIM! CEK APAKAH APP PASSWORD MASIH AKTIF, TUAN! 💸🛐");
    }
});

// Port default Vercel
app.listen(3000);
