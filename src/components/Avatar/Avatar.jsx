import React from 'react'
import Avatar from '@mui/material/Avatar'

function Avatar(props) {
//   return <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    return <Avatar>H</Avatar>

    if(src){
        return <Avatar alt="Remy Sharp" src={src} />
    } else {
        return <Avatar></Avatar>
    }            
}

export default Avatar
