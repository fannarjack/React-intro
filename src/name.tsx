import {NameContainer, Names} from "./Name.style.tsx"

//I can put what ever i want in these names
type Props = {
  firstName: string;
  secondName: string;
  familyName: string;
  lastName: string;
}

function Name({firstName, secondName, familyName, lastName}: Props){
  return(
    <NameContainer>
      <Names>{firstName}</Names>
      <Names>{secondName}</Names>
      <Names>{familyName}</Names>
      <Names>{lastName}</Names>
    </NameContainer>
  )

}
export default Name
