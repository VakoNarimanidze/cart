import shoppingBag from '../Components/images/shopping-bag.png'
import nike from '../Components/images/nike.png'
import HM from '../Components/images/H&M.png'
import gucci from '../Components/images/GUCCI.png'
import { useState } from 'react'
import './cart.css'


// const Items = [
//     {
//         id: 1,
//         img:{nike},
//         Brand: 'Nike',
//         price: '$239,55',
//         name: 'superstar',
//         rate: 8.5,
//         button:'Add to cart'
//     },
//     {
//         id: 2,
//         img:{HM},
//         Brand: 'H&M',
//         price: '$14,99',
//         name: 'T-Shirt',
//         rate: "S",
//         button:'Add to cart'
//     },
//     {
//         id: 3,
//         img:{gucci},
//         Brand: 'Gucci',
//         price: '$1850,00',
//         name: 'CG Marmont',
//         rate: 8.5,
//         button:'Add to cart'
//     }
// ]

//  function CartItems(props) {
//     return (
//         <>
//             <div className="flex">
//                 <div className="img">
//                     <img src={props.nike} alt="" />
//                 </div>
//                 <div className="inline">
//                     <h3>{props.Brand}</h3>
//                     <p>{props.price }</p>
//                 </div>
//                 <h4>{props.name}</h4>
//                 <div className="inline">
//                     <h5>{props.rate}</h5>
//                     <button>{ props.button}</button>
//                 </div>

//         </div>
//         </>
//     )
// }


// export default function Cart() {
//     return (
//         <>
//             <div className="cart-container">
//                 <div className="cart-header">
//                     <h1>Shopping Cart</h1>
//                      <img src={shoppingBag} alt="" />
//                 </div>
//                 <div className="item-count">
//                 <span>3 Items</span>
//                  </div>
//                  (Items.map((item) => (<CartItems image={item.nike} brand={item.Brand} price={item.price} name={item.name} rate={ item.rate} button={item.button} />)))
//             </div>
//         </>
//     )
// }
export default function Shopping() {


  const [items, setItems] = useState([]);


  const AddPrice = (price) => {
    items.push(price);
    setItems([...items]);
  };


  const CountItems = items.length;


  const Total = 0;
  const TotalPrices = items
    .reduce((clicked, NumOfClicked) => clicked + NumOfClicked, Total)
    .toFixed(2);
  
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <div className="relative">
           <img src={shoppingBag} alt="Shopping Bag" className="shoppingBag" />
        <button className="cart-items">{CountItems}</button>
      </div>
        </div>
          <span>3 Items</span>
          <div className="flex margin">
              <div className="img">
                  <img src={nike} alt="" />
              </div>
              <div className="items">
                  <div className="flex2">
                      <h3>Nike</h3>
                      <h3>$239,55</h3>
                  </div>
                  <p>Superstar</p>
                  <div className="flex3">
                      <h5>8.5</h5>
                      <button onClick={() => AddPrice(239.55)} >Add to cart</button>
                  </div>
              </div>
        </div>
          <div className="flex">
                  <div className="img">
                      <img src={HM} alt="" />
                  </div>
            <div className="items">
                  <div className="flex2">
                      <h3>H&M</h3>
                      <h3>$14,99</h3>
                  </div>           
                  <p>T-Shirt</p>
                  <div className="flex3">
                      <h5>S</h5>
                      <button onClick={() => AddPrice(14.99)} >Add to cart</button>
                  </div>
                </div>
        </div>
          <div className="flex">
              <div className="img">
                  <img src={gucci} alt="" />
              </div>
              <div className="items">
                  <div className="flex2">
                      <h3>Gucci</h3>
                      <h3>$1850,00</h3>
          </div>
          <div className="flex4">
            <p>CG Marmont</p>
          <button className='last' onClick={() => AddPrice(1850.00)} >Add to cart</button>
          </div>
        </div>
        </div>
       <div className="total-flex">
            <h6>Total</h6>
            <div>{TotalPrices}</div>
        </div>
          <button className="checkout">Checkout</button>
      </div>
  );
}
