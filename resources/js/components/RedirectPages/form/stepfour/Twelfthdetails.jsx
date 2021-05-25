import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MenuItem from "@material-ui/core/MenuItem";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({

    cardHeading: {
        color: theme.palette.primary.dark,
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        backgroundColor: "#038ed459",
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "20px 0px",
        width: "30%",
    },
    inputs: {
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        padding: "10px 0px",
        width: "100%",
    },
    fields: {
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

export default function TwelfthDetails(props) {
    const classes = useStyles();
    const currencies = [
        {
            value: '1',
            label: 'CBSE',
        },
        {
            value: '2',
            label: 'ICSE',
        },
        {
            value: '3',
            label: 'PSEB',
        }
    ];
    const currencies2 = [
        {
            value: "1",
            label: "CGPA"
        },
        {
            value: "2",
            label: "PERCENTAGE"
        }

    ];

    const fields = [
        {
            label: "BOARD",
            type: "text",
            id: 1,
            value: props.twelfth.board,

            select: "true",
            options: [

                {
                    value: "ONE",
                    label: "CBSE",
                },
                {
                    value: "TWO",
                    label: "ICSE",
                },
                {
                    value: "THREE",
                    label: "PSEB",
                }
            ]
        },
        {
            label: "INSTITUTION NAME",
            type: "text",
            id: 2,
            value: props.twelfth.institution_name,
        },
        {
            label: "JEE RANK * FILL NA IF NOT APPEARED",
            type: "text",
            id: 3,
            value: props.twelfth.jee_rank,
        },
        {
            label: "CITY OF INSTITUTION",
            type: "text",
            id: 4,
            value: props.twelfth.city,
        },
        {
            label: "STATE OF INSTITUTION",
            type: "text",
            id: 5,
            value: props.twelfth.state,
        },
        {
            label: "PINCODE OF INSTITUTION",
            type: "text",
            id: 6,
            value: props.twelfth.pincode,

        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 7,
            value: props.twelfth.year_of_passing,

        },
        {
            label: "MARKS TYPE",
            type: "text",
            id: 8,
            select: "true",
            value: props.twelfth.marks_type,
        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 9,
            value: props.twelfth.obtained_marks,
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 10,


            value: props.twelfth.maximum_marks,
        },
        // {
        //     label:"",
        //     type: "file",
        //     id: 10,
        //     inputid:"pdf-file",
        //     value: props.twelfth.file,  
        // }
    ];

    const rendertwelfthFields = (
        // fields.map(field => (
        //     <>
        <Grid container>
            <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="BOARD"
                    type="text"
                    id="1"
                    name="board"
                    defaultValue={props.twelfth.board}



                    variant="outlined"



                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.board && { error: true, helperText: props.Errors.board })}
                >
                {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}

                </TextField>
            </Grid>
            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="INSTITUTION NAME"
                    type="text"
                    id="2"
                    name="institution_name"
                    defaultValue={props.twelfth.institution_name}
                    variant="outlined"
                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.institution_name && { error: true, helperText: props.Errors.institution_name })}
                >


                </TextField>
            </Grid>
            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="JEE RANK * FILL NA IF NOT APPEARED"
                    type="text"
                    id="3"
                    name="jee_rank"
                    defaultValue={props.twelfth.jee_rank}


                    variant="outlined"


                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.jee_rank && { error: true, helperText: props.Errors.jee_rank })}
                >

                </TextField>
            </Grid>
            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="CITY OF INSTITUTION"
                    type="text"
                    id="4"
                    name="city"
                    defaultValue={props.twelfth.city}



                    variant="outlined"


                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.city && { error: true, helperText: props.Errors.city })}
                >

                </TextField>
            </Grid>
            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="STATE OF INSTITUTION"
                    type="text"
                    id="5"
                    name="state"
                    defaultValue={props.twelfth.state}


                    variant="outlined"


                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.state && { error: true, helperText: props.Errors.state })}
                >

                </TextField>
            </Grid>
            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="PINCODE OF INSTITUTION"
                    type="text"
                    id="6"
                    name="pincode"
                    defaultValue={props.twelfth.pincode}


                    variant="outlined"

                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.pincode && { error: true, helperText: props.Errors.pincode })}
                >

                </TextField>
            </Grid>
            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="YEAR OF PASSING"
                    type="text"
                    id="7"
                    name="year_of_passing"
                    defaultValue={props.twelfth.year_of_passing}


                    variant="outlined"


                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.year_of_passing && { error: true, helperText: props.Errors.year_of_passing })}
                >

                </TextField>
            </Grid>
            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="MARKS TYPE"
                    type="text"
                    id="8"
                    name="marks_type"
                    select="true"

                    defaultValue={props.twelfth.marks_type}


                    variant="outlined"


                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.marks_type && { error: true, helperText: props.Errors.marks_type })}
                >
                    {currencies2.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

            </Grid>

            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="OBTAINED MARKS"
                    type="text"
                    id="10"
                    name="obtained_marks"
                    defaultValue={props.twelfth.obtained_marks}


                    variant="outlined"


                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.obtained_marks && { error: true, helperText: props.Errors.obtained_marks })}
                >

                </TextField>
            </Grid>

            <Grid

                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.textFieldContainer}
            >
                <TextField
                    className={classes.fields}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused
                        }
                    }}
                    label="MAXIMUM MARKS"
                    type="text"
                    id="9"
                    name="maximum_marks"
                    value={props.twelfth.maximum_marks}


                    variant="outlined"

                    disabled={props.twelfth.marks_type === "1" ? true : false}
                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.maximum_marks && { error: true, helperText: props.Errors.maximum_marks })}
                >

                </TextField>
            </Grid>
            {(props.twelfth.marks_type == "2") && (parseFloat(props.twelfth.obtained_marks) > 0) && (parseFloat(props.twelfth.maximum_marks)) > 0 ?
                <Grid
                    xs={12}
                    sm={6}
                    lg={4}
                    item
                    className={classes.textFieldContainer}
                >

                    <TextField
                        className={classes.fields}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                            }
                        }}
                        label="PERCENTAGE"
                        type="text"
                        id="11"
                        name="percentage"
                        value={((parseFloat(props.twelfth.obtained_marks) / parseFloat(props.twelfth.maximum_marks)) * 100).toFixed(2)}
                        variant="outlined"
                        disabled={true}

                    >

                    </TextField>
                </Grid>
                : ""
            }
        </Grid>
    )
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                XII Details
            </Typography>
            <CardContent>
                {rendertwelfthFields}
            </CardContent>
        </>
    );
}