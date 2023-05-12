
(() =>{
    const $container = document.querySelector('section.container')
    console.log($container);
    const $p = document.createElement('p');
    $container.appendChild($p);

    $texto = document.createTextNode('Practicando el manejo del Dom');
    $p.appendChild($texto);

    const $titulo = document.querySelector('h1');
    $titulo.insertAdjacentElement('beforebegin',$p)
    console.log($titulo);

})()


// appendChild --> siempre agrega un nodo al final
// insertAdjacentElement --> Nos da la opcion de elejir donode queremos agregar un Nodo (beforebegin, afterend, afterbegin, beforeend)