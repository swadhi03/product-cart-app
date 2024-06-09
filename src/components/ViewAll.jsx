import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
        const fetchData=()=>{
            axios.get("https://fakestoreapi.com/products").then(
                (response)=>{
                    console.log(response.data)
                    changeData(response.data)
                }
            ).catch().finally()

        }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    {data.map
                    (
                        (value,index)=>{
                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card">
                                <img src={value.image} height="300px" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{value.id}</h5>
                                    <p className="card-text">Title : {value.title}</p>
                                    <p className="card-text">Price : {value.price}</p>
                                    <p className="card-text">Description : {value.description}</p>
                                    <a href="#" class="btn btn-primary">Buy Now</a>
                                </div>
                            </div> 
                            </div>
                        }
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll