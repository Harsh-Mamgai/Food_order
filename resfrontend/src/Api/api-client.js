import axios from 'axios';
export const ApiClient = { 
    async read(){
        const URL = process.env.REACT_APP_ALLITEMS;
        const response = await axios.get(URL);
        return response.data.message;
    },
    async readAppetizers(config){
        const URL = process.env.REACT_APP_ALLAPPETIZERS;
        const response = await axios.get(URL, config);
        return response.data.message;
    },
    async readMainCourse(config){
        const URL = process.env.REACT_APP_ALLMAINCOURSE;
        const response = await axios.get(URL, config);
        return response.data.message;
    },
    async readDeserts(config){
        const URL = process.env.REACT_APP_ALLDESERTS;
        const response = await axios.get(URL, config);
        return response.data.message;
    },
    async readDrinks(config){
        const URL = process.env.REACT_APP_ALLDRINKS;
        const response = await axios.get(URL, config);
        return response.data.message
    },
}
export default ApiClient;