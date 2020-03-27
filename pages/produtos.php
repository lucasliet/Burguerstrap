<div id="fadein">
    <section>
        <div class="mt-5">
            <img class="banner img-fluid" src="images/banner.png" />
            <img class="bannermobile img-fluid" src="images/bannermobile.png" />
        </div>
        <!-- <img class="mt-5" src="images/banner.png" width="100%" /> -->
        <div class="text-light bg-preto p-3 text-center">
            <h1>Cardápio</h1>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <?php
                        $html = '';
                    
                        $titles[1] = 'Opção Nº 1';
                        $texts[1] = '
                            Duplo cheeseburger com cheddar e bacon crocante, deliciosas onion rings,
                            maionese picante e rúcula fresquinha no pão brioche.
                        ';
                        $prices[1] = '350G – <b>R$ 39,90</b>';
                    
                        $titles[] = 'Opção Nº 2';
                        $texts[] = '
                            O pioneiro da casa! Traz suculento hamburguer de picanha com alface, cebola
                            picadinha,
                            queijo prato, picles, super crocante bacon e o indescritível molho rosé, no pão
                            brioche.
                        ';
                        $prices[] = '150G – <b>R$ 27,50</b> | 220G – <b>R$ 35,50</b>';
                        
                        $titles[] = 'Opção Nº 3';
                        $texts[] = '
                            burger 240g com Catupiry, tomate e maionese, servido no pão de
                            hambúrguer tradicional.
                        ';
                        $prices[] = '150G – <b>R$ 26,50</b> | 220G – <b>R$ 30,00</b>';
                    
                        $titles[] = 'Opção Nº 4';
                        $texts[] = '
                            burger 120g com queijo prato, alface, 
                            tomate e maionese fifties, 
                            no pão de hambúrguer tradicional.
                        ';
                        $prices[] = '150G – <b>R$ 25,50</b> | 350G – <b>R$ 32,90</b>';
                    
                        $titles[] = 'Opção Nº 5';
                        $texts[] = '
                            burger 120g com queijo prato, alface,
                            tomate e maionese fifties, no pão de hambúrguer tradicional.
                        ';
                        $prices[] = '150G – <b>R$ 22,50</b> | 350G – <b>R$ 29,90</b>';
                    
                        $titles[] = 'Opção Nº 6';
                        $texts[] = '
                            2 hambúrgueres de 120g, com cheddar, alface,
                            tomate, maionese fifties, mostarda, cebola grelhada, 
                            picles e bacon com um toque de pimenta no pão brioche.
                        ';
                        $prices[] = '350G – <b>R$ 38,50</b>';
                    
                        for ($i = 1; $i <= 6; $i++) {
                            $html .= '
                            <div class="col-lg-4 col-md-6">
                                <div class="card link-grow m-3">
                                    <img alt="picture" src="images/hamburger' . $i . '.jpg" class="img-fluid">
                                        <button class="lupa" type="button" data-toggle="modal" data-target="#hamburger' . $i . '">
                                            <i class="fa fa-search"></i>
                                        </button>
                                        <div class="card-body">
                                            <h2 class="font-weight-bold lead text-uppercase">' . $titles[$i] . '</h2>
                                            <span class="badge badge-danger p-1 mb-3">' . $prices[$i] . '</span>
                                            <p class="card-text text-justify">' . $texts[$i] . '</p>
                                        </div>
                                </div>
                            </div>
                            <div class="modal fade" id="hamburger' . $i . '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                    <div class="modal-content">
                                        <button type="button" class="close lupa" data-dismiss="modal" aria-label="Fechar">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <img class="img-fluid" src="images/hamburger' . $i . '.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                            ';
                        }
                        echo $html;
                ?>
            </div>
        </div>
    </section>
</div>