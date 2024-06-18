const clearNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

export {clearNodes};