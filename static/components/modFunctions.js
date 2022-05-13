function clean() {
    document.querySelector("[name='statement']").value = "";
    document.querySelector('#questionImagesList').innerHTML = "";
    for(const alternative of document.querySelectorAll("[name='alternatives']")) {
        if(alternative) {
            alternative.value = "";
        }
    }
    document.querySelector("[name='correct']").value = "";
    document.querySelector("[name='theme']").value = "";
    document.querySelector("[name='name']").value = "";
    for(const image of document.querySelectorAll('[ name=image ]')) {
        image.checked = false;
    };

    document.querySelector("#difficultyRange").value = 2;
    document.getElementById("difficultyOutput").innerText = 2;
    document.querySelector('[name=source]').value = "";
};

function cleanList(list) {
    while(list.length) {
        list.pop();
    }
}

function hide(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('hide');
};

function cancelEdit() {
    clean();
    document.getElementById('save').removeAttribute('data-save');
    hide("add");
    hide("save");
    hide("cancel");
}

function addQuestionImage(event, url = null) {
    const imagesList = document.querySelector('#questionImagesList');
    if(imagesList.lastElementChild) {
        if(imagesList.lastElementChild.firstElementChild.value === '') {
            window.alert("Insert an image before adding another")
            return;
        }
    }
    const images = document.querySelectorAll('[name=questionImages]');
    const item = document.createElement('li');
    item.innerText = `URL:`;
    item.innerHTML += `<input name="questionImages" type="text" autocomplete="off"> <button class="delQuestionImage">X</button>`;
    item.lastElementChild.addEventListener('click', event => { event.currentTarget.parentElement.remove() })
    url ? item.firstElementChild.value = url : item.firstElementChild.value = '';
    imagesList.appendChild(item);
}

export { clean, hide, cleanList, cancelEdit, addQuestionImage };