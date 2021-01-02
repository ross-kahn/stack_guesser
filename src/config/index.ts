import app from "./app";

const port = 3000; // default port to listen

// start the Express server
app.listen(port, () =>
{
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});