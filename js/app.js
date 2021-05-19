/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const allSections = document.querySelectorAll("section");
const navbarid = document.getElementById('navbar__list');
const idFornav = getSectionID();
const dataNav = datanav();

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

function addClassNavStyles() {
    navbarid.classList.add('menu__link');
}

function getSectionID() {
    const listOfId = [];
    for (let i = 0; i < allSections.length; i++) {
        let s = '#section' + (i + 1);
        listOfId.push(s);
    }
    return listOfId;
}

function datanav() {
    const listOfdatanav = [];
    for (let i = 0; i < allSections.length; i++) {
        let datanavsection = allSections[i].getAttribute('data-nav');
        listOfdatanav.push(datanavsection);
    };
    return listOfdatanav;
}



/**
 * End Helper Functions
 * Begin Main Functions
 */


// build the nav function
function creatNavbar() {

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < allSections.length; i++) {
        let link = document.createElement('li');
        let a = document.createElement('a');
        const linkText = document.createTextNode(dataNav[i]);
        a.setAttribute('href', idFornav[i]);
        a.appendChild(linkText);
        link.appendChild(a)
        fragment.appendChild(link);


    }
    navbarid.appendChild(fragment);
    //  add the menu__link class
    addClassNavStyles();

}

// function Add class 'active' to section when near top of viewport

function activeState() {
    window.addEventListener('scroll', () => {
        for (let i = 0; i < allSections.length; i++) {
            rect = allSections[i].getBoundingClientRect();
            // Set sections as active
            if (rect.top >= -50 && rect.top <= 250) {
                allSections[i].classList.add('your-active-class');
                let activeNav = allSections[i].getAttribute('data-nav');
                const allLinks = document.querySelectorAll('li');
                //set link as active
                allLinks.forEach((eachlink) => {
                    if (eachlink.innerText == activeNav) {
                        eachlink.classList.add('active');
                    } else {
                        eachlink.classList.remove('active');
                    }

                })

            } else {
                allSections[i].classList.remove('your-active-class');
            }
        }

    })

}

//  Build Nav menu
creatNavbar();
//  add the active state
activeState();


/**
 * End Main Functions
 * 
 */