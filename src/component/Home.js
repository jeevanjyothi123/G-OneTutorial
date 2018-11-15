import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'


class Home extends Component{
    render(){
        return(

            <div className="container">
                <div className="row">
                    <div  className="col-sm-12">
                        <div className="row tutorial_block">
                            <div className="col-sm-4">
                                <div className="card" >
                                    
                                    <div className="card-body">
                                        <h5 className="card-title">IT</h5>
                                        <p className="card-text">Web development technology with real world uses etc...</p>
                                        <NavLink to="/information-technology" className="btn">Start your design with us.</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card" >
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">BLOGS</h5>
                                            <p className="card-text">Technology,Business,Maketing,Competative Preperation etc...</p>
                                            <NavLink to="/blogs" className="btn">Increase your passion of learning with us.</NavLink>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card" >
                                       
                                        <div className="card-body">
                                            <h5 className="card-title">Tech News 4U</h5>
                                            <p className="card-text">Some quick updates about world within few seconds...</p>
                                            <a href="https://worldnews4uml.000webhostapp.com/" className="btn">why to wait ? visit and see ...</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default  Home;