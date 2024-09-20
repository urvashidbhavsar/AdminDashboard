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
// ===============================================================================================
async function getReport() {
    const startDate = document.getElementById("sdate").value;
    const endDate = document.getElementById("edate").value;

    if (!startDate || !endDate) {
        alert("Please select both start and end dates.");
        return;
    }
    const data = await fetchReportData(startDate, endDate);
    document.getElementById('report').innerHTML = formatReport(data);
}

// Function to simulate fetching data based on the date range
function fetchReportData(startDate, endDate) {
    return new Promise((resolve) => {
        // Simulated data based on the selected date range
        const sampleData = [
            { date: "2024-09-17", event: "Cybersecurity update" },
            { date: "2024-09-20", event: "Cloud computing conference" },
            { date: "2024-09-25", event: "AI technology showcase" },
            { date: "2024-09-30", event: "Front end Development" },
            { date: "2024-10-01", event: "Webside designing" },
            { date: "2024-10-15", event: "UI/UX designing" },
            { date: "2024-10-30", event: "Backend development" },
            { date: "2024-11-01", event: "Data science" },
        ];
        // Filter data between start and end dates
        const filteredData = sampleData.filter(item => item.date >= startDate && item.date <= endDate);

        setTimeout(() => resolve(filteredData), 1000); // Simulating network delay
    });
}
// Function to format and display the report
function formatReport(data) {
    if (data.length === 0) {
        return "<p>No events found for the selected date range.</p>";
    }
    return `
        <h3 class="py-3">Events : </h3>
        <ul class="pt-2 reportData">
            ${data.map(item => `<li>${item.date}: ${item.event}</li>`).join('')}
        </ul>
    `;
}
// =====================================================================================
// Fetch trending frontend repositories (React, Vue, Angular)
async function fetchFrontendTechnologies() {
    const queries = [
        'React',    // React.js repositories
        'Vue',      // Vue.js repositories
        'Angular'   // Angular.js repositories
    ];

    const allRepos = [];

    for (let query of queries) {
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}+language:javascript&sort=stars&order=desc`);
        const data = await response.json();
        allRepos.push(...data.items.slice(0, 5)); // Get top 5 repositories for each framework
    }
    return allRepos;
}

// Display trending frontend repositories
async function displayFrontendTechnologies() {
    const frontendList = document.getElementById('frontend-list');
    const repositories = await fetchFrontendTechnologies();

    frontendList.innerHTML = ''; // Clear previous results

    repositories.forEach(repo => {
        const frontendItem = document.createElement('div');
        frontendItem.className = 'frontend-item';
        frontendItem.innerHTML = `
          <h5><a href="${repo.html_url}" target="_blank">${repo.full_name}</a></h5>
          <p>⭐ Stars: ${repo.stargazers_count}</p>
        `;
        frontendList.appendChild(frontendItem);
    });
}

// Update the list every 60 seconds (live update)
setInterval(displayFrontendTechnologies, 60000);

// Initial load
displayFrontendTechnologies();

// ===================================================================================

async function fetchBackendTechnologies() {
    const queries = [
        'Node',     // Node.js repositories
        'Django',   // Django repositories
        'Flask',    // Flask repositories
        'Express',  // Express.js repositories
        'Ruby+on+Rails' // Ruby on Rails repositories
    ];

    const allRepos = [];

    for (let query of queries) {
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}+language:javascript&sort=stars&order=desc`);
        const data = await response.json();
        allRepos.push(...data.items.slice(0, 5)); // Get top 5 repositories for each framework
    }

    return allRepos;
}

// Display trending backend repositories
async function displayBackendTechnologies() {
    const backendList = document.getElementById('backend-list');
    const repositories = await fetchBackendTechnologies();

    backendList.innerHTML = ''; // Clear previous results

    repositories.forEach(repo => {
        const backendItem = document.createElement('div');
        backendItem.className = 'backend-item';
        backendItem.innerHTML = `
          <h5><a href="${repo.html_url}" target="_blank">${repo.full_name}</a></h5>
          <p>⭐ Stars: ${repo.stargazers_count}</p>
        `;
        backendList.appendChild(backendItem);
    });
}

// Update the list every 60 seconds (live update)
setInterval(displayBackendTechnologies, 60000);

// Initial load
displayBackendTechnologies();