function home() {
    location.reload();
}

function produtos() {
    var galeria = "";

    for (let i = 1; i <= 3; i++) {
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
    document.getElementById('corpo').innerHTML = `
        <section>
            <img class="mt-5" src="images/banner.png" width="100%"/>
        </section>
        <section>
            <div class="text-light bg-preto p-3 text-center"><h1>Cardápio</h1></div>
            <div class="container">
                <div class="row justify-content-center">${galeria}</div>
            </div>
        </section>

        <script src="Vendor/bootstrap/jquery-3.3.1.slim.min.js"></script>
        <script src="Vendor/bootstrap/popper.min.js"></script>
        <script src="Vendor/bootstrap/bootstrap.min.js"></script>
        <script src="js/script.js"></script>
        `
    document.documentElement.scrollTop = 0;
}