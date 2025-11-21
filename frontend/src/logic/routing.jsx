import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AddAnimePage } from '../pages/AddAnimePage';
import { DeleteAnimePage } from '../pages/DeleteAnimePage';
import { EditAnimePage } from '../pages/EditAnimePage';
import { AuthenticationPage } from '../pages/AuthenticationPage';

export { Routing, routes };
const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/add-anime', element: <AddAnimePage /> },
    { path: '/delete-anime', element: <DeleteAnimePage /> },
    { path: '/edit-anime', element: <EditAnimePage /> },
    { path: '/authentication', element: <AuthenticationPage /> },
]


const Routing = () => {
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
};