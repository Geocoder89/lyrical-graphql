import { gql } from "@apollo/client"
export const DELETE_SONG = gql`
  mutation deleteSong($deleteSongId: ID!) {
    deleteSong(id: $deleteSongId) {
      id
    }
  }
`