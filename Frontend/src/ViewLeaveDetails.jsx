import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ViewLeaveDetails() {
    let [empleaves, setempleaves] = useState([]);
    let [modal, setmodal] = useState(false);

    let [firstname, setfirstname] = useState("");
    let [lastname, setlastname] = useState("");
    let [empid, setempid] = useState(0);
    let [fromdate, setfromdate] = useState("");
    let [todate, settodate] = useState("");
    let [reason, setreason] = useState("");
    let [leaveid, setleaveid] = useState(0);
    let [relode, setrelode] = useState(false);
    
    let app=process.env.REACT_APP_SERVER_IP

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userinfo"));

        if (!user.empid) return;

        axios.get(`http://localhost:8080/findleavebyempid?empid=${user.empid}`)
            .then((response) => {
                setempleaves(response.data);
            })
            .catch(() => {
                alert("Server error while fetching leaves");
            });
    }, [relode]);

    let cancelLeave = (leaveid) => {
        let permit = window.confirm("Do you want to delete this record permanently?");
        if (permit) {
            axios.delete(`http://localhost:8080/cancelleave?leaveid=${leaveid}`)
                .then((response) => {
                    alert(response.data);
                    setrelode(!relode);
                })
                .catch(() => {
                    alert("Server error while canceling leave");
                });
        }
    };

    let readytoupdate = (l) => {
        setmodal(true);
        setempid(l.employee.empid);
        setfirstname(l.firstname);
        setlastname(l.lastname);
        setreason(l.reason);
        setfromdate(l.fromdate);
        settodate(l.todate);
        setleaveid(l.leaveid);
    };

    let updateleave = (event) => {
        event.preventDefault();

        let newleave = { fromdate, todate, reason };

        axios.put(`http://localhost:8080/updateleave?leaveid=${leaveid}`, newleave)
            .then((response) => {
                alert(response.data);
                setmodal(false);
                setrelode(!relode);
            })
            .catch(() => {
                alert("Update leave error");
            });
    };

    return (
        <div>
            <table className='table table-bordered table-info'>
                <thead>
                    <tr>
                        <th>EmpId</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Reason</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Status</th>
                        <th>Leave Id</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {empleaves.map((l) => (
                        <tr>
                            <td>{l.employee.empid}</td>
                            <td>{l.firstname}</td>
                            <td>{l.lastname}</td>
                            <td>{l.reason}</td>
                            <td>{l.fromdate}</td>
                            <td>{l.todate}</td>
                            <td>{l.status}</td>
                            <td>{l.leaveid}</td>
                            <td className='d-flex gap-2'>
                                <button className='btn btn-warning'
                                    onClick={() => cancelLeave(l.leaveid)}>
                                    Cancel
                                </button>

                                <button className='btn btn-danger'
                                    disabled={l.status === "approve"}
                                    onClick={() => readytoupdate(l)}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modal && (
                <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Update Leave</h5>
                                <button className="btn-close"
                                    onClick={() => setmodal(false)} />
                            </div>

                            <div className="modal-body">
                                <form onSubmit={updateleave}>

                                    <input type="number" className="form-control mb-2"
                                        value={empid} readOnly />

                                    <input type="text" className="form-control mb-2"
                                        value={firstname} readOnly />

                                    <input type="text" className="form-control mb-2"
                                        value={lastname} readOnly />

                                    <input type="date" className="form-control mb-2"
                                        value={fromdate}
                                        onChange={(e) => setfromdate(e.target.value)} />

                                    <input type="date" className="form-control mb-2"
                                        value={todate}
                                        onChange={(e) => settodate(e.target.value)} />

                                    <input type="text" className="form-control mb-2"
                                        value={reason}
                                        onChange={(e) => setreason(e.target.value)} />

                                    <button className="btn btn-primary w-100">
                                        Update
                                    </button>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}