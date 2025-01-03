import { useState, useEffect } from "react";
import Btn from "./Btn.tsx";
import Modal from "./modal.tsx";
import {MovieContainer, MovieInfo, Title, MovieImg, Overview} from "./MovieDetails.style.tsx"

type Movie = {
  title: string,
  backdrop_path: string,
  overview: string,
  id: number
}
function MovieDetails(){
  const [movieOpen, setMovieOpen] = useState<Movie[]>([]);
  const [modalOpen, setModalOpen] =  useState<boolean[]>([]);
  useEffect(()=>{

    const getData = async () => {

      const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" ,
      {headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmNWRkMDhhZWEzNDE0MzhhOTRkMzNiYzVhYWFhNCIsIm5iZiI6MTcyOTc3NjU3NS4wNzkxNTMsInN1YiI6IjY3MWE0YTM0NzY5MTA3ZDc3YjQ3OGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4A1tqgo9LlHcCLRWJMhCP4RhZuw2G733kE7-bG_-uU0'
        }});

      const json = await response.json()
      setMovieOpen(json.results)
      json.results.forEach(()=>{
        setModalOpen([...modalOpen, false])
      })
      
    }
    getData()
  },[])
  console.log(movieOpen)

  return (
    <>
      <MovieContainer >
        {movieOpen.map((movieOpen, index) =>{

          return (
            <MovieInfo className="movie-info">
              <Title className="title">{movieOpen.title}</Title>
              <MovieImg className="movie-img" src={"https://image.tmdb.org/t/p/w500/" + movieOpen.backdrop_path} />
              <Overview className="overview">{movieOpen.overview}</Overview>
              <Btn answer="Show Review" click={() => {
                const newModalOpen = [...modalOpen]
                newModalOpen[index] = true;
                setModalOpen(newModalOpen)}}/>
              <Modal isOpen = {modalOpen[index]}
              closeModal =  {() => { 
                const newModalOpen = [...modalOpen]
                newModalOpen[index] = false;
                setModalOpen(newModalOpen)}}
                movieId={movieOpen.id}/>

            </MovieInfo>
            
          )     
        })}
      </MovieContainer>
    </>
  
  )
      
     
  

}

export default MovieDetails;

