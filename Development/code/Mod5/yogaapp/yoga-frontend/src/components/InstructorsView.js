import React, { useEffect, useState } from "react";
import InstructorsBar from "./InstructorsBar";
import InstructorsCard from "./InstructorsCard";
import { Container, Divider } from "semantic-ui-react";

function InstructorsView() {
  const [instructors, setInstructors] = useState([]);
  const [instructorSelect, setInstructorSelect] = useState(false);
  const [singleInstructorDetail, setSingleInstructorDetail] = useState()
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then(r => r.json())
      .then((reviewsArray) => setReviews(reviewsArray));
  }, []);
  
  console.log(singleInstructorDetail)
  

  // const instructorDetails = singleInstructor => {
  //   console.log(singleInstructor)
  //   // let singleInstructor = instructors.find(instructor => instructor.id === parseInt(singleInstructorId))
  //   setSingleInstructorDetail(singleInstructor)
  //   // console.log(singleInstructorId)
  //   // console.log(singleInstructorId)

  // }
  console.log(singleInstructorDetail);
  useEffect(() => {
    fetch("http://localhost:3000/instructors")
      .then((r) => r.json())
      .then((instructorsArray) => setInstructors(instructorsArray));
  }, []);

    // function handleDisplayInstructor(selectedInstructor) {
    //   setInstructorSelect(true)
    // }




  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((r) => r.json())
      .then((reviewArray) => setFavorites(reviewArray));
  }, []);

  return (
    <div>
      <div>
        <Container>
          <InstructorsBar instructors={instructors} instructorDetails={setSingleInstructorDetail} />
        </Container>
      </div>
      <Divider/>
      <div>
        <Container>
          <InstructorsCard singleInstructorDetail={singleInstructorDetail} instructorSelect={instructorSelect} reviews={reviews}/>
        </Container>
      </div>
    </div>
  );
}

export default InstructorsView;
