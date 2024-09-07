import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Errorpage, Homepage, LandingLayout, Landingpage } from './pages';

const router = createBrowserRouter([
  {
    path: '/name/:name',
    element: <Homepage />,
  },
  {
    path: 'landingpage',
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
    ],
  },
  {
    errorElement: <Errorpage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
