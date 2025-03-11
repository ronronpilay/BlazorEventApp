window.localStorageHelper = {
    setItem: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    removeItem: function (key) {
        localStorage.removeItem(key);
    }
};
