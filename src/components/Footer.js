import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
            <footer Name="bg-light text-center text-lg-start">
        
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
              © 2021 Copyright:
              <a className="text-dark" href="http://localhost:3000/">eStore.com</a>
            </div>
            
          </footer>
            </div>
        )
    }
}
