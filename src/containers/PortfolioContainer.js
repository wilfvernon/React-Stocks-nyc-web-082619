import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks=()=>{
    return this.props.stocks.map(stock => <Stock transferStock={this.props.sellStock} key={stock.id} {...stock}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
