import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'


class Blogs extends Component{
    render(){
        return(

            <div className="container">
                <div className="row">
                <div  className="col-sm-12"><NavLink to="/"><button className="back">Back</button></NavLink></div>
                    <div  className="col-sm-12">
                        <div className="row tutorial_block">
                            <div className="col-sm-4">
                            <NavLink to="/technology-blog"><div className="card cardclass" >
                                    
                                    <div className="card-body">
                                        <h5 className="card-title">Technology</h5>
                                        <p className="card-text">Web development,AI,Machine learing,Blockchain...</p>
                                    </div>
                                </div></NavLink>
                            </div>
                            <div className="col-sm-4">
                            <NavLink to="/marketing-blog"> <div className="card cardclass" >
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">Marketing</h5>
                                            <p className="card-text">Marketing fundamentals,Digital Marketing,SEO</p>
                                        </div>
                                </div></NavLink>
                            </div>
                            <div className="col-sm-4">
                            <NavLink to="/bussiness-blog"><div className="card cardclass" >
                                       
                                        <div className="card-body">
                                            <h5 className="card-title">Business</h5>
                                            <p className="card-text">Business Ideas,Business Plan, Business Growth</p>
                                        </div>
                                </div></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default  Blogs;