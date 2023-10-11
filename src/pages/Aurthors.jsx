
import  { useEffect, useState } from 'react'
import data from '../assets/data'
function Aurthors() {
    const [aurthors,setAurthors]=useState(data)
    const [seePost,setSeePosts]=useState(false)
  
    useEffect(() => {
      const filterAuthors = () => {
        const filteredArr = aurthors.filter((author, index) => {
          return aurthors.findIndex((a) => a.aurthor === author.aurthor) === index;
        });
  
        setAurthors(filteredArr);
      };
  
      filterAuthors();
    }, []);

  return (
    <div>Aurthors
      {
     !seePost ? aurthors.map((items, index)=> (
        <div>
            
         <p>{items.aurthor}</p>
        <button onClick= {()=> setSeePosts(val => !val)}>View aurthor's posts</button>
        </div>
    
    )) : ""
     }

    </div>
  )
}

export default Aurthors