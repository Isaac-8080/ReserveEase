// import { useEffect, useState } from "react";
import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { GrGroup } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { v4 as uuid } from "uuid"
import { MdNumbers } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import tableOne from "../assets/tableOne.jpg"
import tableTwo from "../assets/tableTwo.jpg"
import tableThree from "../assets/tableThree.jpg"
import tableFour from "../assets/tableFour.jpg"
import tableFive from "../assets/tableFive.jpg"
import tableSix from "../assets/tableSix.jpg"

const Api = () => {

  const [listing, setListing] = useState([
    {tableNumber: 1, guests : 7, status : "available", price : 30, image: tableOne, id : uuid()},
    {tableNumber: 2, guests : 5, status : "available", price : 30, image: tableTwo, id : uuid()},
    {tableNumber: 3, guests : 10, status : "available", price : 30, image: tableThree, id : uuid()},
    {tableNumber: 4, guests : 10, status : "Reserved", price : 30, image: tableFour, id : uuid()},
    {tableNumber: 5, guests : 2, status : "available", price : 30, image: tableFive, id : uuid()},
    {tableNumber: 6, guests : 3, status : "available", price : 30, image: tableSix, id : uuid()},
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
              <Card cardStyle="p-3">
                <img src={list.image} className="w-full h-45 rounded-t-md object-cover" />
                <div className="px-5 pt-5 space-y-3">
                  <div className="flex items-center gap-2 opacity-80">
                    <MdNumbers className="text-[20px] font-semibold" />
                    <p className="text-[16px] font-bold uppercase opacity-90">Table {list.tableNumber}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-80 mt-5">
                    <GrGroup className="text-[20px] font-semibold" />
                    <p className="text-[16px] font-semibold uppercase">{list.guests} guess maximum</p>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center gap-2 opacity-80">
                      <BsClock className="text-[20px] font-semibold" />
                      {
                      list.status === "available" ? (
                        <p className="text-[16px] font-semibold uppercase text-indigo-700">{list.status}</p>
                        ) : (
                        <p className="text-[16px] font-semibold uppercase line-through text-red-500">{list.status}</p>
                        )
                      }
                      
                    </div>
                    <div className="flex items-center gap-2 opacity-80">
                      <RiPriceTag3Line className="text-[20px] font-semibold" />
                      <p className="text-[16px] font-semibold uppercase text-indigo-700">{`$${list.price}`}</p>                  
                    </div>
                  </div>

                  <div>
                    <Button type="submit" text={list.status === "available" ? "Reserve table" : "Reserved"} />
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
