let element1 = document.querySelector("#animation1");
let element2 = document.querySelector("#animation2");
let element3 = document.querySelector("#animation3");


const animation1 = () => {
    element1.classList.add("active");
    let width = element1.offsetWidth;
    function frame() {
        if (width === 100) {
            return
        }
        element1.innerHTML = ++width + "%";

    }

    let id = setInterval(frame, 16);

    id()
}
const animation2 = () => {
    element2.classList.add("active");
    let width = element2.offsetWidth;
    function frame() {
        if (width === 100) {
            return
        }
        element2.innerHTML = ++width + "%";

    }

    let id = setInterval(frame, 16);

    id()
}
const animation3 = () => {
    element3.classList.add("active");
    let width = element3.offsetWidth;
    function frame() {
        if (width === 100) {
            return
        }
        element3.innerHTML = ++width + "%";

    }

    let id = setInterval(frame, 16);

    id()
}