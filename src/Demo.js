import React from 'react'

export default class extends React.Component {
    state = {
        a: {
            a: {
                a: 1
            }
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.state.a.a.a = 2

            this.setState({
                a: this.state.a
            })
        }, 1000)
    }
    render = () => (
        <div>
            {this.state.a.a.a}
        </div>
)
}