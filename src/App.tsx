import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Item from './Item';

interface State {
  img_url: string;
  card_title: string;
  card_text: string;
  link_url: string;
  items: Item[] | any;
}

interface Item {
  img_url: string;
  card_title: string;
  card_text: string;
  link_url: string;
}

class App extends React.Component<any, State> {

  state: State = {
    img_url: "",
    card_title: "",
    card_text: "",
    link_url: "",
    items: [],
  }
  
  addItem = () => {
    const item:Item = {
      img_url: this.state.img_url,
      card_title: this.state.card_title,
      card_text: this.state.card_text,
      link_url: this.state.link_url,
    };

    this.setState({
      items: (() => { 
        this.state.items.push(item);
        return this.state.items
      })()
    });
  }

  createItemsJSX = () => {
    return this.state.items.map(
      (item: any) => <Item 
                      img_url={item.img_url} 
                      card_title={item.card_title} 
                      card_text={item.card_text} 
                      link_url={item.link_url}/>
    )
  }

  ImgUrlChangeHandler = (event: any) => {
    this.setState({
      img_url: event.target.value
    });
  }

  CardTitleChangeHandler = (event: any) => {
    this.setState({
      card_title: event.target.value
    });
  }

  CardTextChangeHandler = (event: any) => {
    this.setState({
      card_text: event.target.value
    });
  }

  LinkUrlChangeHandler = (event: any) => {
    this.setState({
      link_url: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Wishlist</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              <input type="text" id="img_url" className="form-control" placeholder="Image Url" onChange={this.ImgUrlChangeHandler}/>
            </div>
            <div className="col">
              <input type="text" id="card_title" className="form-control" placeholder="Title" onChange={this.CardTitleChangeHandler}/>
            </div>
            <div className="col">
              <input type="text" id="card_text" className="form-control" placeholder="Description" onChange={this.CardTextChangeHandler}/>
            </div>
            <div className="col">
              <input type="text" id="link_url" className="form-control" placeholder="Link" onChange={this.LinkUrlChangeHandler}/>
            </div>
            <div className="col">
              <div className="btn btn-primary" onClick={this.addItem}>add</div>
            </div>
          </div>
          <div className="row text-center">
            {this.createItemsJSX()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
