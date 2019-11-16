if (sessionStorage.getItem('pagina')) {
    loadPage(sessionStorage.getItem('pagina'));

} else {
    loadPage('pages/home.html')
}

function loadPage(page) {
    sessionStorage.setItem('pagina', page);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onreadystatechange = function () {
        document.getElementById('corpo').innerHTML = this.responseText;
        // if (page === 'pages/produtos.html') {
        //     var galeria = "";

        //     for (let i = 1; i <= 6; i++) {
        //         galeria += `
                    
        //             `
        //     }
        //     document.getElementById('burgerStore').innerHTML = galeria;
        // }
        document.documentElement.scrollTop = 0;
    };
    xhr.send();
}