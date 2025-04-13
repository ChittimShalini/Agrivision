// import { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import PostTitles from '../components/PostTitles';
// import CreatePost from '../components/CreatePost';
// import url from '../url'

// const Post = () => {
//     const [posts, setPosts] = useState([]);
//     const [refreshing, setRefreshing] = useState(false);

//     const onRefresh = useCallback(() => {
//       setRefreshing(true);
//       fetchData(); 
//       setTimeout(() => {
//         setRefreshing(false);
//       }, 2000);
//     }, []);

//     useEffect(() => {
//       // Fetch posts data from your API
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(`${url}/Postfetch`);
//           setPosts(response.data.posts);
//           console.log(response.data.posts)
//         } catch (error) {
//           console.error('Error fetching posts:', error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     return (
//       <div className="d-flex flex-column m-4 pb-1">
//       <div className="d-flex flex-column justify-content-between">
//           <div style={{width: 'auto' }}>
//               <CreatePost onRefresh={onRefresh}/>
//           </div>
//           <div style={{marginTop:20}}>

//           <PostTitles type="posts" posts={posts} />
//           </div>
//       </div>
//   </div>
//     );
//   };

// export default Post


import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import PostTitles from '../components/PostTitles';
import CreatePost from '../components/CreatePost';
import url from '../url';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchData(); 
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/Postfetch`);
                setPosts(response.data.posts);
                console.log(response.data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
  
        fetchData();
    }, []);

    return (
        <div style={{
            backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/05/08/17/03/grass-2295888_1280.jpg")', // Update with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh', // Ensure it covers the full height of the viewport
            padding: '20px', // Add some padding for spacing
            boxSizing: 'border-box', // Ensure padding doesn't affect total height
        }}>
            <div className="d-flex flex-column justify-content-between">
                <CreatePost onRefresh={onRefresh}/>
                <div style={{ marginTop: 20 }}>
                    <PostTitles type="posts" posts={posts} />
                </div>
            </div>
        </div>
    );
};

export default Post;
