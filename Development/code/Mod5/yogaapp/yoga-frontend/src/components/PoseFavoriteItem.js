import { Button } from "semantic-ui-react";

function PoseFavoriteItem({ favorite, id, onDeleteFav }) {
    // console.log(favorite);

    function handleDelete() {
        fetch('http://localhost:3000/favorites/${id}', {
            method: "DELETE"
        // })
        // .then(r => r.json())
        // .then(() => {
        //     onDeleteFav(id)
            // console.log("success!");
            // console.log(id);
        })

       

        
    }


    return (
        <li>
            <strong>{favorite.yogapose.english_name}</strong>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}    

export default PoseFavoriteItem;
