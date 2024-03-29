import { gql } from "@apollo/client"
export const GET_SONG = gql`
query song($songId: ID!) {
  song(id: $songId){
    id
    title
    lyrics {
      content
      id
      likes
    }
  }
}
`