(function () {
    let promise = new Promise((resolve, reject) => {
        resolve();
    });

    function popup() {
        window.confirm('Click OK !');
    }

    function waitTwoSeconds() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }

    function redirectToWebsite() {
        document.location = 'https://telerikacademy.com/';
    }

    promise
        .then(popup)
        .then(waitTwoSeconds)
        .then(redirectToWebsite);
}());