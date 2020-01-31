import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <br></br>
              
              <h1>Thanks for visiting. </h1>
              <p className="lead">
              Feel free to reach out by emailing <strong>atyreefinch AT gmail DOT com</strong> or by using the social links below
              </p>
            </div>
          </div>
        </section>
        );
  }
}