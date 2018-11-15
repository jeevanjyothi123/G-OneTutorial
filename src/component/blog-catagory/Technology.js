import React,{Component} from 'react';


class TechnologyBlog extends Component{
    render(){
        return(

            <div className="container">
                <div className="row">
                    <div  className="col-sm-12">
                    
                    <div className="card blog" >
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">Blockchain and Its future scope</h5>
                                            <p className="card-text">In this changing world, so many new technologies are taking birth every single day. Either it is in IT, Finance. Healthcare, Construction, Agriculture and many more but more interesting field is IT for my point of view Either it is AI, Machine Learning, Data science, Virtual reality, Virtual Augmentation, Cloud computing, hyper-convergence and last not the least BLOCKCHAIN.</p>
                                            <p  className="card-text" >Why I kept Blockchain in caps letter means today topic is related To Blockchain and Its playing a vital role in today's economic system.</p>
                                            <p  className="card-text" > So, the fundamental meaning of blockchain is:</p>
                                            <p  className="card-text" >" blockchain, originally block chain, is a growing list of records, called blocks,  which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree root hash). "</p>
                                            <p  className="card-text" >Use of Blockchain:</p>
                                            <p  className="card-text">A blockchain is a decentralized, distributed and a public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.</p>
                                            <p  className="card-text" >History:</p>
                                            <p  className="card-text" >The first blockchain was conceptualized by a person (or group of people) known as Satoshi Nakamoto in 2008 </p>
                                            <p  className="card-text" >The first work on a cryptographically secured chain of blocks was described in 1991 by Stuart Haber and W. Scott Stornetta. They wanted to implement a system where document timestamps could not be tampered with. In 1992, Bayer, Haber and Stornetta incorporated Merkle trees to the design, which improved its efficiency by allowing several document certificates to be collected into one block.</p>
                                           
                                        
                                        
                                        
                                        
                                        
                                        </div>
                    </div>
                     </div>
                </div>
            </div>

        );
    }
}


export default  TechnologyBlog;