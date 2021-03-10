import { Card, Dropdown } from "semantic-ui-react";


function PoseDrop({ name, id }){
    return(
        <option value={id}>{name}</option>
    )
}

export default PoseDrop;