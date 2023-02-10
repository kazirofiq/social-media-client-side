import React, {  } from 'react';
import { Link } from 'react-router-dom';

const AboutDetails = ({about, setTreatment}) => {
    const {_id, name, email, university, address} = about;
    
    return (
        <section>
            <div className='flex justify-end'>
            <div className="card-actions justify-center">
              
              <label
                    //  disabled={slots.length === 0}
                     htmlFor="booking-modal" 
                     className="btn btn-primary w-2/3 uppercase text-white"
                     onClick={() => setTreatment(about)}
                     >Edit</label>
                    </div>
          </div>
             
                    <div className="overflow-x-auto">
              <table className="table table-compact w-full">
                <thead>
                  <tr>
                    <th></th> 
                    <th>Name</th> 
                    <th>Email</th> 
                    <th>University</th> 
                    <th>Address</th> 
                  </tr>
                </thead> 
                <tbody>
                  <tr>
                    <th></th> 
                    <td>{name}</td> 
                    <td>{email}</td> 
                    <td>{university}</td> 
                    <td>{address}</td> 
                    
                  </tr>
                </tbody> 
              </table>
            </div>
        </section>
       
    );
};

export default AboutDetails;