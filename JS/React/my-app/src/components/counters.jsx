import React, { Component } from 'react';
import Counter from './counter'
import './style.css'


class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 2323},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value=0;
            return c;
        });
        this.setState({ counters });
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value++;
        this.setState({ counters })
    };

    handleDecrement = counter => {
        if (this.state.value !== 0) {
              this.setState({value: this.state.value - 1})
            }
    };

    render() {
        return (
            <div className='counters'>
                <button
                className = "btn m-2 btn-primary btn-sm"
                onClick={this.handleReset}>
                    Reset
                </button>
                {this.state.counters.map(counter =>
                    <Counter
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        counter={ counter }
                        key={counter.id} />
                    )}
            </div>
        )
    }
}

export default Counters
