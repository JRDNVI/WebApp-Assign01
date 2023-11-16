import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const signUp = (email, password) => {
const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully signed up
      const user = userCredential.user;
      console.log(user)
      return user;
    })
    .catch((error) => {
      // Handle sign-up error
      throw error;
    });
};

const signIn = (email, password) => {
const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      // Handle sign-in error
      throw error;
    });
};

export { signUp, signIn };