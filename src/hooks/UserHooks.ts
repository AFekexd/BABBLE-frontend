//using axios handle user login and logout
import axios from 'axios';

export const loginUser = async (username: string, password: string) => {
 await axios.post('http://localhost:3000/login', { username, password }).then(
    (res) => {
        console.log(res.data);
      //save token to local storage
      localStorage.setItem('token', res.data.token);
      return res.data;
    },
    (err) => {
      console.log(err);
      return err;
    }
  );
}


export const logout = async () => {
    //remove token from local storage
    localStorage.removeItem('token');
    return true;
};


//register user

export const register = async (username: string, password: string) => {
    await axios.post('http://localhost:3000/register', { username, password }).then(
       (res) => {
         //save token to local storage
         localStorage.setItem('token', res.data.token);
         return res.data;
       },
       (err) => {
         console.log(err);
         return err;
       }
     );
   }
