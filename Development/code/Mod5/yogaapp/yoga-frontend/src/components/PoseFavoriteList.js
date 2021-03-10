import PoseFavoriteItem from "./PoseFavoriteItem";



function PoseFavoriteList({favorites, onDeleteFav}) {
    // const favoritesList = favorites.map((favorite) => (
    //     <PoseFavoriteItem key={favorite.id} user={favorite.user} id={favorite.id} yogapose={favorite.yogapose.english_name}/>
    //   ));
    //   console.log(favoritesList);
    return (
        <div>
          <h2>My Favorites</h2>
          <ul>
            {favorites.map((favorite) => (
              <PoseFavoriteItem key={favorite.id} favorite={favorite} id={favorite.id} onDeleteFav={onDeleteFav} />
            ))}
          </ul>
        </div>
      );
}



export default PoseFavoriteList;