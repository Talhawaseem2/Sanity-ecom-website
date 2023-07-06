import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import Image from 'next/image'
import  ImageUrlBuilder  from "@sanity/image-url";
import { client } from '../../../sanity/lib/client';

const builder = ImageUrlBuilder(client);



function urlFor(source: any) {
    return builder.image(source)
  }




const Card: FC<{singleProductData: oneProductType}> = ({singleProductData}) => {
    
      
  return (
    <div className='border-4'>
        <div className='w-96'>
            <Image height={500} width={500} src={urlFor(singleProductData.image[0]).width(500).url()} alt={singleProductData.image[0].alt} />         
        </div>
        <div></div>
    </div>
  )
}

export default Card