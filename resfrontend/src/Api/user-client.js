import axios from 'axios';
export const UserClient = { 
    async signup(obj){
        const URL = process.env.REACT_APP_USERSIGNUP;
        const response = await axios.post(URL, obj);
        return response.data.message;
    },
    async login(obj){
        const URL = process.env.REACT_APP_USERLOGIN;
        const response = await axios.post(URL, obj);
        console.log(response.data);
        return response.data;
    }
}
export default UserClient;