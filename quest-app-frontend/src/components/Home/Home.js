import Post from '../Post/Post';
import React, {useState, useEffect} from "react";
import "./Home.scss";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


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
            <Container maxWidth="md" sx={{ display:"flex", flexWrap:"wrap",flexDirection: 'column', justifyContent:"center", alignItems:"center", backgroundColor: '#f5f5f5', borderRadius: '8px', height: '100vh'}}>
                <div className="container">
                        {posts.map(post => (
                                <Post title= {post.title} text={post.text} ></Post>
                                
                            ))}
                
                    </div>
            </Container>
        );
    }
}

export default Home;