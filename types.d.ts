declare type RedditPost = {
  data: {
    id: string
    title: string
  }
}

declare type RedditResult = {
  data: {
    children: ReadonlyArray<RedditPost>
  }
}
