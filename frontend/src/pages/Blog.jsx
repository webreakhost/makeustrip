import React from 'react'
import Blogbanner from '../component/blog/Blogbanner'
import Article from '../component/blog/Article'
import Head from '../component/Head'

const Blog = () => {
  return (
    <>
    <Head
        title="Travel Blogs, Tips & Stories | Make Us Trip"
        description="Get inspired for your next adventure! Read travel blogs, tips, guides, and stories from Make Us Trip. Discover destinations, itineraries, and traveler experiences."
        keywords="Travel Blog, Make Us Trip Blog, Travel Tips, Holiday Stories, Travel Guides, Travel Articles, Destination Blog"
        image="https://www.makeustrip.in/blogbanner.png"
        url="https://www.makeustrip.in/blog"
      />
      <div>
        <Blogbanner/>
        <Article/>
      
    </div>
    </>
    
  )
}

export default Blog
