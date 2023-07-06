"use client"
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { FC } from "react"
import Card from "../Card";


const ProductCarousel: FC<{ProductData: Array<oneProductType>}> = ({ProductData}: any) => {
  let dataToSend = ProductData.slice(0,3)
  return (
    <div className="flex">
      {dataToSend.map((item:oneProductType, index:number)=>(
        <Card key={index} singleProductData={item}/>
      ))
      }
    </div>
  )
}

export default ProductCarousel