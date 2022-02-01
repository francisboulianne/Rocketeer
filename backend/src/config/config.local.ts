import { Config } from ".";

export const localConfig: Config = {
  http: {
    port: 8888
  },
  mongo: {
    connectionString: "francis:Moustache123@rocketeer.ri5qr.mongodb.net",
    databaseName: "Rocketeer"
  }
};
