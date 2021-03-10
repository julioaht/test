import { Rating, Button, Comment, Form, Header } from "semantic-ui-react";

function StarSelection( { reviews, singleInstructorDetail }) {
  return (
    

    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>

      <Comment>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
        <Comment.Content>
          <Comment.Author as="a">Matt</Comment.Author>
          <Comment.Text>How artistic!</Comment.Text>
        </Comment.Content>
      </Comment>

      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </Comment.Group>
  );
}

export default StarSelection;
