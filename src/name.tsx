import {NameContainer, Names} from "./Name.style.tsx"


type Props = {
  firstName: string;
  secondName: string;
  familyName: string;
  lastName: string;
}

function Name({firstName, secondName, familyName, lastName}: Props){
  return(
    <NameContainer className="nav-container">
      <Names>{firstName}</Names>
      <Names>{secondName}</Names>
      <Names>{familyName}</Names>
      <Names>{lastName}</Names>
    </NameContainer>
  )

}
export default Name
/*
      <div>{secondName}</div>
      <div>{familyName}</div>
      <div>{lastName}</div>
*/