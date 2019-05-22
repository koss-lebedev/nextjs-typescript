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

declare type PromiseResult<T> = T extends Promise<infer U> ? U : T
