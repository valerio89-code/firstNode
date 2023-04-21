import { creatUser } from "./users.js";

export function toggleDarkMode() {
    const b = document.getElementsByTagName("body")
    if (b[0].style.color == "white") {
        b[0].style.color = "black";
        b[0].style.backgroundColor = "white";
    } else {
        b[0].style.color = "white";
        b[0].style.backgroundColor = "black";
    }
}

export function getUsers() {
    const result = [];
    result.push(creatUser());
    return result;
}