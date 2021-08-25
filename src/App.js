import React,{useEffect, useState} from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import './App.css';
import Login from './Login'
import fire from './fire'
import Hero from './Hero'

function App() {
  const [user,setUser] = useState('');
  const[email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const[hasAccount,setHasAccount] = useState(false);

  console.log(user);

  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }

  const clearError = ()=>{
    setEmailError('');
    setPasswordError('');
  }

const handleLogin=()=>{
  clearError();
  fire.auth()
  .signInWithEmailAndPassword(email,password)
  .catch((err) => {
    switch (err.code) {
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        setEmailError(err.message);
        break;
      case "auth/wrong-password":
        setPasswordError(err.message)
        break;
    }
  })
}
const handleSignup = () => {
  clearError();
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        setEmailError(err.message);
        break;
        case "auth/weak-password":
        setPasswordError(err.message);
        break;
      }
    });
};

const handleLogout=()=>{
  fire.auth().signOut();
}

const authListener=()=>{
  fire.auth().onAuthStateChanged((user)=>{
     if(user){
       clearInputs();
       setUser(user)
     }else{
       setUser('');
     }
  });
};

useEffect(()=>{
  authListener();
},[])

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          emailError={emailError}
          setEmailError={setEmailError}
          setPasswordError={setPasswordError}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          handleLogout={handleLogout}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
