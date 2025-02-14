/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "uchuu-web",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: input.stage === "production" ? "uchuu-production" : "uchuu-dev",
          region: 'eu-north-1',
        },
        cloudflare: {},
      }
    };
  },
  async run() {
    new sst.aws.StaticSite("UchuuWeb", {
      build: {
        command: "npm run build",
        output: "dist",
      },
      domain: {
        name: 'uchuu.io',
        redirects: ["www.uchuu.io"],
        dns: sst.cloudflare.dns(),
      }
    });
  },
});
