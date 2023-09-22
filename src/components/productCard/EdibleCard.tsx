import { currencyFormat } from '../../Utils/currencyHandler';
type EdibleCardProps = {
    id :string;
    name: string;
image: string;
    price: number;
    description: string;}

    export function EdibleCard({id, name, image, price, description}: EdibleCardProps){
    const quantity = 0    
    return(<>
    <div className="card" key={id}>
      
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p>{ currencyFormat(price)}</p>
</div>


<div className="cardFooter">

</div>



    <div className="counterButton">
    <button>+</button>
    <button>-</button>
    </div>
    

    
    
    </>)}