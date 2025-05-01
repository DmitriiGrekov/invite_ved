import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Accept from './pages/Accept/Accept';
import Footer from './pages/footer/Footer';
import Home from './pages/Home/Home';
import Invite from './pages/Invite/Invite';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Invite />
      <Accept />
      <Footer />
    </div>
  );
}

export default App;
