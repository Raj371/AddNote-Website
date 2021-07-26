import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Children } from 'react';
import Drawer from '@material-ui/core/Drawer';
import  Typography  from '@material-ui/core/Typography';
import List from '@material-ui/core/List';  // like an ul tag in html
import ListItem from '@material-ui/core/ListItem' //like an li tag in html
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'; // icon and text inside li
import { ListItemIcon } from '@material-ui/core';
import {useHistory,useLocation} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import { format } from 'date-fns';

const drawerWidth=240
const useStyles=makeStyles((theme)=>{
  return {  page:{
        background:'#f9f9f9',
        width:"100%",
        padding:theme.spacing(3) // basic padding 1 ->  8px and 3*8 24px
    },
    title:{
        padding:theme.spacing(2)
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    },
    root:{
        display:"flex"
    },
    active:{
        backgroundColor:"#f4f4f4"
    },
    appbar:{
        width:`calc(100% - ${drawerWidth}px)`
    },
    toolbar:theme.mixins.toolbar,
    date:{
        flex:1
    }
}
})
 const Layout = ({children}) => {
    const classes=useStyles()
    const history=useHistory()
    const location=useLocation()
    const menuItems=[
        {
            text:'My Notes',
            icon:<SubjectOutlined color="secondary" />,
            path:'/',
        },
        {
            text:'Create Notes',
            icon:<AddCircleOutlineOutlined color="secondary" />,
            path:'/create',
        }
    ]

    return (
        <div className={classes.root}>

        <AppBar 
            className={classes.appbar}
            elevation={0}
        >
            <ToolBar>
                <Typography className={classes.date}>
                    Today is the {format(new Date(),'do MMMM Y')}
                </Typography>
                <Typography>
                    Raj
                </Typography>

            </ToolBar>
        </AppBar>

        <Drawer 
            className={classes.drawer}
            variant="permanent"   //
            anchor="left"        //
            classes={{paper:classes.drawerPaper}}
        >
        <div>
           <Typography variant="h5" className={classes.title}>
                Raj Notes
           </Typography>
        </div>

        <List>
           {menuItems.map((item) => (
               <ListItem 
               button
               key={item.text}
               onClick={() => history.push(item.path)}
               className={location.pathname==item.path ? classes.active : null}
               >
               
                   <ListItemIcon>{item.icon}</ListItemIcon>
                   <ListItemText primary={item.text}></ListItemText>
               </ListItem>
           ))} 
        </List>

        </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout;