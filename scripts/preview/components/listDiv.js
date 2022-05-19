function ListDiv(list) {
    const listDiv = document.createElement('div');
    const childDiv = document.createElement('div');
    const id = document.createElement('h1');
    const title = document.createElement('h4');
    const arrow = document.createElement('img');

    listDiv.classList.add('listDiv');
    listDiv.dataset.id = list.id;
    id.innerText = list.id;
    title.innerText = list.title;
    arrow.setAttribute('src', '../../../images/icons8-expand-arrow-50.png');
    arrow.dataset.imgId = list.id

    childDiv.appendChild(id);
    childDiv.appendChild(title);
    childDiv.appendChild(arrow);

    listDiv.appendChild(childDiv);
    
    return listDiv;
};

export { ListDiv };