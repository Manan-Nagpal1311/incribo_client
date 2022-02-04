import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import FileBase from 'react-file-base64';
import { updatedata } from '../../redux/actions/auth';
import { Button, Typography } from '@material-ui/core';
import { useNavigate , Link} from 'react-router-dom';
import {Paper} from '@material-ui/core';


const Profile = ({userData,updatedata}) => {
    const history=useNavigate();
    const [user,setuserData]=useState(userData);
    const id=userData?.auth?.authData?.result?._id;
    const update=()=>{
        console.log(user.auth);
        if(userData?.auth?.authData?.result?.selectedFile)
        {
            updatedata(user.auth,id);
        }
        else
        {
            updatedata(user,id);
        }
        
        history('/');
    }
  return (
      <Paper align="center" elevation={4} >
          <h1>My profile</h1>
     {!userData?.auth?.authData?.result?.selectedFile  &&
     <Typography>
     Upload Your Profile Image: 
      <FileBase
        type="file"
        multiple={false}
        onDone={({base64})=> setuserData({...userData,selectedFile:base64})}
        />
        <Button onClick={update} variant="contained" color="primary">
            Save Data
        </Button>
        </Typography>
}
        <Typography variant="h4">Name: {userData.auth?.authData?.result?.name}</Typography>
        <Typography variant="h4">Email Id: {userData.auth?.authData?.result?.email}</Typography>
        <Button component={Link} to="/" variant='contained' color="primary">Back to Reading section!!</Button>

        
      </Paper>
  );
};

const mapStateToProps = (state) => {
    return{
    userData : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updatedata:(user,id)=>dispatch(updatedata(user,id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
