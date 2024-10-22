import "./name.css"


type Props = {
  firstName: string;
  secondName: string;
  familyName: string;
  lastName: string;
}

function Name({firstName, secondName, familyName, lastName}: Props){
  return(
    <div className="nav-container">
      <div>{firstName}</div>
      <div>{secondName}</div>
      <div>{familyName}</div>
      <div>{lastName}</div>
    </div>
  )

}
export default Name