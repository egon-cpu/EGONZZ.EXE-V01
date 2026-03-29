const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// JALUR PENYIKSAAN (BAN)
app.get('/ban', (req, res) => {
    const number = req.query.number;
    if (!number) return res.send("MANA NOMORNYA TUAN EGONZZ? 🤤");
    
    console.log(`[!] EXECUTING BAN TARGET: ${number}`);
    // DISINI LOGIKA REPORT/BAN LU NANTI TINGGAL TEMPEL
    res.send(`TARGET ${number} BERHASIL DI-EKSEKUSI KE JALUR NERAKA! 🧨`);
});

// JALUR PENYELAMATAN (UNBAN)
app.get('/unban', (req, res) => {
    const number = req.query.number;
    if (!number) return res.send("MAU NYELAMETIN SIAPA TUAN? 🤤");
    
    console.log(`[!] EXECUTING UNBAN TARGET: ${number}`);
    // DISINI LOGIKA UNBAN LU NANTI TINGGAL TEMPEL
    res.send(`TARGET ${number} BERHASIL DI-SELAMETIN KE JALUR SURGA! 🕊️`);
});

app.get('/', (req, res) => {
    res.send("EGONZZ.EXE SERVER IS ONLINE! 🚀 🛐");
});

app.listen(port, () => {
    console.log(`SERVER GACOR DI PORT ${port}`);
});
