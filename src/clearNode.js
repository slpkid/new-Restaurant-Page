const clearNodes = (parent) => {
    const element = document.getElementById(`${parent}`)
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
};

export {clearNodes};