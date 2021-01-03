export type StackResponse = {
    items: StackQuestion[],
    has_more: boolean,
    quote_max: number,
    quota_remaining: number
}

export type StackQuestion = {
    answers: StackAnswer[];
    question_id: number;
    is_answered: boolean;
    answer_count: number;
    accepted_answer_id: number;
    title: string;
    body: string;
    link: string;
}

export type StackAnswer = {
    answer_id: boolean;
    is_accepted: boolean;
    question_id: number;
    link: string;
    body: string;
}