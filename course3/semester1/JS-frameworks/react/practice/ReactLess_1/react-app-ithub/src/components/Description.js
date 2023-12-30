import React from "react";

function Description(props){
    const { size, color, text } = props;

    const sizeValue = {
        xl: '400px',
        l: '200px',
        m: '100px'
    }

    let styleObj ={
        backgroundColor: color,
        width: sizeValue[size],
        height: sizeValue[size]
    }

    return(
        <div style={styleObj}>
            <p>{ text }</p>
        </div>
    )
}

export default Description;



// const message = 'Hello';
// const num = 6;
// const size = 'xl';
//
// const productInfo = {
//     name: 'Велосипед',
//     price: 199,
//     salePrice: 199
// }
//
// return(
//     <div style={{
//         backgroundColor: color,
//         width: sizeObj.width,
//         height: sizeObj.height
//     }}>
//         {num ** 0.5 % 1 === 0 ? <h1>Вычисляется</h1> : <p>Не вычисляется</p>}
//         <p style={styleObj}>{message}</p>
//
//         <h1>{productInfo.name}</h1>
//         {productInfo.price !== productInfo.salePrice ? <p>Sale!</p> : ''}
//     </div>
// )