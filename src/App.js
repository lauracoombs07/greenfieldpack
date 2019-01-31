import React,{Component}from 'react';
import Routing from './Routing';

import Navbar from './components/Navbar';
// import Image from './components/Image'
// import Background from './components/Background';



class App extends Component {
    render() {
        return(
            <div class="background">
               <Navbar />
               {/* <Background /> */}
               {/* <Image /> */}
                <Routing/>
            </div>
        )
    }
}


export default App
