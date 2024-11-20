import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Bgcolorchanger from './components/bg-color-changer/Bgcolorchanger';
import Passwordgenerator from './components/password-generator/Passwordgenerator';
import Currency from './components/currency-converter/Currency';
import Users from './components/users/Users';
import Todonotes from './components/context-api/Todonotes';
import TodoNotes from './components/redux-tookit/TodoNotes';
import { Provider } from 'react-redux';
import { store } from './components/redux-tookit/app/store';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App />} >
      <Route path='/' element={<Bgcolorchanger />} />
      <Route path='password-generator' element={<Passwordgenerator />} />
      <Route path='currency-converter' element={<Currency />} />
      <Route path='users/:userText' element={<Users />} />
      <Route path='context-api-todo' element={<Todonotes />} />
      <Route path='redux-toolkit-todo' element={<TodoNotes />} />
    </Route>
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

reportWebVitals();
