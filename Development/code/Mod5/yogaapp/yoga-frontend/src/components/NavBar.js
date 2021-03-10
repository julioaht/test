import { Segment, Header, Button, Image } from 'semantic-ui-react';
function NavBar(){

    return (
        <Segment  textAlign='center'>
            <Image src="https://www.brandcrowd.com/gallery/brands/pictures/picture14335703407401.png" floated='left' size='small'/>
            <Header as="h1">YogaLife!</Header>
            <Button floated='right' >Sign In</Button>
            <h3>Everyone is Welcome!</h3>
        </Segment>
   
    

    )
}



export default NavBar;