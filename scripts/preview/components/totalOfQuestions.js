function TotalOfQuestions(nQuestions) {
    const div = document.createElement('div');
    const paragraph= document.createElement('p');

    paragraph.innerText = `Total de questões: ${nQuestions}`;
    div.classList.add('totalOfQuestions');
    div.appendChild(paragraph);

    return div;
}

export { TotalOfQuestions };