const Menu = (listId, questionId) => {
    const menu = document.createElement('div');
    menu.classList.add('container');
    menu.dataset.menu = `${listId}${questionId}`;
    menu.innerHTML = `
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>`;
    return menu;
};

export { Menu };