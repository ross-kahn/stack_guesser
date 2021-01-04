/**
 * Models results from the stack exchange API
 */

// Response object. Contains a list of questions and answers
export type StackResponse = {
    items: StackQuestion[],
    has_more: boolean,
    quote_max: number,
    quota_remaining: number
}

// Question object. Contains all data needed to render, plus data on answers
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

// Answer object. Contains all data needed to render
export type StackAnswer = {
    answer_id: boolean;
    is_accepted: boolean;
    question_id: number;
    link: string;
    body: string;
}