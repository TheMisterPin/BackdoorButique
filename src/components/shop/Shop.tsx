import { EdibleCard } from "../Index"
import edibles from '../../data/API/edibles.json';
import './shop.css'


export function Shop() {
  return(
    <>
    <section className="shop">
   
      <h1> Shop</h1>
      <ul className="products">
        {edibles.map(edible => (
   
          <li key={ edible.id }> <EdibleCard{ ...edible }/></li>))}
      </ul> </section></>)
}





