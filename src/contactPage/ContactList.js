import React, {Component} from 'react';
import './ContactList.css';

var ContactList = React.createClass({
        filterList: function(event){
            var updatedList = this.state.initialItems;
            updatedList = updatedList.filter(function(item){
                return item.toLowerCase().search(
                        event.target.value.toLowerCase()) !== -1;
            });
            this.setState({items: updatedList});
        },
        getInitialState: function(){
            return {
                initialItems: [],
                items:[]
            }
        },
        componentWillMount: function(){
            this.setState({items: this.props.contacts});
                this.setState({initialItems: this.props.contacts});
        },
        componentWillReceiveProps(nextProps){
            this.setState({items: this.props.contacts});
            this.setState({initialItems: this.props.contacts});
        },
        render: function(){
            return (
                <div className="Listx">
                    <input type="text" placeholder="Search" onChange={this.filterList}/>
                    <List items={this.state.items}/>
                </div>
            );
        }
    });
    //state.items

    var List = React.createClass({
        render: function(){
            return (
                <ul>
                    {
                        this.props.items.map(function(item,index) {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            )
        }
    });


export default ContactList;