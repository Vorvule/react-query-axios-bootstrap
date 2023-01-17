import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Users from './components/Users';

function App() {
  return (
    <div className="container mt-5">
      <h2>React Query Fetch State Management Example</h2>
      <Users />
    </div>
  );
}

export default App;

