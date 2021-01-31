import setDrink from './setDrink.js'
import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'

const presentDrinks = async (URL) => {
    //fetch drinks
    const data = await fetchDrinks(URL);

    //display drinks
    const section = await displayDrinks(data);
    if(section){
        setDrink(section);
    }
}

export default presentDrinks;