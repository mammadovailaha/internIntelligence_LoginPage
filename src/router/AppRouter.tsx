import type { FC } from 'react';
import { Route,  Routes } from 'react-router-dom';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

const AppRouter: FC = () => {
  return (

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/auth/login" element={<SignIn />} />
      </Routes>

  )
}

export default AppRouter

