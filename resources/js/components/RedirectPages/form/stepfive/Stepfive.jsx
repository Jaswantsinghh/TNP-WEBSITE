import React,{useState, useEffect} from "react";
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Degreedetails from "./Degree";
import Notisfication from '../../../Auth/Notisfication';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    paper: {
        padding: theme.spacing(1),

        color: theme.palette.text.secondary
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,

    },
    hr: {
        color: "#038ed4",
        font: "2px"
    },
    cardHeading: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        background: theme.palette.primary.main
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    Cardcontainers: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px 0px"
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    btnBox:{
        width: "90%",
        margin: "20px auto",
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
    },
    button: {
        // marginRight: theme.spacing(1)
        border: "none",
        textDecoration: "none",
        padding: "10px 35px",
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
        borderRadius: "20px",
        boxShadow: "0px 15px 25px #038ed433",
        "&:focus":{
            outline: "none"
        },
        "&:hover":{
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        },
    },
    fileShow:{
        width: "90%",
        margin: "auto"
    },
    cardStyles: {
        width: "90%",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033"
    },
    alert: {
        margin: "auto",
        width: "90%",
      },
    fileupload:{
        width: "90%",
        marginLeft: "60px",
        padding: "20px 0"
    },
    radio:{
        width: "100%",
        padding: "10px",
    },
    pos: {
        float: "right"
    },
    heading: {
        paddingTop: "20px"
    },
    para:{
        color: "#000"
    },
    loader:{
        padding: "10px"
    },
    box: {
        margin: "30px auto 60px",
        width: "60%",
        alignContent: "center",
        background: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033",
        ['@media (max-width:960px)']: {
            width: "90%"
          }
    },
}));



export default function StepFive(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);
    const [loader, setLoader] = React.useState(false);
    const [file, setFile] = React.useState("");
    const [notify, setNotify] = useState({isOpen:false, message:"", type:""});
    const [degree, setDegree] = React.useState({
        institution_name: "",
        city: "",
        state: "",
        pincode: "",
        marks_type: "",
        obtained_marks: "",
        maximum_marks: "",
        year_of_passing: "",
        branch:""
    });
   
    
    const handleDegreeChangeInput = (e, id) => {
        
        const name= e.target.name
        const value= e.target.value   
        if(name === "marks_type"){
            if(value === "1" )
            setDegree(prevState => ({
                ...prevState,
                marks_type : value,
                maximum_marks : 10
            }))
                
        }
        setDegree(prevState => ({
            ...prevState,
            [name] : value
        }))
    };


    const [errors, setErrors] = useState({});

    const validate = () => {
        let temp = {}
        temp.branch = degree.branch ? "": "Required"
        temp.institution_name = (/^[a-zA-Z\s]*$/).test(degree.institution_name) && degree.institution_name? "": "Required and can only have letters [A-Z] and/or [a-z]"
        temp.year_of_passing = (/^[0-9]{4}$/).test(degree.year_of_passing) ? "": "Required and the acceptable format is yyyy."
        temp.marks_type = degree.marks_type ? "": "This field is required."
        temp.state = (/^[a-zA-Z\s]*$/).test(degree.state) && degree.state? "": "Required and can only have letters [A-Z] and/or [a-z] "
        temp.city = (/^[a-zA-Z\s]*$/).test(degree.city) && degree.city? "": "Required and can only have letters [A-Z] and/or [a-z]."
        temp.obtained_marks = degree.obtained_marks ? "": "Required."
        temp.pincode = (/^[0-9]{6}$/).test(degree.pincode) ? "": "Required and must be exactly 6 digits."
        temp.maximum_marks = (/^[0-9]{1,3}$/).test(degree.maximum_marks) ? "": "Marks must be inclusive of [0-999]."
        temp.obtained_marks = degree.obtained_marks<=degree.maximum_marks ? "": "Obtained marks can be atmost equal to maximum marks."
        if(degree.marks_type == "1"){
            temp.obtained_marks = parseFloat(degree.obtained_marks)>=0   && parseFloat(degree.obtained_marks)<=10  ? "" : "CGPA must be inclusive of [0-10]"
            temp.maximum_marks = parseFloat(degree.maximum_marks) == "10"?"":"Maximum percentage can be 100"

        }else{

            temp.obtained_marks = parseFloat( degree.obtained_marks ) <= parseFloat(degree.maximum_marks) && parseFloat(degree.obtained_marks)>0 ? "": "marks obtained can't be greater than maximum marks."

        }
        setErrors({
          ...temp
        })
        var filter =  Object.keys(temp);
        var ok = "";
        return filter.every(x => temp[x].valueOf() === ok.valueOf());
      }
    
    const handleFormSubmit = event => {
        event.preventDefault();
        var fileSize = document.getElementById('degreefile').files[0].size / 1024 / 1024;
        if(fileSize>1){
            setNotify({isOpen: true, message: "File Size should be less than 1 MB.", type: "error"});
            return;
        }
        if(validate()){
        setLoader(true);  

        const token = localStorage.getItem("token");
        const fd = new FormData();
        Object.keys(degree).forEach(function (key){         
            fd.append(key, degree[key]);
    })
        fd.append('file', document.getElementById('degreefile').files[0]);
        console.log(fd)
        axios
            .post(`/api/degreedetails`, 
                fd,{
                    headers: { 'Authorization': 'Bearer ' + token }
                }
            )
            .then(response => {
                if(response.data.msg === "stepcomplete"){
                    setLoader(false);
                    props.Complete();
                    props.Next();
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    };
    const fetchDetails = async () => {
        var token= localStorage.getItem("token")
        const res = await axios.get(`/api/degreedetails`, {headers: { 'Authorization': 'Bearer ' + token }  });
        if(res.data.details!==null){
            setDegree({
                institution_name: res.data.details["institution_name"],
                city: res.data.details["city"],
                state: res.data.details["state"],
                pincode: res.data.details["pincode"],
                marks_type: res.data.details["marks_type"],
                obtained_marks: res.data.details["obtained_marks"],
                maximum_marks: res.data.details["maximum_marks"],
                branch: res.data.details["branch"],
                year_of_passing: res.data.details["year_of_passing"]
            });
            var fullpath = res.data.details['file'];
            var filename = fullpath.split('\\').pop().split('/').pop();;
            setFile(filename);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchDetails();
    },[])

    if(loading){
        return(
            <Card className={classes.box}>
                <div className={classes.heading}>
                    <div className={classes.loader}>
                <CircularProgress color="#193b68" size="80px" />
                </div>
                <b>
                    <p className={classes.para}>
                        Checking the Step 5 - Degree Status
                    </p>
                </b>
                </div>
            </Card>
        )
    }
    return (
        <div>
            <form onSubmit={event => handleFormSubmit(event)}>
              
                <Grid container className={classes.container}>
         <Grid item xs={12} className={classes.Cardcontainers}>
          
            <Card className={classes.cardStyles}>
                <Degreedetails
                    degree={degree}
                    handleInputChange={handleDegreeChangeInput}
                    Errors= {errors}
                />
                 <hr />
                <Alert severity="info" className={classes.alert}>
                Note : Upload <CloudUploadIcon /> Scanned copies of your all 8 semester dmc's in one file.(PDF Only less than 1MB)<strong>(If you editing this form then you have to upload file again)</strong>
                            </Alert>
                <Notisfication notify={notify} setNotify={setNotify} className={classes.alert} />
                <input className={classes.fileupload} accept= "application/pdf" id="degreefile" type="file" required /> 
                <div className={classes.fileShow}>{file === "" ? <p></p> : <p><strong>The recently uploaded file(renamed):</strong> {file}</p>}</div>
            </Card>

        </Grid> 
                </Grid>
                <div className={classes.btnBox}>
                <button className={classes.button} onClick={props.Back}>
                    Back
                </button>
                {loader ? (
                            
                            <CircularProgress />
                        ):(
                <button type="submit" className={classes.button}>
                    Submit & Next
                </button>
                        )}
                </div>
            </form>
        </div>
    );
}
