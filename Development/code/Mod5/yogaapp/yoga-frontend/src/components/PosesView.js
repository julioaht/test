import React, { useEffect, useState } from "react";
import PoseImg from "./PoseImg";
import PoseName from "./PoseName";
import PoseSearchBar from "./PoseSearchBar";
import { Grid, Segment } from "semantic-ui-react";

function PosesView() {
    // INITIAL STATE
  const [poses, setPoses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [singlePoseDetail, setSinglePoseDetail] = useState({});


    const poseDetail = singlePoseId => {
        let singlePose = poses.find(pose => pose.id === parseInt(singlePoseId))
        setSinglePoseDetail(singlePose)
        // setSelected(true)
        // console.log(singlePoseId)
        // console.log(singlePose)
    }



    // INITIAL FETCH
    // GET POSES
    useEffect(() => {
        fetch("http://localhost:3000/yogaposes")
        .then(r => r.json())
        .then(poseArray => setPoses(poseArray))
    }, []);

    // GET FAVORITES
    useEffect(() => {
        fetch("http://localhost:3000/favorites")
        .then(r => r.json())
        .then(favoriteArray => setFavorites(favoriteArray))
    }, []);
    // console.log(favorites);
    function addFav(newFav) {
        const updatedFavs = [...favorites, newFav]
        setFavorites(updatedFavs)
    }

    function deleteFav(id) {
        const updatedFavs = favorites.filter(favorite => favorite.id !== id)
        setFavorites(updatedFavs)
    }

  
    // const poseImgs = poses.map((poseObj) => {
    //     return <PoseImg key={poseObj.id} img={poseObj.img_url}/>
    // })

    



  return (
      <div>
        <Grid columns={2} divided>
        <Grid.Row stretched>
            <Grid.Column>
                <Segment>
                    <PoseImg   singlePoseDetail={singlePoseDetail}/>
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <PoseName   singlePoseDetail={singlePoseDetail}/>
                </Segment>
                <Segment>
                    <PoseSearchBar poses={poses} poseDetail={poseDetail} favorites={favorites} onDeleteFav={deleteFav}/>
                </Segment>
            </Grid.Column>
        </Grid.Row>
        </Grid>

    </div>
  )

}

export default PosesView;
