import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DialerProvider } from './DialerContext';
import './App.css';
import Dialer from './Components/Dialer/Dialer';
import DialedNumber from './Components/DialedNumber/DialedNumber';
import CallLogs from './Components/CallLogs/CallLogs';

function App() {
  return (
    <Router>
      <DialerProvider>
        <div className="App flex items-center justify-center bg-blue-500 h-screen">
          <Routes>
            <Route path="/call-logs" element={<CallLogs />} />
            <Route path="/dialed" element={<DialedNumber />} />
            <Route path="/" element={<Dialer />} />
          </Routes>
        </div>
      </DialerProvider>
    </Router>
  );
}

export default App;