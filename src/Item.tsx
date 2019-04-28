import React from 'react';

import './App.css';

interface Props {
  img_url: string;
  card_title: string;
  card_text: string;
  link_url: string;
};

const Item: React.FC<Props> = (props) => {
	return (
		<div className="Item">
			<div className="card">
				<img src={props.img_url} alt="img" className="card-img-left" width="200px"/>
				<h5 className="card-title">{props.card_title}</h5>
				<p className="card-text">{props.card_text}</p>
				<a href={props.link_url} className="btn btn-primary">Go somewhere</a>
			</div>
		</div>	
	);
}

export default Item;