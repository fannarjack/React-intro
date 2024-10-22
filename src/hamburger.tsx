import "./hamburger.css"
type Props = {
  answer: string;
  
}

function Btn({answer}: Props) {
  return(
  <div className="container">
    <button className="btn" >
      {answer}
    </button>
  </div>
  )
}

export default Btn  