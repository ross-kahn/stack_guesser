import { Application, Request, response, Response } from "express";
import { StackService } from "./stackservice";

/**
 * Application routes
 */
export class Routes
{
    /**
     * Routes the index
     * @param app Express application
     * @param stackService Service to retrieve results from the stack exchange API
     */
    public route(app: Application, stackService: StackService)
    {
        app.get('/', (req: Request, res: Response) =>
        {
            stackService.GetQuestions().then(stackResponse =>
            {
                res.render('index', stackResponse);
                console.log(stackResponse);
            })

            res.status(200);
        });

        // Mismatch URL
        app.all('*', (req: Request, res: Response) =>
        {
            res.status(404).send({ error: true, message: 'Check your URL please' });
        });
    }




}