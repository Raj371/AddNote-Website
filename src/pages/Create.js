import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import  Container  from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {FormControlLabel,makeStyles} from '@material-ui/core';
import  TextField  from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import  RadioGroup  from '@material-ui/core/RadioGroup';
import { FormControl,FormLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
   field:{
       marginTop:20,
       marginBottom:20,
       display:"block"
   }
})

const Create=()=>{
    const classes=useStyles()
    const history=useHistory()
    const [title,setTitle]=useState('')
    const [details,setDetails]=useState('')
    
    const [titleError,setTitleError]=useState(false)
    const [detailsError,setDetailsError]=useState(false)

    const [category,setCategory]=useState("money")

const handleSubmit=(e)=>{
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title=="")
        setTitleError(true)
    if(details=="")
        setDetailsError(true)
    if(title && details){
        fetch('http://localhost:8000/notes',{
           method:"POST",
           headers:{"Content-Type":"application/json"} ,
           body:JSON.stringify({title,details,category})
        })
        .then(()=>history.push('/'))
    }

}

    return(
        <Container>
            <Typography
                className={classes.title}
                variant="h6"
                component="h2"
                color='textSecondary'
                gutterBottom
            >
                Create a New Note
            </Typography>   

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field} 
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={titleError}
                    helperText="Please Enter the Note Title."
                />
                <TextField
                    className={classes.field}
                    onChange={(e) => setDetails(e.target.value)} 
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={detailsError}
                    helperText="Please Enter Note Details."
                />

            <FormControl className={classes.field}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <FormControlLabel value="money" control={<Radio />} label="Money"></FormControlLabel>
                    <FormControlLabel value="todos" control={<Radio />} label="Todos"></FormControlLabel>
                    <FormControlLabel value="work" control={<Radio />} label="work"></FormControlLabel>
                    <FormControlLabel value="reminder" control={<Radio />} label="Reminder"></FormControlLabel>
                </RadioGroup>
            </FormControl>

            <Button 
                className={classes.btn}
                variant="contained"
                color="secondary"
                type="submit"
                startIcon={<SendIcon/>} 
                endIcon={<KeyboardArrowRightIcon/>}
            
            >
                Submit
            </Button>
            
            </form>

                      
        </Container>
    );
}

export default Create;
