import axios from "axios"
import { TProducts } from "./model"

const url = `https://api.escuelajs.co/api/v1/products`



export class Servicies<T>{
  allItems:T[]=[]
  constructor(){
    this.getAll()
  }
  async getAll(){
    const rep = await axios.get(url)
    this.allItems.push(rep.data)
    
  }
  showAll(){
    return this.allItems
  }

}

