import { Config } from ".";

export const productionConfig: Config = {
  http: {
    port: 8080
  },
  mongo: {
    connectionString: "francis:Moustache123@rocketeer.ri5qr.mongodb.net",
    databaseName: "Rocketeer"
  }
};
