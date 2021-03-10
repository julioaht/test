import InstructorsPreview from "./InstructorsPreview";
import { Container, Card } from "semantic-ui-react";


function InstructorsBar({ instructors, instructorDetails }) {
  const cards = instructors.map((instructor) => (
    <InstructorsPreview key={instructor.id} instructors={instructor} instructorDetails={instructorDetails} id={instructor.id}/>
  ));
  return (
    <ul>
      <Card.Group 
      itemsPerRow={3}
      // onClick={(e) => instructorDetails(e.target.value)}
      >{cards}
      </Card.Group>
    </ul>
  )  

}

export default InstructorsBar;
