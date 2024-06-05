import {Grid, MenuItem, Select, withStyles, Button, CircularProgress} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import {useState} from 'react'
import MuiButton from '@material-ui/core/Button'
// import userService from '../services/user.service';



const styles = theme => ({
    mainDiv: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(0,0,0, 0.6)',
        zIndex: '99999999999'
    },
    closeDiv:{
        position: 'absolute',
        top: '9%',
        right: '30%',
        padding: '8px',
        zIndex:9999,
    },
    contentDiv: {
        width: '40%',
        position: 'absolute',
        top: '10%',
        left: '30%',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '10px'
    },
    contentDivHeader: {
        width: '100%',
        padding: '10px',
        textAlign: 'center'
    }, 
    selectMenu:{
        '& .MuiOutlinedInput-input':{
            padding: '8px'
        }
    },
    fileSelect: {
        fontSize: '17px'
    }
})

const statusColorCodes = {
    '200': 'green',
    '444': 'orange',
    '400': 'red',
    '500': 'red',
    '201': 'red'
}

function UploadExcelPopUp(props){

        
    const [uploadExcelPopUp, setUploadExcelPopUp] = useState(false)
    const [selectFile, setSelectFile] = useState(()=>undefined)
    const [errMsg, setErrMsg] = useState(()=>({status: false, msg: '', color: 'white', code: 0}))
    const [loading, setLoading] = useState(()=>false)

    function closePopUp(){

        setSelectFile(undefined)
    }

    function handleFile(e){
        console.log(e.target.files[0], 'uploadfileexcel')
        if(e.target.files[0] == undefined){
            return false
        }

        let fileExt = e.target.files[0]
        fileExt = String(fileExt.name).split('.')
        fileExt = fileExt[fileExt.length - 1]
        if(!['xlsx', 'xlsm', 'xlsb', 'xltx'].includes(String(fileExt).toLowerCase())){
            alert("Please Upload Excel Files Only")
            setSelectFile(undefined)
            return false
        }
        
        setSelectFile(e.target.files[0])

    }
    const handleOpen = () => {
        setUploadExcelPopUp(true);
      };
    
      const handleClose = () => {
        setUploadExcelPopUp(false);
      };

    // async function submitData(){
    //     console.log('callinguploadapi')
    //     if(selectFile == undefined){
    //         alert("Please Select Excel File")
    //         return false
    //     }
    //     const payload = new FormData()
        
    //     payload.append('file', selectFile)
    //     setLoading(true)
    //     let response = await userService.uploadFpoLeads(payload).catch((error)=>({data:{status: 201,data: {data:  {}}, msg: 'Something Went Wrong!'}}))
    //     response = response.data
    //     console.log(response, 'upresponse')
    //     if(response.code != 200){
    //         // show erro msg
    //         setLoading(false)
    //         setErrMsg({status: false, msg: response.msg, code: response.code, color: statusColorCodes[String(response.code)]})
    //         return false
    //     }
    //     setLoading(false)
    //     setErrMsg({status: true, msg: response.msg, code: response.code, color: statusColorCodes[String(response.code)]})
    //     // setTimeout(() => {
    //     //     closePopUp()
            
    //     // }, 6000);
    //     // show success msg
    //     // and close the popup

    // }

    const {classes} = props
    // console.log(orgData, 'gettinguploadexcelpopup', masterData)
    return (
        <div>
             {!uploadExcelPopUp && (
        // <button onClick={handleOpen}>Open Upload Page</button>
        <MuiButton
            onClick={handleOpen}
            variant="contained"
            color="primary"
            // className={classes.button}
            // startIcon={<CloudUploadIcon />}
            style = {{backgroundColor: 'rgb(114, 49, 12)', color: 'white'}}
        >
            Upload Excel
        </MuiButton>
      )}
            {
                uploadExcelPopUp  && 
                <div className={classes.mainDiv}>
                    <div className={classes.closeDiv}>
                        <CancelPresentationIcon style = {{color: 'rgb(114, 49, 12)', cursor: 'pointer'}} fontSize="large" onClick = {handleClose}/>
                    </div>
                    <div className={classes.contentDiv}   >
                        <div className={classes.contentDivHeader} >
                            <h4 style={{color: 'rgb(114, 49, 12)'}}>Upload potential signature data  </h4>
                        </div>
        
                        <div className={classes.contentDivMain}  style={{position:'relative', left:'65px'}} >
                            <Grid container>
                                
                                
                                   
                                        <Grid item sm = '4'>
                                            <input type = "file" className={classes.fileSelect} onChange={handleFile}/>
                                        </Grid>
                                        <Grid item sm = '2'  style={{position:'relative', left:'130px'}}>
                                            {errMsg['code'] != 200 && <Button variant='contained' style = {{backgroundColor: 'rgb(114, 49, 12)', color: 'white'}} disabled = {loading} >{loading && <CircularProgress size={15} style = {{color: 'white', fontWeight: '600'}} />} Upload</Button>}
                                        </Grid>
                            
                           
                                
                            </Grid>
                            <Grid container>
                                <Grid item sm = {12} style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '10px'}}>
                                    <p style = {{color: errMsg['color'], margin: '0px', fontSize: '15px'}}>{errMsg['msg']}</p>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                  
        
                </div>
            }
        </div>
    )
}



export default withStyles(styles, {withTheme: true})(UploadExcelPopUp)