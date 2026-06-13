


// import { ServiceBase } from './service-base';
// export  class ProductService extends ServiceBase {
//     static getProducts =async () => {
//      var prodResp=await fetch(this.getUrl('/products'),{
//       // cache:'no-store'
//      });
//     var products= await prodResp.json();
    
//     return products;
//     }
//  static getProductById = async (id:number) =>{
//   var prodResp = await fetch (this.getUrl('/products/'+id));
//   var product= await prodResp.json();
//     return product;
//  }
// }

import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  static async getProducts() {
    return this.get("/products");
  }

  static async getProductById(id: number) {
    return this.get(`/products/${id}`);
  }
}
