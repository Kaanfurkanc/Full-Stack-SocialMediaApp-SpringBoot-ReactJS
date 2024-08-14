import Post from '../Post/Post';
import React, {useState, useEffect} from "react";
import "./Home.scss";
function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/v1/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPosts(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="container">
            <h1>Homeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
            
        

                {posts.map(post => (
                    <Post title= {post.title} text={post.text} ></Post>  
                ))}
                </div>
        );
    }
}

export default Home;