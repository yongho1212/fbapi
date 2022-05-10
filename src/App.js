import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}



function App() {
  return (
    <div className="App">
      
      <FacebookLogin
        appId="921201001964201"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends"
        callback={responseFacebook}
        icon="fa-facebook" />
    </div>
  );
}

export default App;
