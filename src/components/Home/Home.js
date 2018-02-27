import React, { Component } from "react";
import { getArticles } from "../../api/api";
import { Link } from "react-router-dom";
//import "./Home.css";

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		};
	}
	async componentDidMount() {
		const articles = await getArticles();
		this.setState({
			articles
		});
  }

	render() {
    const articles = this.state.articles;

		return (  
			<div className="Home">
				<ul className="Home-intro">
					{articles.map(article => (
						<li key={article.id}><Link to={`/article/${article.id}`}>{article.title}</Link></li>
					))}
				</ul>
			</div>
		);
	}
}

