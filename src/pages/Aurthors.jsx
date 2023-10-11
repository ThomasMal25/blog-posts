
import  { useEffect, useState } from 'react'
import data from '../assets/data'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
function Aurthors(props) {
    const [aurthors,setAurthors]=useState(props.data)
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
       <NavBar />
      {
     !seePost ? aurthors.map((items, index)=> (
        <div>
            
         <p>{items.aurthor}</p>
        <button onClick= {()=> setSeePosts(val => !val)}>View aurthor's posts</button>
        </div>
    
    )) : aurthors.map((item) => {
        <div>
         <h1>{items.post}</h1>
        </div>
// only show the post posted from that aurthor
// press on that link to view the full article

    })
     }

<Link to="/posts">See New Posts</Link>


    </div>
  )
}

export default Aurthors