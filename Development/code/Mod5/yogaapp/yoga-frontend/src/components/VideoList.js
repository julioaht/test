

function VideoList({singleInstructorDetail}){
    return(
        <div>
            <p>this is videolist</p>
            {singleInstructorDetail ? <h1>{singleInstructorDetail.name}</h1>: null}
            {singleInstructorDetail ? <h2>Years of Expirience: {singleInstructorDetail.expirience}</h2>: null}
            {singleInstructorDetail ? <h3>Some Information About the Instructor: {singleInstructorDetail.bio}</h3>: null}



 
            {/* // {singleInstructorDetail ? <a src={singleInstructorDetail.} /> : null} */}

        </div>
    )
}



export default VideoList;