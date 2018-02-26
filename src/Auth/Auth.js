import { auth } from 'firebase'

export default class Auth {



  login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  logout = () =>
    auth.signOut();

  isAuthenticated(){
    return false
  }

}