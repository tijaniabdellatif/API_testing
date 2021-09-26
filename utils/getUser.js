const getUser = async () => {
   const endpoint = 'https://randomuser.me/api/';

//    await fetch(endpoint).then((response) => {

//        console.log(response);

//    }).catch((error) => {

//     console.log(error);
//    });


// xmlhttprequest , new Promise(), axios(bibliotheque externe), Jquery AJAX  
const response = await fetch(endpoint);
//json { info : , results : }
const data = await response.json();
const person = data.results[0];
console.log(person);
//person.cell  //cell //large
 const {cell,email} = person;
 const {large:image} = person.picture;
 const {password} = person.login;
 const {title,first,last} = person.name;
 //nested desctuction 
 const {dob:{age}} = person;

const {street : {number,name},city} = person.location;

return {
    cell,
    email,
    image,
    age,
    password,
    fullname : `${title} . ${first} ${last}`,
    personLocation : `${number} ${name} -- ${city}`
    
};



}


export default getUser;

