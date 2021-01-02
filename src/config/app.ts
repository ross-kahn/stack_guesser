/**
 * Hooks up the character controller and establishes routes
 */
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
    // private _dbConnection: ICharacterDBConnector;
    // private _characters: CharacterController;

    constructor()
    {
        this.app = express();
        this.__initServices();
        this.__initApp();

        this._routes.route(this.app, this._stackService);
    }

    private __initServices(): void
    {
        this._routes = new Routes();
        this._stackService = new StackService();


        // Initialize the database and the controllers
        // this._dbConnection = new JSONCharacterConnector();
        // this._characters = new CharacterController(this._dbConnection);
    }

    private __initApp(): void
    {
        // Configure Express to use EJS
        this.app.set("views", path.join(process.cwd(), "dist/views/pages"));
        this.app.set("view engine", "ejs");

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
export default new App().app;