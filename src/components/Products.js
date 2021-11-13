import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class FetchAPI extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    } 
   
    componentDidMount() {
        axios.get('https://ecommereceapi.herokuapp.com/products')
        .then((res) => {
          this.setState({ apiResponse: res.data})
          console.log(this.state.apiResponse)
        })
        .catch(console.log)
      }
      // [...]
    
    render() {
        const {apiResponse}=this.state
        return(   
          <div className="container-fluid justify-content-center">
         
          
              <div className = "card-deck" style={{flexWrap:"wrap"}}>
              { apiResponse.length?
                apiResponse.map(apiResponse=><div>
                <Card url ={apiResponse.url}
                url1 ={apiResponse.url1}
                url2 ={apiResponse.url2}
               title ={apiResponse.title}
               description1 ={apiResponse.description1}
               description2 ={apiResponse.description2}
               price = {apiResponse.price} 
               id={apiResponse._id} 
                />
               </div>):null
            }
            
     </div>  
     </div>
     )
    }
}
