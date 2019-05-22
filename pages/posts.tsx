import React from 'react'
import fetch from 'isomorphic-fetch'
import { NextFunctionComponent, NextContext } from 'next'

type InitialProps = PromiseResult<ReturnType<typeof getInitialProps>>
type Props = InitialProps
type Context = NextContext<{ subreddit: string }>

const Posts: NextFunctionComponent<Props, InitialProps, Context> = ({ posts, subreddit }) => (
  <div>
    <h1>Posts in "{subreddit}"</h1>
    <ul>
      {posts.map(post => (
        <li key={post.data.id}>{post.data.title}</li>
      ))}
    </ul>
  </div>
)

const getInitialProps = async (context: Context) => {
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
