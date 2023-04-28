import {v4 as uuidv4} from "uuid";
import {LOCALSTORAGE_USER} from "../constants/localstorage-constants";

export function createUser(username: string) {
    const user: User = {
        userid: uuidv4(),
        username
    }

    localStorage.setItem(LOCALSTORAGE_USER, JSON.stringify(user))
}

export function getUser() {
    const user = localStorage.getItem(LOCALSTORAGE_USER)

    if (user == null)
        return null

    return JSON.parse(user) as User
}