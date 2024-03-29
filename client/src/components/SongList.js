
import React from 'react'
import {useMutation, useQuery} from '@apollo/client'
import { Link } from 'react-router-dom'
import { GET_SONGS } from '../graphql/queries/fetchSongs'
import { DELETE_SONG } from '../graphql/mutations/deleteSong'
const SongList = () => {

  const {loading, error, data,refetch} = useQuery(GET_SONGS)
  const [deleteSong] = useMutation(DELETE_SONG)
  if(loading) return <p>Loading....</p>
  if(error) return <p>Error: {error.message}</p>

  const handleDelete = async(id)=> {
    try {
      await deleteSong({
        variables: {deleteSongId: id}
      })
      
      // refetch the songs when the song is deleted.
      refetch()
      
    } catch (error) {
      console.error(`Error deleting the song: ${error}`)
    }
  }

  const renderedSongs = data.songs.map(({id, title})=>{
    return <li  className='collection-item' key={id}><Link to={`/songs/${id}`}>{title}</Link>
    <i className='material-icons right' onClick={()=> handleDelete(id)}>delete</i>
    </li>
  })
  return (
    <div className='container'>
      <ul className='collection'>
        {renderedSongs}
      </ul>
      <Link className='btn-floating btn-large red right' to='/songs/new'>
      <i className='material-icons'>add</i>
      </Link>
     </div>
  )
}

export default SongList