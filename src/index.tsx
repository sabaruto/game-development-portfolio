import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProjectList from './pages/ProjectList';
import Projects from './pages/Projects/Projects';
import ContactInfo from './pages/ContactInfo';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "AboutMe",
                element: <AboutMe />
            },
            {
                path: "ProjectList",
                element: <ProjectList/>,
            },
            {
                path: "ContactInfo",
                element: <ContactInfo />,
            },
            {
                path: "Project/GeneticAlgorithm",
                element: <Projects title="Genetic Algorithm" />
            },
            {
                path: "Project/HikeExplorer",
                element: <Projects title="Hike Explorer" />
            },
            {
                path: "Project/FimbulWinter",
                element: <Projects title="Fimbul Winter" />
            }
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
