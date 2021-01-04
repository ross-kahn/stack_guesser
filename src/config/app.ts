import express from "express";
import bodyParser from "body-parser";
import { Routes } from "../services/routes";
import path from "path";
import { StackService } from "../services/stackservice";

class App
{
    public app: express.Application;
    private _routes: Routes;
    private _stackService: StackService;

    constructor()
    {
        this.app = express();
        this.__initServices();
        this.__initApp();

        this._routes.route(this.app, this._stackService);
    }

    /**
     * Sets up services and routes. Database and controllers can be added in future.
     */
    private __initServices(): void
    {
        this._routes = new Routes();
        this._stackService = new StackService();
    }

    /**
     * Sets up the express server
     */
    private __initApp(): void
    {
        // Configure Express to use EJS
        this.app.set("views", path.join(process.cwd(), "dist/views/pages"));
        this.app.set("view engine", "ejs");

        this.app.use(express.static('dist/views/behavior'));

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
export default new App().app;