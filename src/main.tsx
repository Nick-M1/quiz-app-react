import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./layout/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>} errorElement={<ErrorPage/>}>
            <Route index lazy={() => import("./routes/HomePageRoute")} />
            <Route path='/create-account' lazy={() => import("./routes/CreateAccountRoute")} />
            <Route path='/quiz/:quizType' lazy={() => import("./routes/MultipleChoiceQuizRoute")} />
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
