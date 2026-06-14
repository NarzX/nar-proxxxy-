4. Gulir ke bawah, lalu klik tombol hijau **Commit changes** (klik sekali lagi jika muncul konfirmasi).

#### B. Membuat File `server.js` (Otak & Tampilan Nar Proxxxy)
1. Kamu akan kembali ke halaman utama repository. Klik tombol **Add file** -> **Create new file**.
2. Pada kolom nama file, ketik: `server.js`
3. Pada kotak isi kode, **copy-paste** seluruh kode di bawah ini:
   ```javascript
   const express = require('express');
   const Unblocker = require('unblocker');
   const app = express();

   // Mengaktifkan Engine Proxy yang Optimal
   const unblocker = new Unblocker({prefix: '/proxy/'});
   app.use(unblocker);

   // Halaman Utama Nar Proxxxy dengan Desain Cyberpunk/Neon
   app.get('/', (req, res) => {
       res.send(`
       <!DOCTYPE html>
       <html lang="id">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Nar Proxxxy - SG Server</title>
           <style>
               body { 
                   background-color: #0d1117; 
                   color: #00ffcc; 
                   font-family: 'Courier New', Courier, monospace; 
                   display: flex; 
                   flex-direction: column; 
                   align-items: center; 
                   justify-content: center; 
                   height: 100vh; 
                   margin: 0; 
               }
               .container {
                   text-align: center;
                   background: #161b22;
                   padding: 40px;
                   border-radius: 15px;
                   box-shadow: 0 0 20px rgba(0, 255, 204, 0.3);
                   border: 1px solid #00ffcc;
                   width: 90%;
                   max-width: 500px;
               }
               h1 { 
                   font-size: 3rem; 
                   text-shadow: 0 0 15px #00ffcc; 
                   margin: 0 0 10px 0; 
                   letter-spacing: 2px;
               }
               p { 
                   color: #8b949e; 
                   margin-bottom: 30px; 
                   font-size: 1.1rem;
               }
               form { 
                   display: flex; 
                   width: 100%;
               }
               input[type="text"] { 
                   flex: 1; 
                   padding: 15px; 
                   border: 2px solid #00ffcc; 
                   background: #0d1117; 
                   color: #fff; 
                   border-radius: 8px 0 0 8px; 
                   outline: none; 
                   font-size: 1rem; 
               }
               input[type="text"]::placeholder {
                   color: #484f58;
               }
               button { 
                   padding: 15px 25px; 
                   background: #00ffcc; 
                   color: #000; 
                   border: none; 
                   border-radius: 0 8px 8px 0; 
                   cursor: pointer; 
                   font-weight: bold; 
                   font-size: 1.1rem; 
                   transition: 0.3s; 
               }
               button:hover { 
                   background: #00cca3; 
                   box-shadow: 0 0 15px #00ffcc; 
               }
               .footer {
                   margin-top: 25px;
                   font-size: 0.8rem;
                   color: #484f58;
               }
           </style>
       </head>
       <body>
           <div class="container">
               <h1>Nar Proxxxy</h1>
               <p>⚡ High Speed Web Proxy • Server: Singapore ⚡</p>
               <form onsubmit="event.preventDefault(); navigate();">
                   <input type="text" id="url" placeholder="Masukkan web (cth: nar_ganteng.com)" required>
                   <button type="submit">GO</button>
               </form>
               <div class="footer">Nar Proxxxy © 2026 • Hosted on Cloud (SG)</div>
           </div>

           <script>
               function navigate() {
                   let url = document.getElementById('url').value;
                   if (!url.startsWith('http://') && !url.startsWith('https://')) {
                       url = 'https://' + url;
                   }
                   window.location.href = '/proxy/' + url;
               }
           </script>
       </body>
       </html>
       `);
   });

   // Menggunakan Port Otomatis dari Cloud
   // ✅ GANTI DENGAN KODE INI:
module.exports = app;
 
