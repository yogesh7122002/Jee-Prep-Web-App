import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Component/Utility/AuthContexProvider';
import { QuestionProvider } from './Component/Utility/QuestionContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AuthProvider>
     <QuestionProvider>
     <App />
     </QuestionProvider>   

    </AuthProvider>
    
);


