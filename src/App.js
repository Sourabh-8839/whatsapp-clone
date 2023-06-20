
import './App.css';
import Messenger from './components/Messenger';

import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';


function App() {

  const clientId='408373415543-b8o7joamnboo0rrd32flsd8sriisohhq.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider 
        clientId={clientId}
    >
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
     

    </GoogleOAuthProvider>
  );
}

export default App;
