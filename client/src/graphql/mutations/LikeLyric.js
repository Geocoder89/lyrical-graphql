import { gql } from "@apollo/client";


export const LIKE_LYRIC = gql`

mutation likeLyric($lyricId: ID!) {
  likeLyric(lyricId: $lyricId)  {
    id
    likes
  }
}


`