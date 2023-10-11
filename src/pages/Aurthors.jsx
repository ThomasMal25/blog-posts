
import  { useEffect, useState } from 'react'
import data from '../assets/data'
function Aurthors() {
    const [aurthors,setAurthors]=useState(data)
  
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

    {aurthors.map((items, index)=> (
        <div>
            
         <p>{items.aurthor}</p>
        </div>

    ))}


    </div>
  )
}

export default Aurthors