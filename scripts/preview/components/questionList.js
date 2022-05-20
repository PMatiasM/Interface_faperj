import { Register } from "./register.js";
import { TotalOfQuestions } from "./totalOfQuestions.js";

function QuestionList(list) {
    const questionList = document.createElement('div');
    const questionWrapper = document.createElement('div');

    questionList.classList.add('questionList');
    questionList.classList.add('hide')
    questionList.dataset.list = list.id;
    questionWrapper.classList.add('questionWrapper');
    questionWrapper.appendChild(TotalOfQuestions(list.questionList.length));

    for(const question of list.questionList) {
        const theme = list.themeList.find(element => element.id === question.themeId);
        const character = list.characterList.find(element => element.id === question.characterId);
        const name = character.charName;
        const path = character.portraitURL;
        questionWrapper.appendChild(Register(list.id, theme.theme, name, path, question));
    }

    questionList.appendChild(questionWrapper);
    return questionList;
}

export { QuestionList };