import {LOCALSTORAGE_USER} from "../constants/localstorage-constants";
import React from "react";
import {useNavigate} from "react-router-dom";
import {createUser} from "../logic/user";


export function Component() {
    const navigate = useNavigate()

    function createUserFromHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const username: string | null = e.currentTarget.username.value

        if (username === null || username == '')
            return

        createUser(username)
        navigate('/')
    }

    return (
        <form onSubmit={createUserFromHandler} className='pt-16 mx-auto max-w-md'>
            <label htmlFor='username' className='font-bold font-quicksand-bold text-xl'>Enter Your Username:</label>
            <input id='username' name='username' type='text' placeholder='Username...' className='input-primary-valid mb-6'/>
            <button type='submit' className='w-full button-purple'>SUBMIT</button>
        </form>
    )
}