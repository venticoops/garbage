


function showPage(type, character = null) {

    const mainPage = document.getElementById('main-page');
    const charsPage = document.getElementById('chars-page');
    const sideChars = document.getElementById('side-chars');
    const eachOc = document.getElementById('individualOc');

    /* remove active class from all pages */
    mainPage.classList.remove('active');
    charsPage.classList.remove('active');
    sideChars.classList.remove('active');
    eachOc.classList.remove('active');

    /* show selected page */
    if (type === 'main-ocs') {
        charsPage.classList.add('active');
    }

    else if (type === 'side-ocs') {
        sideChars.classList.add('active');
    }

    else if (type === 'home') {
        mainPage.classList.add('active');
    }
    else if (type === 'main-oc') {
        const bigImage = document.getElementById('big-image');
        const imgWide = document.getElementById('img-wide');
        const imgSquare = document.getElementById('img-square');
        const mainOcExtra = document.getElementById('main-oc-extra');
        const mainOcTrivia = document.getElementById('main-oc-trivia');
        const mainOcTitleLittle = document.getElementById('main-oc-title-little');
        const mainOcTitle = document.getElementById('main-oc-title');
        const mainOcAbt = document.getElementById('main-oc-abt');
        const mainOcImgHead = document.getElementById('main-oc-img-head');
        const mainOcImgSquare = document.getElementById('main-oc-img-square');
        const mainOcLore = document.getElementById('main-oc-lore');
        const mainOcRels = document.getElementById('main-oc-rels');
        eachOc.classList.add('active');

        const main_oc_data = {

        "oc_1":{
            "nombre":"Oc_1",
            "abt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "extra": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus ",
            "trivia": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at",
            "lore": "ler efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus er efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus",
            
            "imgs": {
                "main": "https://files.catbox.moe/zk61g9.jpg",
                "square":"https://files.catbox.moe/zk61g9.jpg",
                "wide":"https://files.catbox.moe/zk61g9.jpg",
                "square":"https://files.catbox.moe/zk61g9.jpg",
                "square":"https://files.catbox.moe/zk61g9.jpg"

            }
        }
        }
        if (character === 1){

        }

    }
}

function returnHome() {
    showPage('home');
}

function turnBack(type) {

    if (type === 'main-ocs') {
        showPage('main-ocs');
    }

    else if (type === 'home') {
        showPage('home');
    }
}

function change_oc_data(type){

    const oc_data = {

        "oc_1":{
            "nombre":"Oc_1",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_2":{
            "nombre":"Oc_2",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_3":{
            "nombre":"Oc_3",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_4":{
            "nombre":"Oc_4",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_5":{
            "nombre":"Oc_5",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_6":{
            "nombre":"Oc_6",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_7":{
            "nombre":"Oc_7",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_8":{
            "nombre":"Oc_8",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_9":{
            "nombre":"Oc_9",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_10":{
            "nombre":"Oc_10",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_11":{
            "nombre":"Oc_11",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        },
        "oc_12":{
            "nombre":"Oc_12",
            "infoOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod suscipit risus, eget hendrerit magna. Morbi sed tincidunt sapien. Nullam at mauris tincidunt, consectetur quam quis, venenatis ex. Donec sed ipsum urna. Proin blandit justo eget libero tempus, non blandit risus blandit. Vivamus viverra mollis enim. Sed a feugiat sapien, non vulputate est.",
            "infoTwo": "Integer efficitur sit amet orci in ultrices. Etiam ut scelerisque diam, a aliquet massa. Phasellus rhoncus nisi ac posuere venenatis. Nulla facilisi. Donec at lorem vel enim dignissim luctus. Suspendisse sed ligula nisi. Curabitur aliquet malesuada lacus, in vulputate neque imperdiet ac. Phasellus posuere lorem et nulla fermentum, ac malesuada dolor fringilla. Phasellus nec leo luctus, condimentum risus dignissim, pulvinar turpis. Sed finibus porta augue, nec congue nisl congue id. Ut aliquam massa eu viverra ullamcorper. In et hendrerit nisl, quis pellentesque diam."
        }

    }
    const nombre = document.getElementById('nombre');
    const infoOne = document.getElementById('info-one');
    const infoTwo = document.getElementById('info-two');

    if (type === 1){
        nombre.innerHTML=oc_data.oc_1.nombre;
        infoOne.innerHTML=oc_data.oc_1.infoOne;
        infoTwo.innerHTML=oc_data.oc_1.infoTwo;

    }
    else if (type === 2){
        nombre.innerHTML=oc_data.oc_2.nombre;
        infoOne.innerHTML=oc_data.oc_2.infoOne;
        infoTwo.innerHTML=oc_data.oc_2.infoTwo;

    }
    else if (type === 3){
        nombre.innerHTML=oc_data.oc_3.nombre;
        infoOne.innerHTML=oc_data.oc_3.infoOne;
        infoTwo.innerHTML=oc_data.oc_3.infoTwo;

    }
    else if (type === 4){
        nombre.innerHTML=oc_data.oc_4.nombre;
        infoOne.innerHTML=oc_data.oc_4.infoOne;
        infoTwo.innerHTML=oc_data.oc_4.infoTwo;

    }
    else if (type === 5){
        nombre.innerHTML=oc_data.oc_5.nombre;
        infoOne.innerHTML=oc_data.oc_5.infoOne;
        infoTwo.innerHTML=oc_data.oc_5.infoTwo;

    }
    else if (type === 6){
        nombre.innerHTML=oc_data.oc_6.nombre;
        infoOne.innerHTML=oc_data.oc_6.infoOne;
        infoTwo.innerHTML=oc_data.oc_6.infoTwo;

    }
    else if (type === 7){
        nombre.innerHTML=oc_data.oc_7.nombre;
        infoOne.innerHTML=oc_data.oc_7.infoOne;
        infoTwo.innerHTML=oc_data.oc_7.infoTwo;

    }
    else if (type === 8){
        nombre.innerHTML=oc_data.oc_8.nombre;
        infoOne.innerHTML=oc_data.oc_8.infoOne;
        infoTwo.innerHTML=oc_data.oc_8.infoTwo;

    }
    else if (type === 9){
        nombre.innerHTML=oc_data.oc_9.nombre;
        infoOne.innerHTML=oc_data.oc_9.infoOne;
        infoTwo.innerHTML=oc_data.oc_9.infoTwo;

    }
    else if (type === 10){
        nombre.innerHTML=oc_data.oc_10.nombre;
        infoOne.innerHTML=oc_data.oc_10.infoOne;
        infoTwo.innerHTML=oc_data.oc_10.infoTwo;

    }
    else if (type === 11){
        nombre.innerHTML=oc_data.oc_11.nombre;
        infoOne.innerHTML=oc_data.oc_11.infoOne;
        infoTwo.innerHTML=oc_data.oc_11.infoTwo;

    }
    else if (type === 12){
        nombre.innerHTML=oc_data.oc_12.nombre;
        infoOne.innerHTML=oc_data.oc_12.infoOne;
        infoTwo.innerHTML=oc_data.oc_12.infoTwo;

    }

}
