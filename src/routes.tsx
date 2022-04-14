import { Landing } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
