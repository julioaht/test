import { Grid, Segment } from 'semantic-ui-react';
import InstructorsImg from './InstructorsImg';
import StarSelection from './StarSelection';
import VideoItem from './VideoItem';
import VideoList from './VideoList';

function InstructorsCard({ instructors, singleInstructorDetail, instructorSelect, reviews }){
    const allReviews = reviews.map((review) => (
        <StarSelection />

    ))
    // const getContent = () => {
    //     if (instructorSelect === true){
    //         return <
    //     }
    // }
    // console.log(singleInstructorDetail);
    return(
        <div>
            <Grid columns={2} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <InstructorsImg instructors={instructors} singleInstructorDetail={singleInstructorDetail} />
                        </Segment>
                        <Segment>
                            <StarSelection reviews={reviews} singleInstructorDetail={singleInstructorDetail}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <VideoList  singleInstructorDetail={singleInstructorDetail}/>
                        </Segment>
                        <Segment>
                            <VideoItem  singleInstructorDetail={singleInstructorDetail} />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>


    )
}



export default InstructorsCard;