import  { getElement }  from "./utils/getElement";

import {

    displayUser,
     getUser

} from './utils/index';

const btnRandom = getElement('.btn');


const showUser = async () => {

    const person = await getUser();
    displayUser(person);
    

}


window.addEventListener('DOMContentLoaded', showUser)
btnRandom.addEventListener('click', showUser);