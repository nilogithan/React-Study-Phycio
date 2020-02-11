import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "mr.X",
            data: []
        };
    }
    getApi = async () => {
        try {

            const response = await axios.get('http://www.mocky.io/v2/5e42c9b82f0000830087f98a');
            this.setState({ data: response.data.data })
            console.log(response);


        } catch (exception) {
            return Promise.reject(exception);
        }
    }
    componentDidMount() {
        this.getApi();


    }
    componentDidUpdate() {
        console.log("api", this.state.data);

    }

    changeName() {
        this.setState({ name: "mr.Y" });
    }

    render() {


        return (
            <div>
                <div>name:{this.state.name}</div>
                <button onClick={this.changeName.bind(this)}>change</button>
                {/* <div>{this.state.data[0].employee_name}</div> */}
                {this.state.data.map((x) => (
                    <div>
                        {/* <h5>{data.employee_name}</h5> */}
                        <h6>{x.employee_salary}</h6>
                    </div>
                ))}
            </div>

        );
    }
}

export default App;



