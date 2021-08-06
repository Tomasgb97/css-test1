

if(window.screen.availWidth <= 480){

    const whenOpen = () => {

        const menudisplay = document.createElement('div');
menudisplay.classList.add('menudisplay');
menudisplay.setAttribute('id', 'menu')

navbar.appendChild(menudisplay)

const divDelista = document.createElement('div');
divDelista.classList.add('menuList');

const array = ['Home', 'About', 'Contact', 'Blog', 'Careers']

array.map(element => { const link = document.createElement('a');

link.textContent = `${element}`
link.classList.add('menuLink')
divDelista.appendChild(link)}
)

menudisplay.appendChild(divDelista);

const closeBttn = document.createElement('div');

const closeImg = document.createElement('img');

closeImg.setAttribute('src', './images/icon-close.svg');

closeBttn.classList.add('menuClose');

closeBttn.appendChild(closeImg);

menudisplay.appendChild(closeBttn);

const menubtt = document.getElementById('boton');

menubtt.removeEventListener('click', whenOpen);

closeBttn.addEventListener('click', whenCLose)

    }


whenCLose = () =>{

    document.getElementById('menu').remove();

    document.getElementById('boton').addEventListener('click', whenOpen);

}

const menuBttn = document.getElementById('boton');
const navbar = document.getElementById('navbar')

menuBttn.addEventListener('click', whenOpen)


}