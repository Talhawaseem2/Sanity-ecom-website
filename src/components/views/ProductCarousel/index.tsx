"use client"
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { Component, FC, ReactNode } from "react"
import Card from "../Card";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

// const ProductCarousel: FC<{ProductData: Array<oneProductType>}> = ({ProductData}: any) => {
//   return (
//     <div className="flex">
//       {ProductData.map((item:oneProductType, index:number)=>(
//         <Card singleProductData={item}/>
//       ))
//       }
//     </div>
//   )
// }

// export default ProductCarousel

export default class ProductCarousel extends Component<{ProductData : Array<oneProductType>}> {
  getVal =() => {
    console.log(this.props.ProductData);
  }
  render(): ReactNode{
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return(
        <Slider {...settings}>
       {this.props.ProductData.map((item:oneProductType, index:number)=>(
        <Card singleProductData={item}/>
      ))

       }
        </Slider>
    )

  }
}