import { Link } from 'react-router-dom';
import './styles/global.css';

function App() {
  return (
    <div>
      <h1>App!</h1>

      <Link to='/landing'>
        <button>Landing</button>
      </Link>
    </div>
  );
}

export default App;
