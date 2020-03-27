<?php
$pagina = 'home';

if (isset($_GET['p'])){
    $pagina = addslashes($_GET['p']);
}
include 'pages/header.html';

switch ($pagina){
    case 'home':
        include 'pages/home.html';
        break;
    case 'faq':
        include 'pages/faq.html';
        break;
    case 'produtos':
        include 'pages/produtos.html';
        break;    
    case 'contato':
        include 'pages/contato.html';
        break;    
    default:
        include 'pages/home.html';
        break;
}

include 'pages/footer.html';