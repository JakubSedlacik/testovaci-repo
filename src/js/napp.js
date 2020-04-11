function testEslint() {
    console.log(` Pan Hop je ${g}, ale za 3 vteřiny už nebude :)`);

    setTimeout(() => {
        g = 'už nejsem Hula';
        h = 1;
        testEslint2();
    }, 3000);
}

function testEslint2() {
    if (h === 1) {
        console.log(`Pan Hop říká: ${g}, ale za chvilku zase budu!`);

        setTimeout(() => {
            g = 'Pan Hop říka: Zase jsem huuuuu, huuuuu, HulaHop.';
            console.log(g);
            setTimeout (() => {
                clear();
            }, 3000);
        }, 3000);
    }
}

function clear () {
    console.clear();
}

let g = "Hula"
let h = 0

testEslint()
