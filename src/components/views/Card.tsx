import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import Image from 'next/image'
import  ImageUrlBuilder  from "@sanity/image-url";
import { client } from '../../../sanity/lib/client';
// import PortableText from 'react-portable-text';

const builder = ImageUrlBuilder(client);



function urlFor(source: any) {
    return builder.image(source)
  }




const Card: FC<{singleProductData: oneProductType}> = ({singleProductData}) => {
    
      
  return (
    <div className='max-w-sm min-w-[24rem] space-y-3'>
        <div className='w-full'>
            <Image height={1000} width={1000} src={urlFor(singleProductData.image[0]).width(500).url()} alt={singleProductData.image[0].alt} />         
        </div>
        <div className='space-y-1 text-gray-600 font-semibold text-lg'>
          <h6>{singleProductData.productName}</h6>
          {/* <PortableText className='text-sm font-normal' content={singleProductData.description} /> */}
          <p>${singleProductData.price}</p>
        </div>
    </div>
  )
}

export default Card