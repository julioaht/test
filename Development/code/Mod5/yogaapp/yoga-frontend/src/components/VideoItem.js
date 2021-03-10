import { Component } from "react";
import ReactPlayer from "react-player";
import { Embed, Segment } from 'semantic-ui-react';



function  VideoItem({singleInstructorDetail}) {

    // console.log((singleInstructorDetail.video));
    return(
        <div>
            <p>This is VideoItem</p>
            {singleInstructorDetail ? <iframe width="525" height="330" src={singleInstructorDetail.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> : null}
            {/* <iframe width="525" height="330" src="https://www.youtube.com/embed/gLNQ6Mq5kbg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    
        </div>
        

    )
}

export default VideoItem;