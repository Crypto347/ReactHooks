/**
 * Libraries
 */

import React from 'react';

/**
 * Components
 */

import NavigationItem from './NavigationItem/navigationItem';

/**
 * Styles
 */

import './navigationItems.scss';

/**
 * NavigationItems component definition and export
 */

export const NavigationItems = (props) => {
    return(
        <div className="navigationItems">
            <NavigationItem 
                link
                className>
                   Welcome Page
            </NavigationItem>   
            <NavigationItem 
                link
                className>
                    TicTacToe3x3
            </NavigationItem>   
            <NavigationItem 
                link
                className>
                    TicTacToe4x4
            </NavigationItem>  
        </div>
    );
}

export default NavigationItems;


