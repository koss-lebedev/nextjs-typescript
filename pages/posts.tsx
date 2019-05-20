import React from 'react'
import fetch from 'isomorphic-fetch'

const Posts = ({ posts, subreddit }: any) => (
  <div>
    <h1>Posts in "{subreddit}"</h1>
    <ul>
      {posts.map((post: any) => (
        <li key={post.data.id}>{post.data.title}</li>
      ))}
    </ul>
  </div>
)

const getInitialProps = async (context: any) => {
  const subreddit = context.query.subreddit
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
  const result = await response.json() as RedditResult

  return {
    subreddit,
    posts: result.data.children
  }
}

Posts.getInitialProps = getInitialProps

export default Posts
