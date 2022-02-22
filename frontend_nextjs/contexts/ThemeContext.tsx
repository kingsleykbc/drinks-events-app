import React, { Component, createContext, useContext } from 'react';
import { ThemeColorType } from '../config/types';

const initialState: { themeColor: string; setThemeColor: Function | null } = { themeColor: '#DBB561', setThemeColor: null };

export const ThemeContext = createContext(initialState);
export const useTheme = () => useContext(ThemeContext);

class ThemeContextProvider extends Component {
	state = initialState;

	// Update theme color
	setThemeColor = (themeColor: ThemeColorType) => {
		this.setState({ themeColor });
		localStorage.setItem('themeColor', themeColor);
	};

	// Set theme color on page load
	componentDidMount() {
		this.setState({ themeColor: localStorage.getItem('themeColor') || '#DBB561', setThemeColor: this.setThemeColor });
	}

	// Render
	render() {
		return <ThemeContext.Provider value={this.state}>{this.props.children}</ThemeContext.Provider>;
	}
}

export default ThemeContextProvider;
