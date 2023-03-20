let foof = document.getElementByID("foo");
let bark = document.getElementByID("bar");
let foofBark = document.getElementByID("fooBar");
let main = document.querySelector("main");

function foofie(main) {
    document.createElement("h3")
    main.innerHTML = "Foo";
    document.body.appendChild(h3);
}

function barks(main) {
    document.createElement("h3")
    main.innerHTML = "Bar";
    document.body.appendChild(h3);
}

foofBark.onclick = function foofieBarks(main) {
    document.createElement("h3")
    main.innerHTML = "FooBar";
    document.body.appendChild(h3);
}