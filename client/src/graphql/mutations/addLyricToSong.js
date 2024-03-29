
import { gql } from "@apollo/client";


export const ADD_LYRIC_TO_SONG = gql`
mutation AddLyricToSong($songId: ID!, $content: String!) {
  addLyricToSong(songId: $songId, content: $content) {
    id
    content
    song {
      id
      title
    }
    likes
    __typename
  }
}



`