import mysql from "mysql2";
export const db = mysql.createConnection({
    host: "mysql.railway.internal",
    user: "root",
    password: "XrxlqtAHQxgOmTxPpfyALuQfGpQDkgHB",
    database: "railway",
    port: "3306"
});
db.connect(err => {
    if (err) throw err;
    console.log("✅ Conectado a MySQL");
});

