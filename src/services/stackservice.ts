import { StackQuestion, StackResponse } from "../model/stackmodel";
import fetch from 'node-fetch';

/**
 * Handles calling into the Stack Exchange API and filtering the response
 */
export class StackService
{
    /**
     * Gets a list of recent questions from Stack Exchange using an API filter, then further filters the results
     * based on answers
     */
    public async GetQuestions(): Promise<StackResponse>
    {
        return await fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!1PVJbo7_VTGx)GP63j(kDyvbZtbqs.AlD')
            .then(result => result.json())
            .then(json =>
            {
                const stackResponse: StackResponse = json;
                stackResponse.items = this.FilterQuestions(stackResponse);
                return stackResponse;
            })
    }

    /**
     * Further filters response from Stack Exchange based on number of answer counts and whether an answer is accepted
     * @param stackResponse Raw JSON results from stack exchange
     */
    private FilterQuestions(stackResponse: StackResponse): StackQuestion[]
    {
        if (!stackResponse) { return null; }

        return stackResponse.items.filter(sq => sq.is_answered && sq.answer_count > 1 && sq.accepted_answer_id);
    }
}