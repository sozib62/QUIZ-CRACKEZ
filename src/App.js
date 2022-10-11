
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Quiz from './Component/Quiz/Quiz';
import Blog from './Component/Blog/Blog';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/Quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: 'Quiz/:QuizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.QuizId}`)
          },
          element: <Quiz></Quiz>
        }
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
