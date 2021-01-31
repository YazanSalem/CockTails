import{showLoading} from './toggleLoading.js'

const fetchDrinks = async(URL) =>{
    showLoading();
    try{
        const response = await fetch(URL)
        const data = await response.json();
        return data;
    } catch (error){
        console.log(error);
    }
}

export default fetchDrinks;