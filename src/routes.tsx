import App from 'App';
import { Landing } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RoutesApp = () => {
  return (
    /*
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='financial-manager' element={<Landing />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
    */

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='financial-manager' element={<Landing />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
