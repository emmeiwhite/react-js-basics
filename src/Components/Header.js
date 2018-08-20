import React,{Component} from 'react';
import '../App.css';

export class Header extends Component{

    render(){
        return(
            <nav className="navbar navbar-inverse main-header">
                <div className="container-fluid">
                    <div className="navbar-header logo-div">
                        <a href="#" class="navbar-brand logo">First Data &reg;</a>
                    </div>

                    <ul className="nav navbar-nav navbar-right">
                        {this.props.menus.map((menu,index)=><li key={index}><a href="#">{menu}</a></li>)}
                    </ul>                  
                </div>
            </nav>
        )
    }
}