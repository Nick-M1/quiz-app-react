import {Navigate, Outlet, useLocation} from "react-router-dom";
import {LOGO_IMG} from "../constants/assets-constants";
import {getUser} from "../logic/user";


export default function Layout() {
    const user = getUser()
    const location = useLocation()

    if (user == null && location.pathname !== '/create-account')
        return <Navigate to='create-account'/>

    return (
        <div className='w-screen min-h-screen bg-violet-950 p-2 md:p-6 text-white'>
            <img src={LOGO_IMG} alt='logo' title='Quiz' className='mt-2 mx-auto w-full h-full max-w-[40dvw] max-h-[20dvh]'/>

            <Outlet/>
        </div>
    )
}