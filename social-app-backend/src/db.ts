import postgres from "postgres";

 const sql = postgres({
    host: "localhost",
    port: 5432,
    database: "social_app",
    username: "postgres",
    password: "janu" 
        
});

export default sql;