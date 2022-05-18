import React,{ Component} from 'react'

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            dept: "",
            rate: "",
            employees: [],
        }
    }

    handleChange = (event) => {
        // console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }


    handleButtonClicked = (event) => {
        event.preventDefault();
        // console.log(this.state)
        const tmpObj = {
            name: this.state.name,
            dept: this.state.dept,
            rate: this.state.rate,
        };
        const tmparr = this.state.employees;
        tmparr.push(tmpObj)
        this.setState({ employees: tmparr });
    }

    render() {
        return (
            <div className='form'>
                <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
                <form>
                    <label for="name" className='labell'>Name : </label>
                    <input type="text" className='inputt' id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br />

                    <label for="dept" className='labell'>Department : </label>
                    <input type="text" className='inputt' id="dept" name="dept" value={this.state.dept} onChange={this.handleChange} />
                    <br />

                    <label for="rate" className='labell'>Rating : </label>
                    <input type="text" className='inputt' id="rate" name="rate" value={this.state.rate} onChange={this.handleChange} />
                    <br />

                    <button onClick={this.handleButtonClicked}>Submit</button>
                </form>
                <div className='main-box'>
                    {this.state.employees.map((value, index) => {
                        return (
                            <div className='detail-box'>
                                {index+1}. Name : {value.name} | Department : {value.dept} | Rating : {value.rate}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Form