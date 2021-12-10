function aparecer(elemento) {

    let bt = document.getElementById(elemento);

    if (bt.style.display == "none") {

        bt.style.display = "block";

    } else {

        bt.style.display = "none";
    }
}