import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
import Header from "./Components/Header"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Portfolio from "./Components/Portfolio"
import Resume from "./Components/Resume"
import Testimonials from "./Components/Testimonials"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    }
  }

  getResumeData(){
    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: "json",
      cache: false,
      success: function(data){
        this.setState({
          resumeData: data
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return(
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
