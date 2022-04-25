
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './body.css';
import Percentage from './percentage.js';
import {Timer} from "./Timer.js";
function Body({hoursMinSecs}) {
    const [user, setUser] = useState([]);

    const fetchData = async () => {
        await axios.get('https://demo3755793.mockable.io/plans').then((response) => {
            console.log(response.data);
            setUser(response.data)
        })
    }
  
 
    useEffect(() => {
        fetchData();
        
     }, [])

    return (
        <>

            <h1 className='body1'> Buy a plan  and be Interview read!</h1>
            <div className="container">
                {user?.map(data => (
                    <div  key={data.url}>
                        <div className="box navh">
                            <h1 className='body2'>FLAT 30% OFF</h1>
                                            <div className='time-per'>
                                                <div>
                                            <h5>Offer ends in</h5>
                                            <Timer/>
                                            </div>
                                            <div>
                                            <Percentage/>
                                            </div>
</div>
                            <div className="content">
                                <h5 className='button1' style={{'backgroundColor':data.offerColor}}> {data.saver}
                                </h5>
                                    {data.content.map(datas=>(
                                        <p>&#10004;{datas}</p>
                                     ))}
                                    <br />
                                    <p> <h4>&#128161;This plan suits you if you're already busy</h4><h5>
                                         with academic projects and other classes </h5></p>
                                         <p><h5 className='text-info'>Flat 30% OFF for being referred by Saurabh
                                         </h5></p>
                                    <p>
                                        <hr>
                                        </hr>
                                    <span className='price1'>&#8377;{data.price}</span>
                                    <h5 className='text-danger ghj'>Save 30%</h5>
                                    <h5 ><del>&#8377;{data.price-1000}</del></h5>
                                    </p>
                                    <button className="btn" type="submit">Buy Now</button>


                                
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Body