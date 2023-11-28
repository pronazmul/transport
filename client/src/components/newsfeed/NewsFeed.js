import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import posts from "../../constant/Posts";
import videos from '../../constant/videos'
import PostSection from './PostSection'

export default function NewsFeed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const storedUserData = sessionStorage.getItem('userData')

  // Parse the JSON string back to an object
  const userData = storedUserData ? JSON.parse(storedUserData) : null

  const token = sessionStorage.getItem('authToken')
  // const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState("");
  let loggedInUser
  if (userData) {
    loggedInUser = userData._id
  }

  useEffect(() => {
    // Fetch posts from the backend when the component mounts
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const uid = loggedInUser

    try {
      axios.defaults.headers.common['x-auth-token'] = `Bearer ${token}`
      const response = await axios.get(
        `http://localhost:8000/api/tweet/posts/feed/${uid}`
      ) // Update the URL as needed
      console.log(response)
      if (response.statusText == 'OK') {
        const data = response.data.posts
        setPosts(data) // Update the posts state with the fetched data
        setLoading(false) // Set loading to false
      } else {
        console.error('Error fetching posts:', response.statusText)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }
  return (
    <div className='mt-2 bg-w relative'>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <PostSection posts={posts} videos={videos} />
      )}
    </div>
  )
}
