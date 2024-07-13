// import React, { useContext, useEffect } from 'react'
// import './Verify.css'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { StoreContext } from '../../context/storecontext';

// const Verify = () => {


//     const [searchParams,setSearchParams] = useSearchParams();
//     const success = searchParams.get("success")
//     const orderId = searchParams.get("orderId")
//     const {url} = useContext(StoreContext);
//     const navigate = useNavigate();

//    // console.log(success,orderId);

//    const verifyPayment = async () =>{
//     const response = await axios.post(url+"/api/order/verify",{success,orderId});
//     if(response.data.success){
//         navigate("/myorders");
//     }
//     else{
//         navigate("/");
//     }
//    }

//    useEffect(()=>{
//          verifyPayment();
//    },[success,navigate])

//   return (
//     <div className='Verify'>
//       <div className="spinner"></div>
//     </div>
//   )
// }

// export default Verify;

// new code
// import React, { useEffect, useContext } from 'react';
// import './Verify.css';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/storecontext';

// const Verify = () => {
//     const [searchParams] = useSearchParams();
//     const success = searchParams.get("success");
//     const orderId = searchParams.get("orderId");
//     const navigate = useNavigate();
//     const { url } = useContext(StoreContext);

//     useEffect(() => {
//         if (success === "true") {
//             // Perform any necessary actions on success (e.g., updating order status in the context)
//             // Then redirect to the myorders page
//             navigate('/myorders');
//         } else {
//             // Handle the failure case (e.g., display an error message or redirect to a different page)
//             navigate('');
//         }
//     }, [success, navigate]);

//     return (
//         <div className='Verify'>
//             <div className="spinner"></div>
//         </div>
//     );
// };

// export default Verify;


import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/storecontext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error('Payment verification failed:', error);
            navigate("/");
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []); // Ensure this effect runs only once

    return (
        <div className='Verify'>
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;
