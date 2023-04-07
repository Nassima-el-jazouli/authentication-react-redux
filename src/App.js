import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Activate from './Components/Activate';
import ResetPassword from './Components/ResetPassword';
import ResetPasswordConfirm from './Components/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './HOCs/Layout';

function App() {
  return (
    <Provider store={store}>
      <Routes>
          <Route element={<Layout />}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/reset-password' element={<ResetPassword />} />
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            <Route exact path='/activate/:uid/:token' element={<Activate />} />
          </Route>
      </Routes>
    </Provider>
  );
}

export default App;
