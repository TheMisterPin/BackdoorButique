import { EdibleCard } from "../components/Index"
import edibles from "../data/API/edibles.json"

export function ShopHome() {
  return
  <>
    <h1> Shop</h1>
    <ul className="Edibles">
      {edibles.map(edible => (

        <li key={ edible.id }> <EdibleCard{ ...edible }/></li>))}
    </ul></>
}
