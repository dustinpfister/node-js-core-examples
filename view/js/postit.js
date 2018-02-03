// simple http post request method

var postIt = function (argu) {

    var xhr = new XMLHttpRequest();

    if (typeof argu === 'string') {

        argu = {
            data: argu
        };

    }

    argu = argu || {};

    argu.url = argu.url || window.location.href;
    argu.data = argu.data || {};
    argu.beforeSend = argu.beforeSend || function (xhr, next) {
        next();
    };
    argu.done = argu.done || function (xhr) {
        console.log(xhr);
    };
    argu.fail = argu.fail || function (xhr) {
        console.log(xhr);
    };

    xhr.open('post', argu.url);

    xhr.onreadystatechange = function () {

        if (this.readyState === 4) {

            if (this.status === 200) {

                argu.done(this);

            } else {

                argu.fail(this);

            }

        }

    };

    argu.beforeSend(xhr, function () {

        xhr.send(argu.data);

    });

};
