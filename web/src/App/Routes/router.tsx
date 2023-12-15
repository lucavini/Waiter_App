import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@Pages/Home';

import { Wrapper } from './styles';

function Router() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default Router;
