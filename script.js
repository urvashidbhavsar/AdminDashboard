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

// toggle menu
function showMenu() {
    let showmenu = document.getElementById("sidebar");
    showmenu.classList.add("sideshow");
}
function closeMenu() {
    let showmenu = document.getElementById("sidebar");
    showmenu.classList.remove("sideshow");
}

// chart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2014', '2016', '2018', '2020', '2022', '2024'],
        datasets: [{
            label: 'Technology Grow',
            data: [0, 50, 80, 100, 150, 166],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var newchart = document.getElementById("myChart1")
new Chart(newchart, {
    type: 'polarArea',
    data: {
        labels: ['2014', '2016', '2018', '2020', '2022', '2024'],
        datasets: [{
            label: 'Technology Grow',
            data: [0, 50, 80, 100, 150, 166],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})