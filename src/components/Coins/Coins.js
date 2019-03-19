import React, { Component } from 'react';
import { array } from 'prop-types';

// Utils
import { isFirstRender } from '../../shared/utils/frontend';

import './Coins.css'

class Coins extends Component {
    static propTypes = {
        coins: array
    }

    componentWillMount() {
        const { fetchCoins } = this.props

        // Fetching coins action.
        fetchCoins();
    }

    render() {
        const { coins: { coins } } = this.props;
        // If the coins const is an array empty
        // then we return null
        console.log(coins.payload)
        if (isFirstRender(coins)) {
            return null
        }

        return (
            <div className="Coins">
                <h1>Top 100 Coins</h1>
                <ul>
                    {coins.payload.map((coin, key) => (
                        <li key={key}>
                            <span className="left">
                                {coin.book}
                            </span>
                            <span className="right">${coin.maximum_amount}</span>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}

export default Coins
