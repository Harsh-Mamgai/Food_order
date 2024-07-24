import axios from 'axios';
export const OrderClient = { 
    async placeOrder(obj, config){
        const URL = process.env.REACT_APP_USERORDER;
        const response = await axios.post(URL, obj, config);
        return response.data.message;
    }
}
export default OrderClient;