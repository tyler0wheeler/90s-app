// import React from 'react'
// import { Grid, Rail, Button } from 'semantic-ui-react'
// import AllPostsList from '../ShowAllPosts'

// const RailExampleRail = (props) => (
//   <Grid centered columns={3}>
//     <Grid.Column>
      

//         <Rail position='left'>
//           <Button
//             onClick={() => props.showAllPosts()}>All Posts</Button>
//           <Button
//             onClick={() => props.showUserPosts()}>My Posts</Button>
//         </Rail>

      
//     </Grid.Column>
//   </Grid>
// )

// export default RailExampleRail

import React, { useState } from 'react'
import {
  Container,
  Menu,
  Button
} from 'semantic-ui-react'
import LoginModal from '../LoginContainer'
import NewPostModal from '../NewPostModal'
import RegisterModal from '../RegisterContainer'



const UserNav = (props) => (


  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>   
          That 90s App!
        </Menu.Item>
        {
          props.loggedIn === true
          ?
          <React.Fragment>
          <NewPostModal
            createPost={props.createPost} />
        <Button
          basic
          color="grey"
          compact
           onClick={() => props.showAllPosts()}>Home</Button> 
          <Button
            basic
            color="grey"
            compact 
            onClick={() => props.showUserPosts()}>My Posts</Button>
          <Button
            basic
            color="grey"
            compact
            position='right'
            onClick={() => props.logout()}>Log Out</Button>
        </React.Fragment>
        :   
        <React.Fragment>  
        <LoginModal
          login={props.login}
           />
        <RegisterModal
          login={props.login}
          register={props.register}
          />    
          </React.Fragment>
        } 
      </Container>
    </Menu>   
  </div>
)

export default UserNav