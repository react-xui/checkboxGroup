import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxGroup from '../src/index';
import '../src/_index';
const opt =[{
    text:'xui-checkbox1',
    name:'xzp1',
    value:'Y'
},{
    text:'xui-checkbox2',
    name:'xzp2',
    value:'N',
    disabled:false
},{
    text:'xui-checkbox3',
    name:'xzp3',
    value:'V',
    disabled:false
}];
var appElement = document.getElementById('example');
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state ={
            value:["Y","V"]
        };
    }
    onChange(val){
        console.log('comm onChange:',val);
    }
    render() {
        return (
            <div className="checkbox">
                <CheckboxGroup options={opt} defaultValue={this.state.value} disabled onChange = {this.onChange}></CheckboxGroup>
            </div>
        )
    }
}
ReactDOM.render(<App />, appElement);