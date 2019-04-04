import React from 'react';
import Checkbox from '../components/checkbox';
export default class CheckboxGroup extends React.Component{
    constructor(props){
        super(props);
        this.onChangeBox = this.onChangeBox.bind(this);
        this.state ={
            defaultValue:this.props.defaultValue
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            defaultValue:nextProps.defaultValue
        });
    }
    onChangeBox(e){
        let value = e.target.value;
        let defValue = this.state.defaultValue;
        if(e.target.checked){
            let key = true;
            for(let a = 0 ; a < defValue.length - 1 ; a++){
                if(defValue[a] == value)
                    key = false;
            }
            if(key)
                defValue.push(value);
        }else{
            var index = defValue.indexOf(value);
            if(index > -1)
                defValue.splice(index, 1);
        }
        this.props.onChange(defValue);
    }
    render(){
        let options = this.props.options;
        let defValue = this.state.defaultValue;
        let disabled = this.props.disabled;
        let onChangeBox = this.onChangeBox;
        return (
            <div>
                {
                    options.map(function(item, i){
                        item.checked = false;
                        defValue.map(DItem =>{
                            if(item.value == DItem)
                                item.checked =  true;
                        });
                        item.disabled = item.disabled === undefined ? disabled : item.disabled;
                        return <Checkbox key={i} name={item.name} value={item.value} onChange={onChangeBox} checked={item.checked} disabled={item.disabled}>{item.text}</Checkbox>
                    })
                }
            </div>
        );
    }
}