import { Card, Image, Rating } from "semantic-ui-react";

function InstructorsPreview({ instructors, instructorDetails }) {
  return (
    <Card onClick={() => instructorDetails(instructors)}>
      <Image size='mini' src={instructors.picture} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{instructors.name}</Card.Header>
      </Card.Content>
      <Card.Description>
        <Rating icon="star" defaultRating={3} maxRating={5} />
      </Card.Description>
    </Card>
  );
}

export default InstructorsPreview;
