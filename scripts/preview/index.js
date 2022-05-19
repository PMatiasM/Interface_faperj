import { loadLists } from "./components/loadFunctions.js"
import { Wrapper } from "./components/wrapper.js";

(async () => {
    const loadDiv = document.querySelector('#load');
    const lists = await loadLists();

    loadDiv.classList.toggle('hide');

    for(const list of lists) {
        Wrapper(list);
    }
})()