import { lazy } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RootContainer from './globals/root';

const Home = lazy(() => import('./pages/home'));

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <RootContainer>
          <Routes>
            <Route path='' Component={Home} />
          </Routes>
        </RootContainer>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
