// import { Dropdown } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import PoseDrop from "./PoseDrop";
import PoseFavoriteList from "./PoseFavoriteList";

function PoseSearchBar({ poses, poseDetail, favorites }) {
  const poseDropdown = poses.map((pose) => (
    <PoseDrop key={pose.id} name={pose.english_name} id={pose.id} />
  ));
  console.log(favorites);
  return (
    <div>
      <div>
        <h3>Please Select your Favorite Yoga Pose!</h3>
        <select onChange={(e) => poseDetail(e.target.value)}>
          {poseDropdown}
        </select>
        <Button basic color="grey" content="Favorite" />
      </div>
      <div>
          <PoseFavoriteList favorites={favorites} />    
      </div>
    </div>
  );
}

// <Dropdown
// placeholder="Select a Pose"
// fluid
// selection
// options={poseDropdown}
// onChange={(e) => poseDetail(e.target.value)}
// />

export default PoseSearchBar;
