import React, { useState } from 'react'
import data from '../assets/data'

function Posts() {
    const [post,setPost]=useState(data)
    const [isLiked,setIsLikes]=useState(false)

    const handleLikeClick = (index) => {
        const updatePost = [...post];
        if(!isLiked){
        updatePost[index].likes += 1;
        setIsLikes(val => !val)
    }else{
         updatePost[index].likes -= 1;
        setIsLikes(val => !val)
    }
    setPost(updatePost);
    };
    const sortByLikesAsc = () => {
        const sortedPosts = [...post];
        sortedPosts.sort((a, b) => a.likes - b.likes);
        setPost(sortedPosts);
      
      };
    
      const sortByLikesDesc = () => {
        const sortedPosts = [...post];
        sortedPosts.sort((a, b) => b.likes - a.likes);
        setPost(sortedPosts);
        
      };

  return (
    <div>Posts
        <button onClick={sortByLikesAsc}>sort assending </button>
        <button onClick={sortByLikesDesc}>desending</button>
        

    {post.map ((items, index) => (

    <div key={index}>
        <h4>{items.aurthor}</h4>
        <p>{items.message}</p>
        <p>{items.datePosted}</p>
        <button onClick={() => handleLikeClick(index)}>{items.likes}</button>
    </div>    ))}

    </div>
  )
}

export default Posts