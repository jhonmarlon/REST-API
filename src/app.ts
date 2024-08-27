import { Server } from "./presentation/server";
import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";

(async () => {
    main();
})();

function main() {
    const { PORT, PUBLIC_PATH } = envs;

    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        routes: AppRoutes.routes
    });
    server.start();
}