import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import {DeleteOutlined} from '@material-ui/icons';
import {Typography,makeStyles} from '@material-ui/core'
import { Avatar } from '@material-ui/core';
import { blue, green, yellow ,pink} from '@material-ui/core/colors';

const useStyles=makeStyles({
    avatar:{
        backgroundColor:(note)=>{
            if(note.category=='work'){
                return yellow[700]
            }
            if(note.category=='money'){
                return green[700]
            }
            if(note.category=='todos'){
                return pink[700]
            }
            return blue[700]
        }
    },
})

const NoteCard = ({note , handleDelete}) => {

    const classes=useStyles(note)

    return (
        <div>
            <Card elevation={3} >
                <CardHeader 
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={()=>handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                    > 
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard;