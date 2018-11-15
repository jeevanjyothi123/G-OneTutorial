import React, { Component } from "react";
import logo from "./../profileimg.jpeg";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card blog">
              <div className="card-body">
                <img src={logo} alt="profile" />
                <h5 className="card-title">Jeevanjyoti Jena</h5>
                <p>(Developer,Blogger)</p>
                <p className="card-text">This is who I am :</p>
                <p className="card-text">
                  I am an electronics engineer but my heart goes to full stack
                  web development. I feel more successive and more comfortable
                  with this term Full stack.
                </p>
                <p className="card-text">
                  this vibes every day force me that u need to achieve something
                  new n extra in this field.
                </p>
                <p className="card-text">
                  dts y I learned below technology within 1 year of joining in
                  my company.
                </p>
                <p className="card-text">
                  now overall experience is (1.5years).
                </p>
                <p className="card-text">In UI development section:</p>
                <hr />
                <p className="card-text">
                  HTML5 |CSS3 | Bootstrap4 | JavaScript
                </p>
                <p className="card-text">JS library:-</p>
                <hr />
                <p className="card-text">jQuery|Reactjs</p>
                <p className="card-text">Framework:-</p>
                <hr />
                <p className="card-text">Angular 6</p>
                <p className="card-text">Backend development:-</p>
                <hr />
                <p className="card-text">nodejs | python flask | ExpressJs</p>
                <p className="card-text">learning Java spring boot.</p>
                <p className="card-text">databases:-</p>
                <hr />
                <p className="card-text">mongoDB | Mysql</p>
                <p className="card-text">Server:</p>
                <hr />
                <p className="card-text">Apache|Nginx</p>
                <p className="card-text">OS:-</p>
                <hr />
                <p className="card-text">Linux|Windows</p>
                <p className="card-text">started working on mac.</p>
                <p className="card-text">Charts:-</p>
                <hr />
                <p className="card-text">highcharts</p>
                <p className="card-text">
                  as you can see within this short time span I am able to
                  achieve these all Technology with real world application
                  development which I will share when we will meet for
                  Interview.
                </p>
                <p className="card-text">
                  what I learned with these technologies:-
                </p>
                <hr />
                <p className="card-text">
                  I learned agile methodologies of executing a whole application
                  from start to end.
                </p>
                <p className="card-text">
                  I learned building application from scratch with trending UI
                  technology like{" "}
                </p>
                ( Angular 2+ & ReactJs ).
                <p className="card-text">
                  With responsive web page with bootstrap and proper css3
                  combination and animation effects witg jQuery for (every
                  screen size of mobile to mac 5k ).
                </p>
                <p className="card-text">
                  In the backend, I worked in Nodejs, flask, and MongoDB
                  creating API and database operations.
                </p>
                <p className="card-text">
                  starting from scratch to deployment in server.
                </p>
                <p className="card-text">
                  I worked in Charts like highcharts and more.
                </p>
                <p className="card-text">
                  I worked in every type of web app either it's product web app
                  or poc or internal project.
                </p>
                <p className="card-text">
                  "never leave anything without completing it, u leave means u
                  quit"
                </p>
                <p className="card-text">
                  "Search Search and Search find the solution and analysis it,
                  understand it and implement it "
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
