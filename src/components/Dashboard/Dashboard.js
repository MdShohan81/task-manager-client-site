import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {SummaryRequest} from '../../APIRequest/APIRequest'

const Dashboard = () => {

    useEffect(()=>{
        SummaryRequest();
    },[])

    const SummaryList = useSelector((state) => state.summary.value)

    return (
        <div className="container">
            <div className="row">
            {
                SummaryList.map((item, i) => <div key={i.toString()}  className="col-12 col-lg-3 col-sm-6 col-md-3  p-2 ">
                <div className="card h-100 text-white" style={{'background-color': '#CB0C9F'}}>
                   <div className="card-body">
                       <h5 className="animated fadeInUp">Total {item._id}</h5>
                       <h6 className=" animated fadeInUp">{item.sum}</h6>
                   </div>
               </div>
               </div>)
            }
            
            </div>
        </div>
    );
};

export default Dashboard;