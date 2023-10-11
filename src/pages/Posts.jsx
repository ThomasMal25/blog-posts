import React, { useState } from 'react'

import NavBar from '../components/NavBar';
import Title from '../components/Title';

function Posts(props) {
    const data = props.data
    const [post,setPost]=useState(data)
    const [isLiked,setIsLikes]=useState(false)

    const handleLikeClick = (index) => {
        const updatePost = [...post];
        if(!isLiked){
        updatePost[index].likes += 1;
        setIsLikes(true)
    }else{
         updatePost[index].likes -= 1;
        setIsLikes(false)
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
      <NavBar />
        <button onClick={sortByLikesAsc}>sort assending </button>
        <button onClick={sortByLikesDesc}>desending</button>
        

    {post.map ((items, index) => (

    <div key={index}>
        <h4>{items.aurthor}</h4>
        <Title data={items.title}/>
        <p>{items.message}</p>
        <p>{items.datePosted}</p>
        <button onClick={() => handleLikeClick(index)}>{items.likes}</button>
    </div>    ))}

    </div>
  )
}

export default Posts