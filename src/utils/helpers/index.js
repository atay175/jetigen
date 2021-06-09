export function clickToAboutCompanyBlock() {
    let element = document.getElementById("aboutCompany");
    window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
}

export function clickToContcatsBlock() {
    let element = document.getElementById('contacts');
    window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
}

export function clickToCompanyProjectsBlock() {
    let element = document.getElementById('projects');
    window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
}

export function clickToCompanyObjectsBlock() {
    let element = document.getElementById('objects');
    window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
}
