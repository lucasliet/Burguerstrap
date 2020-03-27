<?php
$pagina = 'home';

if (isset($_GET['p'])){
    $pagina = addslashes($_GET['p']);
}
include 'view/header.html';

switch ($pagina){
    case 'home':
        include 'view/home.html';
        break;
    case 'faq':
        include 'view/faq.html';
        break;
    case 'produtos':
        include 'view/produtos.html';
        break;    
    case 'contato':
        include 'view/contato.html';
        break;    
    default:
        include 'view/home.html';
        break;
}

include 'view/footer.html';