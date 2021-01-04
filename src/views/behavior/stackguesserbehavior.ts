import { format } from "path";

/**
 * Removes the no-display class from the correct / incorrect badge on a question's answer
 * @param questionID Question identifier from stack
 * @param answerID Answer identifier from stack
 */
function showBadges(questionID: string, answerID: string)
{
    // Show the correct / incorrect badge on the answer
    const badgeID: string = questionID + "_" + answerID;
    const badgeSpan = document.getElementById(badgeID);
    const isCorrect = badgeSpan.classList.contains("badge-success");
    badgeSpan.classList.remove("d-none");

    // Show the answered badge on the question
    const unansweredSpan = document.getElementById(questionID);
    unansweredSpan.classList.remove("badge-warning", "badge-success", "badge-danger");
    if (isCorrect)
    {
        unansweredSpan.classList.add("badge-success");
        unansweredSpan.innerHTML = "Correct";
    } else
    {
        unansweredSpan.classList.add("badge-danger");
        unansweredSpan.innerHTML = "Incorrect";
    }
}