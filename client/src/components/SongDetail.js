import React from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { GET_SONG } from '../graphql/queries/fetchSong'
import { Link } from 'react-router-dom'
import LyricCreate from './LyricCreate'
import { ADD_LYRIC_TO_SONG } from '../graphql/mutations/addLyricToSong'
import LyricList from './LyricList'
const SongDetail = () => {

  // extract the id from the params
  const {id} = useParams()

  // run the GET_SONG Query passing the id 
  const {loading, error, data,refetch} = useQuery(GET_SONG, {
    variables: {songId: id}
  })


  // lyric creation logic

  // pull out actual mutation function from the mutation set up
  const [addLyricToSong] = useMutation(ADD_LYRIC_TO_SONG)

  // function that will be passed down to handle the lyrics creation

  const onHandleLyricCreate = async(songId, content)=> {
    try {
      await addLyricToSong({
        variables: {
          songId,
          content
        }
      })

      // refetch the song after adding the lyric

      refetch()
    } catch (error) {
      console.error(`Error creating lyric ${error}`)
    }
  }

  if(loading) return <p>Loading</p>
  if(error) return <p>Error: {error.message}</p>

  // extract the song from the data gotten back from the query and return back the accurate information
  const {song} = data
  return (
    <div className='container'>
    <Link to='/'>&larr;Back</Link>
    <h3>{song.title}</h3>
  
   <LyricList lyrics={song.lyrics}/> 
    <LyricCreate songId={song.id} onLyricCreate={onHandleLyricCreate}/>
    </div>
  )
}

export default SongDetail