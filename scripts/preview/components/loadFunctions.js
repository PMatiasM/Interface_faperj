async function loadLists() {
    const response = await fetch('http://faperj.ddns.net:31415/lists',{ method:"get" })
    const lists = await response.json();
    return lists;
};

export { loadLists };