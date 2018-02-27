import fire from '../fire'

export default class Auth {
  constructor(isAuthenticated){
    this.isAuthenticated = isAuthenticated
    this.auth = fire.auth()
  }


  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logout = () =>
    this.auth.signOut();

}