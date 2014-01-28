document.body.className = "";

var translations = [
    ["tr-email", "courriel"],
    ["aboutme",
        "Québécois. Étudiant en informatique. Passionné du logiciel libre." +
        " Mes objectifs sont simples : je vise à m'enrichir et je vis pour l'innovation." +
        " La curiosité et la créativité me propulsent à travers mon existence."]
];

function selectEnglish() {
    languageSelected();
}

function selectFrench() {
    translations.forEach(function (tr) {
        var elems = Array.prototype.slice.call(
                document.getElementsByClassName(tr[0]));

        elems.forEach(function (elem) {
            elem.innerHTML = tr[1];
        });
    });
    languageSelected();
}

function languageSelected() {
    document.getElementById("container")
            .className += "clicked";
    document.getElementById("lang_en")
            .removeEventListener("click", selectEnglish);
    document.getElementById("lang_fr")
            .removeEventListener("click", selectFrench);
}

document.getElementById("lang_en")
        .addEventListener("click", selectEnglish);
document.getElementById("lang_fr")
        .addEventListener("click", selectFrench);
