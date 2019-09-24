import React from "react"
import PropTypes from "prop-types"


class AppartmentList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }

    this.getApartments()
  }

  getApartments=()=>{
    /* global fetch */
    fetch("/apartments")
    .then((response)=> {
      if(response.status === 200){
        return response.json()
      }
    })
    .then((apartments)=>
      this.setstate({apartments})
    )
    .catch(error => console.log(error))
  }

  render () {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export default AppartmentList
