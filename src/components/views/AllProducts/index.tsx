import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { Component, ReactNode } from "react";
import { component } from "sanity/desk";

interface propsType {
    productArray:Array<oneProductType>
}

export default class AllProductsCompo extends Component <{ProductData: propsType}> {
    getData = () => {
        console.log(this.props.ProductData.productArray[0].price)
    }
    render() {
        return(
            <div onClick={this.getData}>{this.props.ProductData.productArray[0].price}</div>
        )
    }
}