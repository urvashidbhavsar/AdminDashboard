let menu = document.querySelectorAll(".dropmenu"),
    show = document.querySelectorAll(".menu"),
    icon = document.querySelectorAll(".icon");
menu.forEach((mymenu, index) => {
    mymenu.addEventListener("click", () => {
        // Close all other menus and reset icons
        show.forEach((myshow, i) => {
            if (i !== index) { // Only close if it's not the currently clicked menu
                myshow.classList.remove("show");
                icon[i].classList.remove("rotate");
            }
        });

        // Toggle the 'show' class on the corresponding menu
        show[index].classList.toggle("show");

        // Rotate the corresponding icon
        if (show[index].classList.contains("show")) {
            icon[index].classList.add("rotate");
        } else {
            icon[index].classList.remove("rotate");
        }
    });
});