import { AnswersList } from "./answerList.js";
import { QuestionImagesDiv } from "./questionImagesDiv.js";

const Details = (listId, theme, name, path, question) => {
    const details = document.createElement('div');
    details.classList.add('details');
    details.classList.add('hide');
    details.dataset.question = `${listId}${question.id}`;
    details.appendChild(QuestionImagesDiv(question))
    details.appendChild(AnswersList(question));
    details.innerHTML += `
                            <div class="horizontalDivisor"></div>
                            <div class="detailsTCD">
                                <h2>Tema:</h2>
                                <p>${theme}</p>
                            </div>
                            <div class="detailsTCD">
                                <h2>Personagem:</h2>
                                <div>
                                    <img src="${path}" alt="">
                                    <p>${name}</p>
                                </div>
                            </div>
                            <div class="detailsTCD">
                                <h2>Dificuldade:</h2>
                                <input id="difficultyRange" type="range" value="${question.difficulty}" min="1" max="3" oninput="this.nextElementSibling.value = this.value" disabled>
                                <output id="difficultyOutput">${question.difficulty}</output>
                            </div>
                            <div class="detailsTCD">
                                <h2>Fonte:</h2>
                                <p>${question.source}</p>
                            </div>`;
    return details;
};

export { Details };