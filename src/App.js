import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Signup/Signup.lazy';
import Success from './components/Signup/Success';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email:' ',
    
  });
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          
          <Route path="/" element={<SignUp formData={formData} setFormData={setFormData} />} />
          <Route path="/success" element={<Success name={formData.name} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
