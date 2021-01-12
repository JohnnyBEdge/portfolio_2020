const axios = require('axios');

const { REACT_APP_CW_API_KEY } = process.env;
const user = 'JohnnyBEdge';

export const getCurrentCodewarsStats = async () => {
    try{
        const res = await axios.get(`https://www.codewars.com/api/v1/users/:${user}`,{
            headers: {
                Authorization: REACT_APP_CW_API_KEY
            }
        });
        return res;
    } catch(err){
        console.log("Error:",err);
    }
}



