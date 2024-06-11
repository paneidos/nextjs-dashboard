import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "nextjs-dashboard",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        environment: {
          POSTGRES_URL: process.env.POSTGRES_URL ?? '',
          POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL ?? '',
          POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL ?? '',
          POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING ?? '',
          POSTGRES_USER: process.env.POSTGRES_USER ?? '',
          POSTGRES_HOST: process.env.POSTGRES_HOST ?? '',
          POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD ?? '',
          POSTGRES_DATABASE: process.env.POSTGRES_DATABASE ?? '',
          AUTH_SECRET: process.env.AUTH_SECRET ?? '',
          AUTH_URL: process.env.AUTH_URL ?? ''
        }
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
