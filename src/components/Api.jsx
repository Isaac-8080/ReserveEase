// import { useEffect, useState } from "react";
import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { GrGroup } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { v4 as uuid } from "uuid"
import { MdNumbers } from "react-icons/md";

const Api = () => {

  const [listing, setListing] = useState([
    {tableNumber: 1, guests : 7, status : "available", id : uuid()},
    {tableNumber: 2, guests : 5, status : "available", id : uuid()},
    {tableNumber: 3, guests : 10, status : "available", id : uuid()},
    {tableNumber: 3, guests : 10, status : "available", id : uuid()},
    {tableNumber: 5, guests : 2, status : "available", id : uuid()},
    {tableNumber: 4, guests : 3, status : "available", id : uuid()},
  ])

  // useEffect(() => {

  //   setTimeout(() => {
      
  //     const fetchProducts = async () => {
        
  //       try {
          
  //         const getData = await fetch("https://jsonplaceholder.typicode.com/users");
  //         const res = await getData.json();
  //         // setListing(res)

  //       } catch (error) {
          
  //         console.log(`Error : ${error}`);

  //       }

  //     }

  //     fetchProducts();

  //   }, 500)
    
  // }, [])
  
  return (
    <>
      {
      
        listing.map((list) => {
          return(
            <div key={list.id}>
              <Card>
                <div className="bg-[#F2F2F2] h-40"></div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 opacity-80">
                    <MdNumbers className="text-[20px] font-semibold" />
                    <p className="text-[16px] font-bold uppercase opacity-90">Table {list.tableNumber}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-80 mt-5">
                    <GrGroup className="text-[20px] font-semibold" />
                    <p className="text-[16px] font-semibold uppercase">{list.guests} guess maximum</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-80">
                    <BsClock className="text-[20px] font-semibold" />
                    <p className="text-[16px] font-semibold uppercase">{list.status}</p>
                  </div>
                  <div>
                    <Button type="submit" text="Reserve table" />
                  </div>
                </div>
              </Card>
            </div>
          )
        })
      
      }
    </>
  )
}

export default Api
