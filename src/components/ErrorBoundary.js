import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			hassError: false
		}
	}

	componentDidCatch(error, info){
		this.setState({hassError:true})
	}

	render(){
	if (this.state.hassError) {
		return <h1> ooops.</h1>
	}	
	return this.props.children
	}
}

export default ErrorBoundary;