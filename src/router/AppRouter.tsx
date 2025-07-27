import type { FC } from 'react';
import { Route,  Routes } from 'react-router-dom';
import SignUp from '../pages/Auth/SignUp';

const AppRouter: FC = () => {
  return (

      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>

  )
}

export default AppRouter

