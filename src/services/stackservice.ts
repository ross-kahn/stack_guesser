import { StackQuestion, StackResponse } from "../model/stackmodel";
import fetch from 'node-fetch';

export class StackService
{
    public async GetQuestions(): Promise<StackResponse>
    {
        console.log("\nAbout to fetch a thing!");

        return await fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!1PVJbo7_VTGx)GP63j(kDyvbZtbqs.AlD')
            .then(result => result.json())
            .then(json =>
            {
                const stackResponse: StackResponse = json;
                stackResponse.items = this.FilterQuestions(stackResponse);
                console.log(stackResponse);
                return stackResponse;
            })
    }

    private FilterQuestions(stackResponse: StackResponse): StackQuestion[]
    {
        if (!stackResponse) { return null; }

        return stackResponse.items.filter(sq => sq.is_answered && sq.answer_count > 1 && sq.accepted_answer_id);
    }
}