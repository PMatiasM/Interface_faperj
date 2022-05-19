import { ListDiv } from "./listDiv.js";
import { QuestionList } from "./questionList.js";

function Wrapper(list) {
    const root = document.querySelector('.principal');
    const wrapper = document.createElement('div');
    const listDiv = ListDiv(list);
    const questionList = QuestionList(list);
    
    listDiv.addEventListener('click', hideQuestions);
    wrapper.classList.add('wrapper');
    wrapper.appendChild(listDiv);
    wrapper.appendChild(questionList);

    root.appendChild(wrapper);
}

function hideQuestions(event) {
    const listDiv = event.currentTarget;
    const img = document.querySelector(`[data-img-id='${listDiv.dataset.id}'`)
    img.classList.toggle('open');

    const questionListId = listDiv.dataset.id
    const questionList = document.querySelector(`[data-list='${questionListId}']`);
    questionList.classList.toggle('hide')
};

export { Wrapper };