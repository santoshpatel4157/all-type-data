import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});
    const getData=()=>{
        fetch("https://retoolapi.dev/uwJu1R/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h4>The Employee name is : <b>{empdata.firstname}</b> <b>{empdata.lastname}</b>  ({empdata.id})</h4>
                        <h4>Contact Details</h4>
                        <h5>Email is : {empdata.email}</h5>
                        <h5>Phone is : {empdata.mobileno}</h5>
                        <h4>Others Details</h4>
                        <h6>gender is : {empdata.gender}</h6>
                        <h6>City is : {empdata.city}</h6>
                        <h6>Birthdate is : {empdata.birthdate}</h6>
                        <h6>Hobbies is : {empdata.hobbies}</h6>
                        <h6>File is : {empdata.file}</h6>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;