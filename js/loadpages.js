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
        if (page === 'pages/produtos.html') {
            var galeria = "";

            for (let i = 1; i <= 6; i++) {
                galeria += `
                    <div class="card m-3" style="width: 19rem;">
                        <img alt="picture"
                        src="images/hamburger${i}.jpg"
                        class="img-fluid">
                        <button class="lupa" type="button" data-toggle="modal" data-target="#hamburger${i}">
                            <i class="fa fa-search"></i>
                        </button>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>  
                    <div class="modal fade" id="hamburger${i}" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img class="img-fluid" src="images/hamburger${i}.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div> 
                    `
            }
            document.getElementById('burgerStore').innerHTML = galeria;
        }
        document.documentElement.scrollTop = 0;
    };
    xhr.send();
    document.getElementById('burguermenu').click();
}