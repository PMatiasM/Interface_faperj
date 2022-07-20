async function loadLists() {
    const response = await fetch('http://faperj.ddns.net/api/lists',{ method:"get" })
    const lists = await response.json();
    return lists;
};

export { loadLists };
