
import { MouseEventHandler } from "react";
import "./modal.css"
import { useState, useEffect } from "react";
import GoodOrBad from "./movieReview";

type Review = {
  content: string
};

type Props = { 
  isOpen: boolean
  closeModal: MouseEventHandler<HTMLParagraphElement>;
  movieId: number
};


function Modal({isOpen, closeModal, movieId}: Props){
  const [review, setReview] = useState<Review[]>([]);
  const [sentiments, setSentiments] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => { 
      const response = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/reviews" ,
      {headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmNWRkMDhhZWEzNDE0MzhhOTRkMzNiYzVhYWFhNCIsIm5iZiI6MTcyOTc3NjU3NS4wNzkxNTMsInN1YiI6IjY3MWE0YTM0NzY5MTA3ZDc3YjQ3OGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4A1tqgo9LlHcCLRWJMhCP4RhZuw2G733kE7-bG_-uU0'
        }
      });
      const json = await response.json();
      const results = json.results as Review[];
      //setReview(json.results as Review[])
      
      setReview(results);
      //Sentiment for each review
      const sentimentPromises = json.results.map(async (review: Review) => await GoodOrBad(review.content))
      const allSentiments = await Promise.all(sentimentPromises);
      console.log("sentiment analysis results:", allSentiments)
      const strings = allSentiments.map(sentiment => sentiment.sentiment)
      console.log(strings)
      setSentiments(strings)
      
    }
    if(isOpen){
      getData()
    }
    
  },[isOpen])
  console.log(review)
  const style = {
    display: "none",
  }
  if(isOpen){
    style.display = "flex"
  }
  
  return (
    <>
    <div className="modal-container" style = {style}>
      <div className="modal">
        <p className="x" onClick = {closeModal}>X</p>
        
        {review.map((review, index) =>{
          console.log(sentiments[index])
          return(
            <p
              key={index}
              style={{ color: sentiments[index] === "POSITIVE" ? "green" : "red"}}
              className="hello"
            >
                {review.content}
            </p>
        )
        })}

       </div>
    </div>
    </>
  )
} 
export default Modal 