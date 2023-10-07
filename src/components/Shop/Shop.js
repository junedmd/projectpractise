import React from "react";
import "./Shop.css";
import sweet from "./../../data/shop.json"

export default function Shop() {

    return (
        <>
            <div className="shop-conatainer .bg-success">
                <h1 className=" text-center text-light"> {sweet.title} </h1>
                <div className="box-cont">
                {
                    sweet.detail.map((info) => {
                        const { title, description, countity, price, image } = info;
                        return(

                            <div className="bx1">
                                 <img src={image} className="img1"/>
                                  <h1 className="text1"> {title}</h1> 
                                  <p className="text2"> special :{description} </p>
                                  <p className="text3"> count :{countity}</p>
                                  <p className="text4"> price : {price}</p>
                                 
                            </div> 
                            
                        )
                    })
                }

             </div>

            </div>

        </>
    )
}