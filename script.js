const worldBtn = document.getElementById("world");
const ownersBtn = document.getElementById("owners");
const charsBtn = document.getElementById("chars");
const homeBtn = document.getElementById("home");
const backBtn = document.getElementById("back");
const forwBtn = document.getElementById("forward");

function getCurrentMain() {
    if (!mainUno.classList.contains('hidden')) return mainUno;
    if (!mainDos.classList.contains('hidden')) return mainDos;
    return mainTres;
}



worldBtn.addEventListener("click", () => {
    if (!mainUno.classList.contains('hidden')) return;
    showMain(mainUno)
    
});
ownersBtn.addEventListener("click", () => {
    if (!mainUno.classList.contains('hidden')) return;
    showMain(mainUno)
    
});
charsBtn.addEventListener("click", () => {
    if (!mainUno.classList.contains('hidden')) return;
    showMain(mainUno)
    
});
forwBtn.addEventListener("click", () => {
    if (!mainUno.classList.contains('hidden')) return;
    

    showMain(mainTres)
    
});
homeBtn.addEventListener("click", () => {
    if (!mainUno.classList.contains('hidden')) return;
    showMain(mainUno)
    
});


backBtn.addEventListener("click", () => {

    if (!mainDos.classList.contains("hidden")) {
        showMain(mainUno)
        return;
    }

    if (!mainTres.classList.contains("hidden")) {
        showMain(mainDos)
        char(15)
        return;
    }
    if (!mainCuatro.classList.contains("hidden")) {
        showMain(mainDos)
        return;
    }
    if (!mainCinco.classList.contains("hidden")) {
        showMain(mainUno)
        return;
    }

    // ya estás en .uno
    if (currentPage !== 3) {
        change(3);
    }
}
);

const mainUno = document.querySelector('.uno');
const mainDos = document.querySelector('.dos');
const mainTres = document.querySelector('.tres');
const mainCuatro = document.querySelector('.cuatro');
const mainCinco = document.querySelector('.cinco');


function showMain(main) {
    mainUno.classList.add('hidden');
    mainDos.classList.add('hidden');
    mainTres.classList.add('hidden');
    mainCuatro.classList.add('hidden');
    mainCinco.classList.add('hidden');

    main.classList.remove('hidden');
}



function createButton(text, action) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.classList.add("button-main");
    btn.addEventListener("click", action);
    return btn;
}



const images = [
    'https://i.pinimg.com/736x/e0/3e/25/e03e2507f14a0fb0e1796c7f0fb38c13.jpg',
    'https://i.pinimg.com/736x/0e/20/d7/0e20d7369933ef42e8e61252096439ae.jpg',
    'https://i.pinimg.com/736x/00/bf/5c/00bf5c945a89f035a14e3f414846723d.jpg',
    'https://i.pinimg.com/736x/95/18/40/951840eb3ebe31937ec83aac59a8cba0.jpg',
    'https://i.pinimg.com/1200x/a4/97/1a/a4971afe2491a8dd233b239110603a04.jpg',
    'https://i.pinimg.com/736x/5d/1e/7d/5d1e7d090afec43294aa3c68dac5d003.jpg',
    'https://i.pinimg.com/736x/8c/11/e6/8c11e653c03d1745627352b30eb5a82f.jpg',
    'https://i.pinimg.com/736x/6b/38/b3/6b38b30259d1d0f83b3e94c544a061e7.jpg',
    'https://i.pinimg.com/1200x/c9/fd/16/c9fd16c09a57bea912bccf77e31f4e34.jpg',
    'https://i.pinimg.com/736x/15/b2/0f/15b20f6c1d0f28963649421aa8cbb191.jpg',
    'https://i.pinimg.com/736x/0a/71/b5/0a71b576c2acc17fbb3cd3bd9357e955.jpg',
    'https://i.pinimg.com/736x/56/94/53/569453b41b3c1f9f9e3854bc5bb0c1c2.jpg',
    'https://i.pinimg.com/1200x/eb/65/03/eb6503210ebaee2d4ae3eae011f3b327.jpg',
    'https://i.pinimg.com/736x/ce/37/5c/ce375c299391496368a8048caaaed597.jpg',
    'https://i.pinimg.com/736x/47/f0/69/47f069d385cc4beeadcb7e6dd4d87121.jpg'
];

document.querySelectorAll('.gallery div').forEach((div, i) => {
    div.style.backgroundImage = `url('${images[i]}')`;
    div.addEventListener('click', () => {
            char(i);
        });
});


const pages = {
  0: {
    img: 'https://i.pinimg.com/736x/0e/3b/94/0e3b94e1ce33ca1dcdf871eeb1474f11.jpg',
    title: 'aaa',
    content: "In a multicellular organism's immune system..."
  },
  1: {
    img: 'https://i.pinimg.com/736x/24/2c/2b/242c2ba2895cdb0be8eac561e468323d.jpg',
    title: 'bbb',
    content: 'Phagocytosis is the process in cell biology...'
  },
  2: {
    img: 'https://i.pinimg.com/736x/49/f9/59/49f959e6f855a6cace2b9a349bd8c41a.jpg',
    title: 'ccc',
    content: 'It is a type of endocytosis...'
  },
  3: {
    img: 'https://i.pinimg.com/736x/91/fb/1a/91fb1a368319c56eb90754730e81c34c.jpg',
    title: 'ddd',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae, alias aliquid possimus natus tempore necessitatibus assumenda maxime incidunt debitis, accusamus expedita doloremque aspernatur nisi reiciendis dolorum vel voluptas sint.'
  },
  4: {
    big: 'https://media.discordapp.net/attachments/1300454898403643464/1516461026756001873/image.png?ex=6a3e9763&is=6a3d45e3&hm=42afe564c236c7ab9a1a37649f2189db18c2d6ac19c3aa7945bff9b560655bc2&=&format=webp&quality=lossless&width=573&height=810',
    title:'TILL DEATHLY LOVE',
    icon: 'https://media.discordapp.net/attachments/1300438987101438100/1514936285536587786/8824f17be9f0d1ba846438fdb85228b1.png?ex=6a3e515c&is=6a3cffdc&hm=b7bea3ee5bdd0d9816358c2a21d89d453f5f9aa5edc9c6634358569de907ab1a&=&format=webp&quality=lossless&width=810&height=810',
    icontext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat tincidunt felis vel imperdiet. Aenean ut congue enim, at mollis elit. Praesent eleifend mattis ullamcorper. Integer ornare metus nisi, tempor mattis arcu lobortis a. Proin tincidunt turpis nisi. Vestibulum nec ligula purus. Nulla ex ligula, fermentum in imperdiet eget, imperdiet ac mauris. Vivamus efficitur, justo a commodo fermentum, justo ligula efficitur lectus, eu dignissim magna neque a neque. Integer pulvinar mollis dictum. Nunc tristique est et tincidunt vulputate. Morbi risus elit, auctor quis consectetur at, rhoncus sed ex. Sed condimentum imperdiet odio, ac venenatis lorem malesuada vitae. Nullam porttitor mi id ligula bibendum condimentum. Curabitur libero tellus, lacinia quis neque porta, mattis tempus metus. Fusce quis rutrum nunc. Fusce ultrices posuere ex, id ullamcorper augue facilisis id.',
    text: 'Duis non mollis tortor, at viverra magna. Sed imperdiet vel leo interdum efficitur. Proin laoreet scelerisque dolor ut fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie sed libero eget sollicitudin. Phasellus tempus, dolor at euismod finibus, lorem dolor fermentum diam, interdum aliquet libero arcu vitae turpis. Suspendisse potenti. Aliquam cursus faucibus magna in hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec massa ligula, mattis auctor porta a, convallis et odio. Pellentesque laoreet commodo dolor ac fermentum. Aenean et lorem ut lacus finibus varius non sed dolor. In ultrices, ipsum a hendrerit blandit, libero mauris pretium orci, nec semper elit lacus rhoncus felis. Suspendisse sed volutpat libero. Fusce in neque nibh. Donec iaculis justo ligula, vitae bibendum tortor gravida ac.',
    banner: 'https://i.pinimg.com/736x/19/82/3a/19823a875e87a5cf3fa195122f22b815.jpg',
    bannertext: 'Ut id augue quis risus bibendum varius eget in ipsum. Aenean condimentum nibh eu ipsum bibendum, at interdum est placerat. Aliquam ultrices orci id diam ullamcorper pulvinar. Quisque vestibulum ac sem a laoreet. Donec pharetra at magna eu posuere. In iaculis enim nunc, sed dictum lacus lacinia mollis. Vestibulum posuere, dui a commodo gravida, lectus nisl faucibus ipsum, quis vehicula ipsum arcu laoreet arcu. Proin imperdiet augue suscipit ligula fermentum feugiat.',
    sidebanner: 'https://i.pinimg.com/1200x/8f/f1/ce/8ff1ce6f0aac7abcb4697abf34502e0b.jpg',
    sidebannertext: 'Duis non mollis tortor, at viverra magna. Sed imperdiet vel leo interdum efficitur. Proin laoreet scelerisque dolor ut fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie sed libero eget sollicitudin. Phasellus tempus, dolor at euismod finibus, lorem dolor fermentum diam, interdum aliquet libero arcu vitae turpis. Suspendisse potenti. Aliquam cursus faucibus magna in hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec massa ligula, mattis auctor porta a, convallis et odio. Pellentesque laoreet commodo dolor ac fermentum. Aenean et lorem ut lacus finibus varius non sed dolor. In ultrices, ipsum a hendrerit blandit, libero mauris pretium orci, nec semper elit lacus rhoncus felis. Suspendisse sed volutpat libero. Fusce in neque nibh. Donec iaculis justo ligula, vitae bibendum tortor gravida ac.',
    sideiconone: 'https://i.pinimg.com/736x/ce/5d/65/ce5d651df40543c79c035366953a8a92.jpg',
    sideicontwo: 'https://i.pinimg.com/736x/f7/0d/4c/f70d4c93df0c0e573ab1acbd31769767.jpg',
    sideiconstext: 'Duis non mollis tortor, at viverra magna. Sed imperdiet vel leo interdum efficitur. Proin laoreet scelerisque dolor ut fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie sed libero eget sollicitudin. Phasellus tempus, dolor at euismod finibus, lorem dolor fermentum diam, interdum aliquet libero arcu vitae turpis. Suspendisse potenti. Aliquam cursus faucibus magna in hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec massa ligula, mattis auctor porta a, convallis et odio. Pellentesque laoreet commodo dolor ac fermentum. Aenean et lorem ut lacus finibus varius non sed dolor. In ultrices, ipsum a hendrerit blandit, libero mauris pretium orci, nec semper elit lacus rhoncus felis. Suspendisse sed volutpat libero. Fusce in neque nibh. Donec iaculis justo ligula, vitae bibendum tortor gravida ac.',
    bgcolor: "#268585",
    bgcolorart: "#137070"
  },
  5: {
    big: 'https://media.discordapp.net/attachments/1300454898403643464/1508525101836927027/image-Photoroom-103.png?ex=6a3eb97b&is=6a3d67fb&hm=98d3e74e9447dc519ede3ae1fddcdf169ce5a5765aff692228043101755a9e16&=&format=webp&quality=lossless&width=536&height=809',
    title:'ajdkakf lmaomao wiwi',
    icon: 'https://i.pinimg.com/736x/80/a4/b3/80a4b3b0725860703d772d74a558a175.jpg',
    icontext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus, voluptatum corporis, culpa unde animi delectus dignissimos itaque ad laboriosam laborum exercitationem nihil quam distinctio nostrum nisi. Soluta, recusandae unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum consequuntur deleniti, dolorum obcaecati inventore sed dolor animi distinctio nesciunt! Ex optio est ipsam ab vitae porro incidunt eaque mollitia totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quo',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe cum vel placeat in aspernatur dicta repudiandae sunt voluptates rerum blanditiis, eum, hic tempore debitis nihil laboriosam neque ab recusandae.',
    banner: 'https://i.pinimg.com/736x/b6/81/01/b68101b8720c2bab9594597887d63100.jpg',
    bannertext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi expedita magnam sed mollitia quos tenetur ad ducimus, eius ut iure, rerum obcaecati odio dicta ea facilis quam earum dolores?',
    sidebanner: 'https://i.pinimg.com/736x/82/89/b9/8289b92d3367cb3fc0a5b629c78d7fb7.jpg',
    sidebannertext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum fugit quos in quae, voluptatum, qui eligendi fugiat iusto voluptatibus aut ipsam quam? Aspernatur ullam quam necessitatibus maxime aut dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi tempore asperiores, quidem alias, recusandae magnam nemo repudiandae dolorem rem odio! Natus nisi vitae at tempora adipisci et incidunt enim.',
    sideiconone: 'https://i.pinimg.com/736x/49/8e/fe/498efeae17bca93b2b40e5d299bb472f.jpg',
    sideicontwo: 'https://i.pinimg.com/736x/38/54/05/38540516a217851e5047e09ee98bb27d.jpg',
    sideiconstext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolore ut minima sed ad cupiditate, nihil ab voluptatum blanditiis, incidunt in recusandae, eos veniam at. Magni doloribus neque fugiat at. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita exercitationem assumenda officia harum nemo culpa doloribus a sit quas sapiente provident ratione fuga enim, veritatis facere id alias, cupiditate dolore? lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae et eum quibusdam aperiam voluptates, pariatur, vel possimus consequatur eveniet animi quas nam magni, eaque obcaecati molestiae corrupti asperiores nisi.',
    bgcolor: "#585858",
    bgcolorart: "#797979"
  }
};

let currentPage = 3;

function change(type) {
  if (type === currentPage) return;

  const main = mainUno
  main.classList.add("fade");

  setTimeout(() => {
    currentPage = type;

    const page = pages[type];

    document.getElementById('page-image').src = page.img;
    document.getElementById('page-title').textContent = page.title;
    document.getElementById('page-content').textContent = page.content;

    const span = document.getElementById("span");
    span.innerHTML = '';

    

    if (type == 2) {
      span.appendChild(
    createButton("Hello World!", () => showMain(mainDos)));
    }
    else if (type == 0) {
      span.appendChild(
    createButton("Hello World!", () => showMain(mainCinco)));
    }
    else if (type == 4 || type == 5 || type == 6 || type == 7 || type == 8) {
        document.getElementById('cuatro-char').textContent = page.title
        document.getElementById('cuatro-main-img').src = page.big
        document.getElementById('cuatro-icon').src = page.icon
        document.getElementById('cuatro-icon-content').textContent = page.icontext
        document.getElementById('cuatro-text').textContent = page.text
        document.getElementById('cuatro-banner').src = page.banner
        document.getElementById('cuatro-banner-content').textContent = page.bannertext
        document.getElementById('cuatro-side-banner').src = page.sidebanner
        document.getElementById('cuatro-side-banner-content').textContent = page.sidebannertext
        document.getElementById('cuatro-side-icon-one').src = page.sideiconone
        document.getElementById('cuatro-side-icon-two').src = page.sideicontwo
        document.getElementById('cuatro-side-icons-content').textContent = page.sideiconstext
        // edit every article's background color
        const articles = document.querySelectorAll('.cuatro article');
        articles.forEach(article => {
            article.style.backgroundColor = page.bgcolorart;
        });
        document.getElementsByClassName('sectUno')[0].style.backgroundColor = page.bgcolor;
        showMain(mainCuatro)
    
    }

    main.classList.remove("fade");
  }, 300);
}

const characters = {
    0: {
        title:'1',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur blandit nibh, ut dignissim risus iaculis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis pulvinar eros at maximus. Pellentesque non turpis nec orci sagittis suscipit et et purus. Phasellus pharetra dictum faucibus. Aliquam quis lacus lorem. Nunc quis congue magna. Donec interdum in neque sit amet auctor. Nulla elementum vitae sem quis rhoncus. Sed pharetra magna sit amet dictum tincidunt. Pellentesque urna nisl, bibendum eu velit a, luctus tincidunt libero. Cras semper metus non dolor aliquam aliquam. Aliquam cursus mauris urna, at gravida metus tempor sed.In a purus vel nisl faucibus cursus in ac lorem. Maecenas bibendum bibendum mi, eget aliquam felis semper non. Mauris vestibulum augue eget accumsan imperdiet. Integer quis pellentesque nisl, a elementum ex. Duis sit amet nulla sit amet tellus venenatis aliquam. Suspendisse eu mi at purus maximus auctor sodales ut felis. Pellentesque in condimentum mauris, vitae volutpat leo. Sed cursus in dolor sed fermentum. Etiam quis ipsum imperdiet, molestie justo vitae, feugiat purus. Quisque tincidunt tortor felis, vel lobortis massa elementum eu. Vivamus consequat elit tellus, eu hendrerit ipsum pulvinar id. Nam ac posuere leo. Sed venenatis non tellus vel lobortis. Maecenas eu nibh ante.'
    },
    1:{
        title:'2',
        content: 'Mauris risus ipsum, scelerisque interdum ipsum ut, cursus elementum erat. Ut vel nibh quis orci ultrices varius sit amet non velit. Curabitur eu posuere elit. In feugiat, turpis dignissim pellentesque dapibus, tellus mauris bibendum ligula, nec scelerisque nulla purus semper sem. Nam euismod condimentum ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras felis est, finibus at purus tempus, elementum cursus neque. Sed placerat ac ligula eget interdum. Vivamus pellentesque pulvinar condimentum. Cras sed feugiat sem, vel dictum massa. Morbi tincidunt risus ornare dolor tristique porttitor semper et tortor. Sed a commodo lectus, a condimentum felis. Aenean id dolor sed quam auctor scelerisque vitae nec libero. Nullam tempus ex odio, a rutrum mauris auctor quis. Vestibulum varius urna ut sodales efficitur. Nam enim mauris, laoreet nec gravida vitae, tincidunt a magna. Etiam sodales mauris eu nunc hendrerit, nec placerat purus viverra. Curabitur dictum odio id sem aliquam egestas. Nulla efficitur porta mauris. Aliquam luctus tortor tellus, id ornare risus sollicitudin vel. Curabitur viverra accumsan magna eu hendrerit. Etiam quis neque quam. Ut a malesuada neque.'
    },
    2:{
        title:'3',
        content: 'Integer convallis eleifend eros, a mollis dui laoreet facilisis. Morbi congue ipsum mauris, vel ullamcorper est cursus vel. Praesent convallis ultricies tellus, ut scelerisque diam lacinia quis. Sed tempor, augue sit amet eleifend laoreet, magna sem ornare massa, condimentum blandit lectus felis in enim. Mauris pellentesque volutpat lacus, in interdum sapien pellentesque eget. Aenean nunc quam, mattis nec mollis rutrum, egestas nec tortor. Vivamus porta ut turpis posuere sodales. Nam sed libero blandit erat interdum euismod. In egestas odio pulvinar commodo pulvinar. Mauris posuere lacus pulvinar nibh cursus lobortis. Nam lorem velit, interdum nec felis ac, blandit gravida orci. Duis a nibh iaculis, lacinia neque ut, pharetra nulla. Curabitur nec pretium lacus, ornare ornare elit. Nullam eleifend arcu sed nisi dictum elementum. Aenean tempor enim sed mauris mattis, a cursus est ornare. Nullam ullamcorper diam in eros iaculis, et posuere mauris pulvinar. Nam sodales diam dignissim tristique euismod. Ut ullamcorper bibendum lectus, non auctor leo vehicula ut.'
    },
    3:{
        title:'4',
        content: 'Nulla varius risus rhoncus volutpat dignissim. In ultrices vulputate ipsum, ut pellentesque quam hendrerit eu. Vestibulum dapibus imperdiet mauris. Aliquam et arcu commodo, elementum libero eget, luctus dui. In quis vulputate eros. Mauris quis dolor urna. Curabitur in eros porta, suscipit dolor sit amet, convallis sem. Sed purus est, tincidunt sed commodo in, rhoncus dignissim massa. Vestibulum dolor eros, aliquam ac congue at, laoreet accumsan massa. Maecenas lacinia arcu vel purus imperdiet, sollicitudin sagittis nibh viverra. Sed pretium sem lorem, at iaculis libero aliquet quis. Nullam venenatis tellus quis sapien ultrices, nec ullamcorper lorem sagittis. Mauris fringilla tempor risus eget mollis. Donec accumsan eget elit ut consectetur. Pellentesque sodales ex non diam pulvinar, hendrerit tristique nisl efficitur. Cras eget diam justo. Nullam erat lorem, pretium eu suscipit ac, ultricies sit amet sapien. Etiam et lacinia magna, a semper ipsum. Vestibulum rhoncus, dolor nec euismod vulputate, metus neque luctus sem, non euismod dolor justo ac lorem.'
    },
    4:{
        title:'5',
        content: 'Suspendisse tristique est varius lorem sodales tempus. Etiam sagittis nibh in lectus molestie, vel fringilla enim suscipit. Vivamus ullamcorper dolor a nunc fermentum venenatis. Nam commodo dignissim ex eu dictum. Quisque tempor, lectus a fermentum varius, sapien nisl fermentum nunc, nec convallis tellus mauris vel dolor. Nam a sollicitudin ligula. Duis ac elit aliquet, pretium nisi ac, consectetur nisl. Maecenas dictum libero vel lorem vulputate bibendum. Fusce et gravida ante. Etiam elementum sem quis elit accumsan, vehicula cursus libero sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ullamcorper euismod mauris, eget rhoncus nibh tristique ut. Integer pretium nisl lorem, eget laoreet felis interdum nec. Ut accumsan dui quis odio faucibus consectetur. Nullam semper cursus nisl at facilisis. Morbi a ipsum ac elit ullamcorper bibendum. Phasellus venenatis hendrerit diam, sed molestie lorem vulputate a. Suspendisse tempus, magna eu fringilla blandit, justo leo lacinia velit, id venenatis dui nisl ac ipsum. Morbi mollis mi id sollicitudin gravida. Duis lacinia mi in neque volutpat posuere. Proin euismod elit in tellus rutrum, sed tempus urna feugiat. Suspendisse pretium sem ac libero tempor condimentum. In ultricies vel leo sit amet tempus. In ut purus in neque tincidunt mattis. Vestibulum non orci malesuada, ultricies mi a, aliquam felis.'
    },
    5:{
        title:'6',
        content: 'Sed non mi molestie, auctor quam a, porta risus. Sed mollis vehicula dui sit amet volutpat. Proin lobortis sodales ultrices. Morbi vehicula, lorem eu interdum vehicula, tellus augue ultricies enim, in vestibulum purus nibh eu nibh. Aliquam arcu diam, euismod sed pretium non, pellentesque nec odio. Duis suscipit ligula at ante semper, quis finibus risus placerat. Mauris a orci dui. Phasellus id lobortis justo, quis faucibus est. Curabitur urna massa, blandit non tincidunt non, rutrum eget ligula. Praesent venenatis euismod viverra. In sed scelerisque nulla, vel molestie odio. Proin gravida malesuada mi eget finibus. Duis at diam id purus auctor pulvinar quis vitae lectus. Nunc sodales risus sed turpis eleifend, nec euismod ex luctus. Donec vestibulum placerat tellus, eget vehicula risus dignissim vitae. Curabitur lobortis eget ligula at ullamcorper. Suspendisse egestas quis tellus vitae luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor ligula at lobortis dictum. Nulla a enim vitae urna feugiat fermentum vitae vitae erat. Ut gravida mi ligula, id aliquam est posuere tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec odio sapien, mollis in imperdiet quis, aliquam nec tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eget pharetra ligula. Nam nec vulputate purus.'
    },
    6:{
        title:'7',
        content: 'Fusce nec erat purus. Maecenas nec ornare odio. Praesent faucibus leo eros, vel ullamcorper lorem tincidunt ac. Vestibulum nec eleifend augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris semper scelerisque mauris vitae bibendum. Proin id ipsum venenatis, lobortis mauris vel, convallis magna. Aliquam ac quam elit. Nulla vitae pretium magna. Quisque vitae cursus lacus. Vivamus dapibus sit amet urna sit amet gravida. In at maximus purus. Aenean tristique placerat feugiat. Donec vulputate elit metus, eget eleifend purus ullamcorper tempor. In scelerisque orci eros, varius sodales felis semper dapibus. Etiam accumsan consequat laoreet. In in molestie ligula, quis finibus velit. Sed a dolor purus. Nullam viverra, nibh in luctus sollicitudin, est turpis pulvinar nisl, vitae egestas ex tortor in elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum faucibus urna id nibh varius convallis. Praesent metus tellus, blandit non lacus auctor, luctus iaculis ex. Suspendisse et mauris scelerisque, porttitor leo non, pellentesque dolor. Fusce vehicula tellus ac lacus suscipit viverra.'
    },  
    7:{
        title:'8',
        content: 'Nam ullamcorper turpis nulla, quis feugiat dolor pretium ac. Suspendisse massa lorem, feugiat nec maximus ut, aliquet eget nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque eu magna vestibulum, accumsan nulla at, pharetra orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus non ullamcorper eros, sit amet iaculis mi. Cras quis dolor eget justo placerat tincidunt et pharetra odio. Cras urna sapien, molestie accumsan facilisis nec, finibus et elit. Proin at nisi lectus. Phasellus facilisis augue vitae ornare sollicitudin. Nunc ac lectus turpis. Vivamus laoreet convallis lectus ut pretium. Proin feugiat tincidunt nisi, at rhoncus justo ultrices id. Fusce eu urna sit amet eros malesuada lobortis. Donec consectetur massa vitae leo facilisis, quis pellentesque elit eleifend. Proin consequat urna eget nisl pulvinar consequat. Fusce ultrices arcu in rutrum dictum. Vivamus tristique lacus ac nisi luctus, sit amet laoreet nisl auctor. Cras vitae dui vel magna volutpat vehicula id at orci.'
    },
    8:{
        title:'9',
        content: 'Nullam vitae purus venenatis, ultrices odio vel, consequat neque. Praesent nec accumsan mi. Praesent nec hendrerit felis. Nulla eget est sem. Nam a turpis eu sapien feugiat venenatis eu vitae lacus. Suspendisse vel elementum diam, eu varius risus. Proin tristique, elit vitae elementum varius, nulla nunc suscipit leo, id euismod justo odio eu massa. Nullam quis vehicula ex. Vestibulum convallis lectus quis neque auctor finibus. Ut suscipit elementum diam, ac dapibus velit pellentesque quis. Sed et accumsan purus. Integer lacinia sollicitudin metus, non lobortis lorem consectetur id. Pellentesque in libero nibh. Nam facilisis cursus tortor eget mollis. Sed iaculis posuere felis, non imperdiet est egestas luctus. Maecenas vel gravida justo. Maecenas eu pharetra ante, vitae euismod mauris. Duis vulputate nisi eu vehicula dapibus. Vivamus congue maximus dui nec pharetra. Quisque maximus urna eget tellus volutpat convallis. Duis mollis ligula id luctus condimentum. Ut viverra orci ac tortor auctor, a sodales nisl volutpat. Sed consequat erat a dolor interdum bibendum. Fusce ex arcu, sodales non massa a, luctus sollicitudin est.'
    },
    9:{
        title:'10',
        content: 'Suspendisse potenti. Aliquam erat volutpat. Etiam vulputate ullamcorper tortor ac mattis. Duis in neque feugiat, maximus nunc ut, auctor orci. Nulla euismod tempor neque, quis lacinia mauris fermentum vel. In pharetra ex in nulla aliquet, sit amet tincidunt mi efficitur. Integer dignissim lorem eu augue tristique, vel pharetra diam semper. Vestibulum ut tellus mollis, ornare urna in, pretium erat. Curabitur laoreet imperdiet lectus, nec egestas leo volutpat ut. Proin malesuada mauris at neque sagittis, sed faucibus erat imperdiet. Nullam euismod metus nec magna vehicula, ut lacinia dui faucibus. Quisque sagittis mi urna, vitae consequat nibh ultricies vel. Aliquam fringilla neque eu sapien imperdiet, vitae finibus arcu dictum. Donec eleifend nec nibh ut aliquam. Duis sed dolor sit amet lorem cursus mollis in euismod ligula. Sed porttitor fringilla sapien, ut faucibus tortor sodales sed. Duis varius fringilla felis, nec scelerisque purus efficitur et. Sed mattis risus eget tellus placerat, et tempus turpis imperdiet. Curabitur cursus non enim nec faucibus. Duis euismod eleifend nulla id maximus. Vivamus blandit ex ut purus egestas aliquet. Vivamus egestas nibh id libero ullamcorper porta. Vivamus id malesuada metus, et sollicitudin risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    10:{
        title:'11',
        content: 'Cras sollicitudin nisl iaculis est commodo fringilla. Nulla diam tortor, malesuada volutpat ante et, mattis interdum nulla. Curabitur luctus ullamcorper dui at ultrices. Pellentesque pulvinar cursus mauris, congue porttitor nibh fringilla a. Quisque cursus eu massa varius tincidunt. Proin sollicitudin feugiat ligula, id pretium nunc. Mauris ac nunc quam. Nunc mi mi, elementum in mauris quis, eleifend mollis turpis. Praesent volutpat nisl non fermentum aliquam. Suspendisse ac justo vehicula, aliquet ipsum a, eleifend est. Nulla sed fermentum urna. Vivamus risus lacus, fringilla vel nibh sit amet, fermentum pretium enim. Fusce non tempor lectus, et gravida lacus. Praesent tincidunt accumsan ante, eu cursus arcu blandit in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sed condimentum leo, eu sagittis risus. Vivamus semper nulla at quam sodales sagittis. Aenean mattis est nec fringilla tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi facilisis ex eu bibendum dictum. Morbi sapien arcu, tincidunt vel urna vel, pharetra fringilla tortor. Sed a tristique urna. Sed consequat sollicitudin arcu, a feugiat felis condimentum non. Etiam neque libero, venenatis et varius ut, gravida vel turpis. Pellentesque nec turpis aliquam, volutpat eros bibendum, rutrum mi.'
    },
    11:{
        title:'12',
        content: 'In nec arcu tempus, congue nisl non, ornare felis. Nulla viverra pharetra aliquam. Curabitur sed lorem malesuada, blandit diam eget, consectetur mauris. Mauris id risus tincidunt, venenatis nibh in, maximus urna. Suspendisse efficitur commodo semper. Duis id viverra nunc. Aenean dignissim, eros in rhoncus congue, neque lacus rhoncus nibh, quis pharetra libero turpis vel velit. Donec at velit a lectus condimentum vulputate. Aliquam erat volutpat. Mauris vel nibh eu magna auctor scelerisque non in leo. Donec id ante tortor. Maecenas ut erat tellus. Nullam semper consequat iaculis. Suspendisse dapibus rutrum nunc, vitae maximus eros ultricies vitae. Sed massa nulla, placerat eleifend consequat in, mattis ac libero. Pellentesque sit amet ultrices libero, quis vulputate leo. Ut pellentesque dui eu magna cursus, sed lobortis justo molestie. Nam eu pharetra ante. Cras eu rutrum eros, non porta mi. Cras sit amet lectus enim. Proin mollis, orci pharetra pulvinar faucibus, nibh ipsum semper nisl, at vulputate odio lacus vitae sem.'
    },
    12:{
        title:'13',
        content: 'Donec accumsan non massa sit amet sagittis. Aliquam lobortis, lacus ac tempus porttitor, mi lectus dignissim velit, vitae volutpat ante orci sed sapien. Sed accumsan, nibh quis faucibus accumsan, nunc dui pharetra sapien, quis pulvinar neque justo eget arcu. Nunc suscipit augue non velit elementum, non vehicula lacus elementum. Aliquam dictum consectetur tellus, ac hendrerit sapien pulvinar ac. Aliquam fermentum commodo sapien vel mollis. Sed in enim non ipsum sollicitudin sollicitudin. Sed placerat vel arcu non accumsan. Cras pellentesque egestas lorem at convallis. Duis suscipit, odio vitae volutpat malesuada, lectus tellus sollicitudin eros, id luctus tellus urna in libero. Ut a semper mi. Fusce vestibulum nulla in ipsum porta suscipit a vitae augue. Etiam aliquam dolor sed sapien vehicula, non auctor sapien consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec dictum risus, et varius odio. Proin auctor et augue rutrum varius. Nullam nec diam id sem pellentesque scelerisque. Aenean at mauris sit amet libero vulputate efficitur. Nullam sed diam placerat, dictum dui at, vulputate ipsum. Donec gravida enim ac ipsum congue vehicula. In bibendum, eros ac facilisis aliquet, augue sapien feugiat nulla, et semper leo velit id erat. Fusce at pellentesque arcu. Proin commodo sapien enim, vel vulputate tortor posuere nec. Ut interdum dolor non elit dapibus, id ornare metus tempus. Donec at maximus urna, porta commodo tortor. Nunc congue sagittis lorem, id fringilla purus placerat eleifend. Maecenas mattis urna ut turpis ullamcorper, vulputate lacinia neque fermentum. Quisque imperdiet sem sit amet augue hendrerit maximus. Suspendisse sed blandit erat.'

    },
    13:{
        title:'14',
        content: 'Nulla pulvinar imperdiet orci vel malesuada. Nunc posuere tincidunt sem in mattis. Vivamus commodo dapibus mi nec elementum. Fusce nec dui vel neque tincidunt hendrerit. Ut nec imperdiet ipsum. Donec sodales convallis dolor. Donec eget gravida enim. Curabitur vel ipsum metus. Fusce sodales blandit massa, quis consectetur urna imperdiet sit amet. Nulla facilisi. Quisque quis mi in nisl sagittis blandit ut vitae purus. Mauris ac massa gravida, placerat sem commodo, iaculis leo. Nunc viverra purus dapibus tortor faucibus, eget elementum mi consequat. Phasellus at tortor eget sem faucibus mattis vitae sed ex. In consectetur interdum malesuada. Phasellus finibus sit amet quam ut mollis. Donec sagittis blandit ex, eu sodales diam pulvinar non. Vestibulum pellentesque dolor ut felis convallis, sit amet convallis diam tincidunt. Curabitur sagittis imperdiet diam id tempus. Donec fringilla varius justo, eu tempus ex mollis sed. Quisque ut sodales sapien. Sed tempus mi turpis, id laoreet nisi interdum quis. Praesent sit amet egestas risus. Nullam et purus a lorem cursus malesuada quis vel augue. Vivamus dui ipsum, bibendum et dui ut, commodo auctor odio. Curabitur vulputate eu mauris eget consectetur.'

    },
    14:{
        title:'15',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales erat ut eros interdum, in feugiat eros fringilla. Pellentesque a rhoncus enim, et elementum dui. Etiam nec augue accumsan erat auctor tincidunt. Duis mattis, nisi sit amet elementum tincidunt, nisi massa bibendum ante, accumsan porttitor quam quam id nibh. Curabitur in urna in orci iaculis feugiat. Nulla ac nibh imperdiet, dictum lorem vitae, pharetra orci. Nulla facilisi. Nam malesuada vel diam non tempor. Praesent eleifend tellus id dolor imperdiet sodales. Nulla vel dolor arcu. Pellentesque congue consectetur scelerisque. Nunc lobortis fermentum justo ac consectetur. Proin venenatis justo arcu, in pretium turpis condimentum a. Cras viverra est ac est vestibulum, id condimentum risus egestas.'

    },
    
    15:{
        title:'deaaa',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi provident assumenda, repudiandae iure sequi esse nobis molestias odit sunt debitis voluptatibus natus quidem! Architecto itaque porro corporis illo id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione quis rem atque necessitatibus. Aspernatur, voluptas eligendi tempora, sed repellendus totam impedit nostrum accusamus ipsum nihil ut placeat quisquam natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facilis repudiandae, libero aspernatur odit, officia dolorum fugiat quos, repellendus voluptatem ipsum numquam. Error hic officia repellendus qui. Blanditiis, amet magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quod ratione corporis delectus dolorum cumque facilis illo, voluptas eveniet corrupti adipisci maiores reprehenderit ex quis consequatur debitis eius, iste ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi provident assumenda, repudiandae iure sequi esse nobis molestias odit sunt debitis voluptatibus natus quidem! Architecto itaque porro corporis illo id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione quis rem atque necessitatibus. Aspernatur, voluptas eligendi tempora, sed repellendus totam impedit nostrum accusamus ipsum nihil ut placeat quisquam natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facilis repudiandae, libero aspernatur odit, officia dolorum fugiat quos, repellendus voluptatem ipsum numquam. Error hic officia repellendus qui. Blanditiis, amet magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quod ratione corporis delectus dolorum cumque facilis illo, voluptas eveniet corrupti adipisci maiores reprehenderit ex quis consequatur debitis eius, iste ut.'
    }
}

let currentPageGal = 15;
const originalTitle = document.getElementById('galtitle').textContent;
const originalContent = document.getElementById('galcontent').textContent;

function char(type) {
    if (type === currentPageGal && type !== 15) return;

  const section = document.getElementById('section');
  section.classList.add("fade");

  setTimeout(() => {
    currentPageGal = type;

    const character = characters[type];

    document.getElementById('galtitle').textContent = character.title;
    document.getElementById('galcontent').textContent = character.content;
    
    const galspan = document.getElementById("galspan");
    galspan.innerHTML = '';


    if (currentPageGal !== 15) {
        const btn = document.createElement("button");
        btn.textContent = "x";
        btn.classList.add('gal-button')
        btn.addEventListener("click", () => {
            char(15)
        });
    

      galspan.appendChild(btn);
    }

    section.classList.remove("fade");
  }, 150);
}

