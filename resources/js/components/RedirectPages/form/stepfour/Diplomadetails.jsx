import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    cardHeading: {
        color: theme.palette.primary.dark,
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
    }, 
    textFieldContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "20px 0px",
        width: "100%",
    },
    inputs:{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        padding: "10px 0px",
        width: "100%",
    },
    fields:{
        width: "80%",
        margin: "auto"
    },
    notchedOutline: {
        boxShadow: "0px 2px 6px #75757533",
      },
      focused: {
        borderColor: theme.palette.secondary.main,
        boxShadow: "0px 2px 6px #038ed433"
      },
   
   
}));

export default function DiplomaDetails(props) {
    const classes = useStyles();
    const currencies = [
        {
            value:'1',
            label:'CBSE',
        },
        {
            value:'2',
            label:'ICSE',
        },
        {
            value:'2',
            label:'PSEB',
        }
      ];
    const fields = [
        {
            label: "branch",
            type: "text",
            id: 1,
            // name: "first_name",
            value: props.diploma.branch,
            
            select: "true",
            options: [
                {
                    value:"ONE",
                    label:"CBSE"
                },
                {
                    value:"TWO",
                    label:"ICSE"
                },
                {
                    value:"THREE",
                    label:"PSEB"
                }
            ]
            
        },
        {
            label: "INSTITUTION NAME",
            type: "text",
            id: 2,
            // name: "first_name",
            value: props.diploma.institution_name
        },
        {
            label: "CITY OF INSTITUTE",
            type: "text",
            id: 3,
            // name: "first_name",
            value: props.diploma.city_of_institute
        },
        {
            label: "STATE OF INSTITUTE",
            type: "text",
            id: 4,
            // name: "first_name",
            value: props.diploma.state_of_institute
        },
        {
            label: "PINCODE OF INSTITUTION",
            type: "text",
            id: 5,
            // name: "first_name",
            value: props.diploma.pincode_of_institute
        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 6,
            // name: "first_name",
            value: props.diploma.year_of_passing
        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 7,
            // name: "first_name",
            value: props.diploma.obtained_marks
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 8,
            // name: "first_name",
            value: props.diploma.maximum_marks
        },
        {
            label: "STREAM OF DIPLOMA",
            type: "text",
            id: 9,
            // name: "first_name",
            value: props.diploma.stream
        },
        // {
        //     label:"",
        //     type: "file",
        //     id: 10,
        //     // name: "first_name",
        //     inputid:"pdf-file",
        //     value: props.diploma.file,
        // }
    ];

    const renderDiplomaFields = (
        // fields.map(field => (
        //     <>
                <Grid container
                      
                    className={classes.textFieldContainer}
                >
                    <div className={classes.inputs}>
                     <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "BRANCH"
                        type="text"
                        id= "1"
                        name= "bRANCH"
                        defaultValue= {props.diploma.branch}
                        select= "true"
                        
                        
                        variant="outlined"
                        

                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.branch && {error:true, helperText:props.Errors.branch})}
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        
                    </TextField>
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "INSTITUTION NAME"
                        type= "text"
                        id= "2"
                        name= "institution_name"
                        defaultValue= {props.diploma.institution_name}
                        
                        
                        variant="outlined"
                        
        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.institution_name && {error:true, helperText:props.Errors.institution_name})}
                    >
                        
                        
                    </TextField>
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "CITY OF INSTITUTION"
                        type= "text"
                        id= "3"
                        name= "city"
                        defaultValue= {props.diploma.city}
                        
                        
                        variant="outlined"
                        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.city && {error:true, helperText:props.Errors.city})}
                    >
                        
                    </TextField>
                    </div>
                    <div className={classes.inputs}>
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "STATE OF INSTITUTION"
                        type= "text"
                        id= "4"
                        name= "state"
                        defaultValue= {props.diploma.state}
                        
                        
                        
                        variant="outlined"
                        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.state && {error:true, helperText:props.Errors.state})}
                    >
                        
                    </TextField>
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "PINCODE OF INSTITUTION"
                        type= "text"
                        id= "5"
                        name= "pincode"
                        defaultValue= {props.diploma.pincode}
                        
                        
                        variant="outlined"
                        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.pincode && {error:true, helperText:props.Errors.pincode})}
                    >
                        
                    </TextField>
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "YEAR OF PASSING"
                        type= "text"
                        id= "6"
                        name= "year_of_passing"
                        defaultValue= {props.diploma.year_of_passing}
                        
                        
                        variant="outlined"
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.year_of_passing && {error:true, helperText:props.Errors.year_of_passing})}
                    >
                        
                    </TextField>
                    </div>
                    <div className={classes.inputs}>
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "MAXIMUM MARKS"
                        type= "text"
                        id= "7"
                        name= "maximum_marks"
                        defaultValue= {props.diploma.maximum_marks}
                        
                        
                        variant="outlined"
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.maximum_marks && {error:true, helperText:props.Errors.maximum_marks})}
                    >
                        
                    </TextField>
                    
                    
  
                     
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "OBTAINED MARKS"
                        type= "text"
                        id= "8"
                        name= "obtained_marks"
                        defaultValue= {props.diploma.obtained_marks}
                        
                        
                        variant="outlined"
                        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.obtained_marks && {error:true, helperText:props.Errors.obtained_marks})}
                    >
                        
                    </TextField>
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "STREAM OF DIPLOMA"
                        type= "text"
                        id= "9"
                        name= "stream"
                        defaultValue= {props.diploma.stream}
                        
                        
                        variant="outlined"
                        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.stream && {error:true, helperText:props.Errors.stream})}
                    >
                        
                    </TextField>

                    </div>
</Grid>
                    /* <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline,
                          focused: classes.focused
                        }
                    }}
                        type={field.type}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        defaultValue={field.value}
                        select={field.select}
                
                        disabled={field.disabled}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    >
                      
                      {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                 

                    
                        </TextField> */
           
        )
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                Diploma Details
            </Typography>
            <CardContent>
                <Grid container>{renderDiplomaFields}
               
               </Grid>
            </CardContent>
           
        </>
    );
}