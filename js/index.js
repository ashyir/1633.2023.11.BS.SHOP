function load_page() {
    let navbar_login = document.getElementById("navbar-login");
    let navbar_logout = document.getElementById("navbar-logout");
    let navbar_profile = document.getElementById("navbar-profile");

    if (is_login()) {
        navbar_login.classList.add("d-none");
        navbar_logout.classList.remove("d-none");
        navbar_profile.classList.remove("d-none");
    }
}

function is_login() {
    let email = JSON.parse(sessionStorage.getItem("login_email"));

    return email != null;
}

function logout() {
    sessionStorage.setItem("login_email", null);
    location.reload();
}