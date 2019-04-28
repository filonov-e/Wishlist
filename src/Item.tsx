import React from 'react';

import './App.css';

interface Props {
	index: string;
	img_url: string;
	card_title: string;
	card_text: string;
	link_url: string;
	deleteItem: any;
};

const Item: React.FC<Props> = (props) => {
	return (
		<div className="Item" id={props.index}>
			<div className="card">
				<a href={props.link_url} className="btn btn-primary">Go somewhere</a>
				<img src={props.img_url} alt="img" className="card-img-left" width="200px"/>
				<h5 className="card-title">{props.card_title}</h5>
				<p className="card-text">{props.card_text}</p>
				<div className="btn btn-danger card-text-right" onClick={props.deleteItem}>delete</div>
			</div>
		</div>	
		);
}

export default Item;