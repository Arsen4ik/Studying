import React from "react";
import Image from "./Image";
import Description from "./Description";

function App() {
    return(
        <div>
            {/*<Image />*/}
            <Description size='xl' color='blue' text='Синий' />
            <Description size='l' color='red' text='Красный' />
            <Description size='m' color='purple' text='Фиолетовый' />
        </div>
    )
}
export default App;