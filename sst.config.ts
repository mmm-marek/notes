/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "notes",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
            providers: {
                aws: {
                    region: "eu-north-1",
                },
            },
        };
    },
    async run() {
        await import("./infra/storage");
        await import("./infra/api");
    },
});
