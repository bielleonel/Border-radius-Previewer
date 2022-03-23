const square = document.querySelector('#square');
let A = Math.floor(Math.random() * 100),
    B = Math.floor(Math.random() * 100),
    C = Math.floor(Math.random() * 100),
    D = Math.floor(Math.random() * 100),
    E = Math.floor(Math.random() * 100),
    F = Math.floor(Math.random() * 100),
    G = Math.floor(Math.random() * 100),
    H = Math.floor(Math.random() * 100);
textArea = document.querySelector('textarea');
let c = 0;
const lista = document.querySelectorAll('div.inputs');

lista.forEach(element => {
    // Input range
    element.children[0].addEventListener('input', (event) => {

        // send the new value to range input
        element.children[1].value = event.target.value;


        changeBorderRadius(event.target.id, element.children[1].value)
    })

    // Input number
    element.children[1].addEventListener('change', (event) => {

        // send the new value to number input
        element.children[0].value = event.target.value;

        changeBorderRadius(event.target.id, element.children[0].value)


    })

    switch (c) {
        case 0:
            element.children[1].value = element.children[0].value = A;
            break;
        case 1:
            element.children[1].value = element.children[0].value = B;
            break;
        case 2:
            element.children[1].value = element.children[0].value = C;
            break;
        case 3:
            element.children[1].value = element.children[0].value = D;
            break;
        case 4:
            element.children[1].value = element.children[0].value = E;
            break;
        case 5:
            element.children[1].value = element.children[0].value = F;
            break;
        case 6:
            element.children[1].value = element.children[0].value = G;
            break;
        case 7:
            element.children[1].value = element.children[0].value = H;
            break;

        default:
            break;

    }

    c++;
});

function changeBorderRadius(letter, value) {
    switch (letter) {
        case 'A':
            A = value;
            break;
        case 'B':
            B = value;
            break;
        case 'C':
            C = value;
            break;
        case 'D':
            D = value;
            break;
        case 'F':
            F = value;
            break;
        case 'E':
            E = value;
            break;
        case 'G':
            G = value;
            break;
        case 'H':
            H = value;
            break;


        default:
            break;
    }


    // console.log(`here: ${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%`)

    square.style.borderRadius = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%`;


    textArea.value =
        `
        border-radius = ${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%;
`
}

function CopyText() {

    navigator.clipboard.writeText(`border-radius = ${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%;`);

    /* Alert the copied text */
    alert("Copied");
}

changeBorderRadius('init', 0)