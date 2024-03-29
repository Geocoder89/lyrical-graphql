import { useState } from "react"
import { ADD_SONG } from "../graphql/mutations/addSong"
import { GET_SONGS } from "../graphql/queries/fetchSongs"
import { useMutation, useQuery } from "@apollo/client"
import { Link, useNavigate } from "react-router-dom"
const SongCreate = () => {

  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [addSong, {loading, error}] = useMutation(ADD_SONG)

  // Fetch songs query and refetch function

  const {refetch: refetchSongs} = useQuery(GET_SONGS)


  const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
      await addSong({variables: {title}})
      setTitle('')
      // refetch songs after a new song is added

      refetchSongs()
      navigate('/')

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="container">
    <Link to='/'>Back</Link>
    <h3>Create a New song</h3>
    <form onSubmit={handleSubmit}>
    <label>Song Title:</label>
    <input onChange={e=>setTitle(e.target.value)} value={title}/>
    <button type="submit" disabled={loading}>Add Song</button>
    </form>
    {loading && <p>Loading....</p>}
    {error && <p> Error: {error.message}</p>}
    </div>
  )
}

export default SongCreate