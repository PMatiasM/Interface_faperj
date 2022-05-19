const QuestionImagesDiv = (question) => {
    const questionsDiv = document.createElement('div');
    questionsDiv.id = "questionImagesDiv";
    if(question.questionImages === []) {
        return
    }
    for(const image of question.questionImages) {
        questionsDiv.innerHTML += `<img src="${ image }">`
    }
    return questionsDiv;
}

export { QuestionImagesDiv };