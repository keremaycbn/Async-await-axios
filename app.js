import axios from "axios";

async function getData (number) {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
            
    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/" + number);
        
    
            
    console.log("users", users);
    console.log("post1", post1);
};
 export default getData;