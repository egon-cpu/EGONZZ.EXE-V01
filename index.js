const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get('/api/ban', async (req, res) => {
    const number = req.query.number;
    if (!number) return res.send("MANA NOMORNYA TUAN EGONZZ? 🤤");

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mgxegon6@gmail.com',
            pass: 'gjelzbhocneejser' // KODE SAKTI TERBARU LU!
        }
    });

    res.send(`SATELLITE EGONZZ STARTING: 50 MISSILES ON THE WAY TO +${number}... 🚀💀`);

    // JALUR STEALTH (Kirim 50 email dengan jeda 1.2 detik biar pas 1 menit)
    let count = 0;
    let interval = setInterval(async () => {
        if (count >= 50) {
            clearInterval(interval);
            console.log(`MISI SELESAI: 50 EMAIL TERKIRIM KE +${number}`);
            return;
        }

        let mailOptions = {
            from: 'EGONZZ STEALTH 🛰️',
            to: 'support@support.whatsapp.com',
            subject: `Violation Report #${Math.floor(Math.random() * 9999)} - +${number}`,
            text: `Safety Alert: Account +${number} is reported for distributing harmful content. Please terminate access immediately.`
        };

        try {
            await transporter.sendMail(mailOptions);
            count++;
        } catch (e) {
            console.log("Satelit Overheat, Pending...");
        }
    }, 1200); 
});

app.listen(3000);
