
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import QuizData from './Component/QuizData/QuizData';
import Statistics from './Component/Statistics/Statistics';
import Error from './Component/Error/Error';


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
          path: '/Statistics',
          element: <Statistics></Statistics>
        },

        {
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: 'quizData/:quizDataId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizDataId}`)
          },
          element: <QuizData></QuizData>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
