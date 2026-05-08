import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
export default function ShowEmployee() {

    let [emplist, setemplist] = useState([]);
    
    //search by
    let [searchby, setsearchby] = useState("");
    let [keyword, setkeyword] = useState("");
    let [searchresult, setsearchresult] = useState([]);

      let app=process.env.REACT_APP_SERVER_IP

    useEffect(() => {

        axios.get(`http://localhost:8080/getemplist`)
            .then((response) => {
                setemplist(response.data);
            })
            .catch((error) => { "server error" });
    }, [])

   
    let searchemployee = () => {
        let url;

        if (searchby == "firstname") {
            url = `http://localhost:8080/getempbyfname?firstname=${keyword}`;
        }
        else if (searchby == "lastname") {
            url = `http://localhost:8080/getempbylname?lastname=${keyword}`;
        }
        else if (searchby == "designation") {
            url = `http://localhost:8080/getempbydesignation?designation=${keyword}`;
        }
        else if (searchby == "department") {
            url = `http://localhost:8080/getempbydepartment?department=${keyword}`;
        }
        else if (searchby == "empid") {
            let keyword1 = parseInt(keyword);
            url = `http://localhost:8080/getempbyid?empid=${keyword1}`;
        }
        else {
            alert("select serch by option")
        }


        axios.get(url)
            .then((response) => {
                
                if (response.data.length == 0 || response.data == null) {
                    alert(`no recorde fount for given ${keyword}. wew are showing all employee list`);
                    setsearchresult([]);
                    //setrelode(!relode);
                }
                else {
                    setsearchresult([])
                    if (Array.isArray(response.data)) {
                        setsearchresult(response.data)
                    }
                    else {
                        setsearchresult([response.data]);
                    }
                    console.log(response.data);
                }
            })
            .catch((erroe) => { "server error" })

    }
    return (

        <div>
            <div className='d-flex gap-2'>
                select searchby:<select onChange={(event) => { setsearchby(event.target.value) }}>
                    <option>select</option>
                    <option value="firstname">firstname</option>
                    <option value="lastname">lastname</option>
                    <option value="designation">designation</option>
                    <option value="department">department</option>
                    <option value="empid">empid</option>
                </select>
                {searchby && <div> <input type="text" placeholder={`enter ${searchby}`} onChange={(event) => { setkeyword(event.target.value) }} />
                    <button className='btn btn-info gap-2' onClick={searchemployee}>search</button>
                </div>}



            </div>
            <div className='container-fluid'>
                <div className='row mb-5 gy-3'>
                    {
                        (searchresult.length > 0 ? searchresult : emplist).map((emp) =>
                            <div className='col'>
                                <div class="card" style={{ "width": "18rem" }}>
                                    <img src={emp.profile} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{emp.firstname} {emp.middlename} {emp.lastname}</h5>
                                        <p class="card-text">
                                            <p>Emp Id :<strong>{emp.empid}</strong></p>
                                            <p>Email:<strong>{emp.email}</strong></p>
                                            <p>ContactNo:<strong>{emp.contactno}</strong></p>
                                            <p>Department:<strong>{emp.department}</strong></p>
                                            <p>Designation:<strong>{emp.designation}</strong></p>
                                            <p>Dob:<strong>{emp.dob}</strong></p>
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            
        </div>
    )
}