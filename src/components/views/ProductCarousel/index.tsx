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

// export default class ProductCarousel extends Component<{ProductData : Array<oneProductType>}> {
//   getVal =() => {
//     console.log(this.props.ProductData);
//   }
//   render(): ReactNode{
//     const settings = {
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return(
//         <Slider {...settings}>
//        {this.props.ProductData.map((item:oneProductType, index:number)=>(
//         <Card key={index} singleProductData={item}/>
//       ))

//        }
//         </Slider>
//     )

//   }
// }





const ProductCarousel: FC<{ProductData: Array<oneProductType>}> = ({ProductData}: any)=> {
    let initialX: number;
    let isDragging = false;
    let tabBox: any;

    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    // Desktop functions
    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        console.log("moving orignal")
        isDragging = true;
    }
    function mouseUp() {
        isDragging = false
    }

    // mobile functions
    function mouseMovesForMobile(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            var currentX = e.touches[0].clientX;
            var movementX = currentX - initialX;
            tabBox.scrollLeft -= movementX / 5;
        }
    };
    function mouseDownForMobile(e: any) {
        isDragging = true;
        initialX = e.touches[0].clientX;
    };


    return (
        <div
            onMouseMove={mouseMoves}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            className="select-none flex gap-4 overflow-x-hidden scrollGrab"
            onTouchMove={mouseMovesForMobile}
            onTouchStart={mouseDownForMobile}
            onTouchEnd={mouseUp}
        >
            {ProductData.map((item: oneProductType, index: number) => (
                <Card key={index + 4} singleProductData={item} />
            ))}
        </div>
    )
}

export default ProductCarousel