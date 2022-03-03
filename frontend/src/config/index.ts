import getConfig from "next/config";
import { dockerConfig } from "./config.docker";
import { localConfig } from "./config.local";
import { productionConfig } from "./config.production";

export interface Config {
  server: {
    address: string;
    port?: number;
  };
}

export const getConfigForEnvironment = () => {
  const { publicRuntimeConfig } = getConfig();
  const environment = publicRuntimeConfig?.environment || "local";

  switch (environment) {
    case "local":
      console.log("LOOOOOOCCCAAAAAALLLLLL");
      return localConfig;

    case "docker":
      console.log("DOOOOCOCCCCKKKKKERRRRRR");
      return dockerConfig;

    case "production":
      console.log("AKNBDJFAKJNFKJAEJKFAJSE.FKJ.AKJBE.FKJSBKJBSEKJFKJSEF");
      return productionConfig;

    default:
      throw "Unknown environement name";
  }
};
