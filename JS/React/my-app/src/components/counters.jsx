import React, { Component } from 'react';
import Counter from './counter'
import './style.css'


class Counters extends Component {
    render() {
        const { counters, onReset, onDelete, onIncrement, onDecrement} = this.props
        return (
            <div className='counters'>
                <button
                className = "btn m-2 btn-primary btn-sm"
                onClick={onReset}>
                    Reset
                </button>
                {counters.map(counter =>
                    <Counter
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={ counter }
                        key={counter.id} />
                    )}
            </div>
        )
    }
}

export default Counters
