import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { LIKE_LYRIC } from '../graphql/mutations/LikeLyric'
import { GET_SONG } from '../graphql/queries/fetchSong'
const LyricList = ({lyrics}) => {

  const {refetch: refetchSong} = useQuery(GET_SONG)
  const [likeLyric] = useMutation(LIKE_LYRIC)
  // const [updatedLyrics, setUpdatedLyrics] = 
  const onLike =async(lyricId)=> {

    try {
      console.log(lyricId)
      await likeLyric({
        variables:{lyricId},
      })
      refetchSong()
    } catch (error) {
      console.log(`Error liking lyric: ${error}`)
    }
  }

  const renderedLyrics = lyrics.map(({id,content,likes})=> {
    return <li className='collection-item' key={id}>
    {content}
    
    <div className='vote-box'>
    
    <i onClick={()=>onLike(id)} className='material-icons'>
    thumb_up 
    </i>
    {likes}
    </div>
    </li>
  })
  return (
    <ul className='collection'>
    
    {renderedLyrics}
    </ul>
  )
}

export default LyricList