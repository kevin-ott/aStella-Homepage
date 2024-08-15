var showMore = false;


function toggleShowMore(btn) {
    const hiddenElements = document.querySelectorAll(".hidden-item");
    var menuWrapper = document.getElementById("menu");
    hiddenElements.forEach(it => {
        it.classList.toggle("hidden")
    })
    btn.classList.toggle("hidden")
    menuWrapper.style.marginBottom = showMore ? "0" : "4rem";
    showMore = !showMore
}