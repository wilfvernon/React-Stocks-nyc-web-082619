import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  state = {
    stocks: [],
    myStocks: [],
    filters: [],
    sort: ""
  }
  
  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({
      stocks: stocks
    }))
  }

  stocksToRender = () => {
    let stocks = this.state.stocks
    if(this.state.filters.length){stocks = stocks.filter(stock=>this.state.filters.includes(stock.type))}
    if(this.state.sort){
      stocks = stocks.sort((e1, e2)=>{
        if(e1[this.state.sort] > e2[this.state.sort]) return 1
        if(e2[this.state.sort] > e1[this.state.sort]) return -1
        return 0
      })}
    return stocks
  }

  buyStock = (id) => {
    let stock = this.state.myStocks.find(stock=>stock.id === id)
    
    if (!stock){
    stock = {...this.state.stocks.find(stock=>stock.id === id), number: 1}
    this.setState({
      myStocks: [stock, ...this.state.myStocks]
    })}else{
      stock.number += 1
      this.setState({
        myStocks: [...this.state.myStocks]
      })
    }
  }

  sellStock = (id) => {
    let stock = this.state.myStocks.find(stock=>stock.id === id)

    if(stock.number === 1){
      this.setState({
        myStocks: this.state.myStocks.filter(stock=>stock.id !== id)
      })}else{
        stock.number -= 1
        this.setState({
          myStocks: [...this.state.myStocks]
        })
      }
    }

  changeFilter = (event) => {
    if(event.target.checked){
      const filter = event.target.value
      this.setState({
        filters: [...this.state.filters, filter]
      })
    }else{
      this.setState({
        filters: this.state.filters.filter(filter=>filter!==event.target.value)
      })
    }
  }

  changeSort = (event) => {
    this.setState({
      sort: event.target.value
    })
  }

  render() {
    return (
      <div>
        <SearchBar changeSort={this.changeSort} changeFilter={this.changeFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer buyStock={this.buyStock} stocks={this.stocksToRender()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.sellStock} stocks={this.state.myStocks}/>

            </div>
          </div>
      </div>
    );
  }
}
export default MainContainer;
