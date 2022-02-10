import React , {useState , useEffect} from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase';

function Feed() {
    // const [posts , setPost] = useState([]);

    // useEffect(() => {
    //     //code...
    //     db.collection('posts').onSnapshot(snapshot => (
    //         setPosts(snapshot.docs.map(doc => doc.data()))
    //     ))
    // }, []);


    return (
        <div className="feed">
            {/* Header */}
     <div className="feed__header">
     <h2>Home</h2>
     </div>  

            {/* TweetBox */}

<TweetBox />
<Post 
displayName="Pooja Shrivastava"
username="shrivastava_1012"
verified={true}
text="Cool!!"
avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYc9I8HDq9-QBh4DzboxCR3F4uaJGMwYkkGA&usqp=CAU" 
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmzUr0E8-kIhVV0OcHJxRS_Us8lwvZV4Dow&usqp=CAU"
/>
<Post />
<Post />
<Post />

            { /* Post */}
            { /* Post */}
            { /* Post */}
        </div>
    )
}

export default Feed
