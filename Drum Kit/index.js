var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
    document
        .querySelectorAll("button")
        [i].addEventListener("click", function () {
            this.style.color = "white";
        });
}
