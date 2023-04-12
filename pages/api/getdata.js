import mysql from "mysql2/promise";


export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "os_equip_app",
        port: 3306,
        user: "root",
        password: process.env.MYSQL_PASSWORD,
    });
    try {
        const query = "SELECT eqid, equipment_name FROM equipment";
        const values = [];
        const [data] = await dbconnection.execute(query, values)
        dbconnection.end();
        res.status(200).json({ results: data });


    } catch (error) {
        // res.status(500).json({ error: error.message });
    }


  
}
