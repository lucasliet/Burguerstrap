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

        if(page == 'pages/produtos.html'){
            document.getElementById('cardapio').innerHTML = geraCardapio();
        }

        document.documentElement.scrollTop = 0;
    };
    xhr.send();
}

function geraCardapio() {
    var html = '';
    
    var texts = new Array;
    texts.push('0');

    var prices = new Array;
    prices.push('0');

    //1111111111111
    texts.push(`
        Duplo cheeseburger com cheddar e bacon crocante, deliciosas onion rings,
        maionese picante e rúcula fresquinha no pão brioche.
    `)

    prices.push('350G – <b>R$ 39,90</b>')

    //2222222222222
    texts.push(`
        O pioneiro da casa! Traz suculento hamburguer de picanha com alface, cebola
        picadinha,
        queijo prato, picles, super crocante bacon e o indescritível molho rosé, no pão
        brioche.
    `)

    prices.push('150G – <b>R$ 27,50</b> | 220G – <b>R$ 35,50</b>')
    
    //3333333333333
    texts.push(`
        burger 240g com Catupiry, tomate e maionese, servido no pão de
        hambúrguer tradicional.
    `)
    
    prices.push('150G – <b>R$ 26,50</b> | 220G – <b>R$ 30,00</b>')

    //4444444444444
    texts.push(`
        burger 120g com queijo prato, alface, 
        tomate e maionese fifties, 
        no pão de hambúrguer tradicional.
    `)
    
    prices.push('150G – <b>R$ 25,50</b> | 350G – <b>R$ 32,90</b>')

    //5555555555555
    texts.push(`
        burger 120g com queijo prato, alface,
        tomate e maionese fifties, no pão de hambúrguer tradicional.
    `)
    
    prices.push('150G – <b>R$ 22,50</b> | 350G – <b>R$ 29,90</b>')

    //6666666666666
    texts.push(`
        2 hambúrgueres de 120g, com cheddar, alface,
        tomate, maionese fifties, mostarda, cebola grelhada , 
        picles e bacon com um toque de pimenta no pão brioche.
    `)
    
    prices.push('350G – <b>R$ 38,50</b>')

    for (let i = 1; i <= 6; i++) {
    html += `
        <div class="col-lg-4 col-md-6">
            <div class="card m-3">
                <img alt="picture" src="images/hamburger${i}.jpg" class="img-fluid">
                    <button class="lupa" type="button" data-toggle="modal" data-target="#hamburger${i}">
                        <i class="fa fa-search"></i>
                    </button>
                    <div class="card-body">
                        <span class="badge badge-danger p-1 mb-3">${prices[i]}</span>
                        <p class="card-text">${texts[i]}</p>
                    </div>
            </div>
        </div>
        <div class="modal fade" id="hamburger${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <button type="button" class="close lupa" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <img class="img-fluid" src="images/hamburger${i}.jpg" alt="">
                </div>
            </div>
        </div>
        `
    }
    return html;
}