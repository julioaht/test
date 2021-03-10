import { Card, Icon, Image } from "semantic-ui-react";

function InstructorsImg({singleInstructorDetail}) {
  return (
    <div>
        <p> Instructors card</p>
        {singleInstructorDetail ? <Image src={singleInstructorDetail.picture}  /> : null}

    </div>
  );
}

export default InstructorsImg;
