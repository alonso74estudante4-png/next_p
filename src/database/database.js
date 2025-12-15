import {Pool} from "pg";

const url = "postgresql://neondb_owner:npg_u1grqkxnAO5T@ep-twilight-pond-acn7ozau-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require";

const database = new Pool({
    connectionString: url,
    });

export default database;
