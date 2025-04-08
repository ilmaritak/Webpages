        let lastScrollTop = 0;
        const navbar = document.getElementById("myTopnav");

        // Hide/show navbar on scroll
        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling Down - Hide Navbar
                navbar.classList.add("hide-navbar");
            } else {
                // Scrolling Up - Show Navbar
                navbar.classList.remove("hide-navbar");
            }
            lastScrollTop = scrollTop;
        });

        // Function to toggle the hamburger menu
        function toggleMenu() {
            var navMenu = document.getElementById("myTopnav");
            var content = document.querySelectorAll(".tab-content");

            navMenu.classList.toggle("responsive");

            // Adjust padding when menu is open/closed
            if (navMenu.classList.contains("responsive")) {
                content.forEach(tab => tab.style.paddingTop = "20px");
            } else {
                content.forEach(tab => tab.style.paddingTop = "80px"); // Same as navbar height
            }

            if (navMenu.classList.contains("responsive")) {
                content.forEach(tab => tab.style.paddingTop = "80px"); // Same as navbar height
            } else {
                content.forEach(tab => tab.style.paddingTop = "20px");
            }
        }

        // Function to open a specific tab
        function openTab(tabName, event) {
            var i, tabContent, navLinks;

            // Hide all tab contents
            tabContent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = "none";
            }

            // Remove active class from all navbar links
            navLinks = document.querySelectorAll(".topnav a");
            navLinks.forEach(link => link.classList.remove("active"));

            // Show the selected tab and mark the corresponding nav link as active
            document.getElementById(tabName).style.display = "block";
            if (event) {
                event.currentTarget.classList.add("active");
            }

            // Update the current tab text
            document.getElementById("currentTab").textContent = document.querySelector(".topnav a.active").textContent;

            // Close the mobile menu if it's open
            var navMenu = document.getElementById("myTopnav");
            if (navMenu.classList.contains("responsive")) {
                navMenu.classList.remove("responsive");
            }
        }

        // Ensure the first tab is visible on load
        document.addEventListener("DOMContentLoaded", function() {
            openTab('home', { currentTarget: document.querySelector(".topnav a.active") });
        });