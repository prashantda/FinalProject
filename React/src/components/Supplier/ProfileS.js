import React, { Component } from 'react'
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from './SignIn';

const styledata={textDecoration: null,
  width: 1000,
  height: 50
  ,
  borderRadius: 140 / 2,
  backgroundColor: 'white',
  transform: [
    { scaleX: 3 }
  ]}
export default class Profile extends Component {
  

  render() {
    return (

      <div class="container rounded bg-black mt-5 mb-5 ">

        <div>
          <div class="row">

            <div class="center  border-right">
              <div className='d-grid gap-4' >
                <tr >

                  <div className="form-group mb-2">

                    <input type="text"
                      placeholder="dynamic data"
                      name="name"
                      className="form-control col-12   mt-5 ms-5"
                      required style={styledata}></input>
                  </div>




                  <button className="btn btn-danager col-4  rounded-pill mt-2  " style={{
                    textDecoration: null,
                    width: 350,
                    height: 50,
                    borderRadius: 140 / 2,
                    backgroundColor: '#FCDC00',
                    transform: [
                      { scaleX: 2 }
                    ]
                  }}>Acept_request</button>
                  <button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 " style={{
                    width: 350,
                    height: 50,
                    borderRadius: 140 / 2,
                    backgroundColor: '#D33115',
                    transform: [
                      { scaleX: 2 }
                    ]
                  }} >Decline_request</button>

                  <button className="btn btn-danager col-4 ms-5 rounded-pill mt-2" style={{
                    width: 350,
                    height: 50,
                    borderRadius: 140 / 2,
                    backgroundColor: '#73D8FF',
                    transform: [
                      { scaleX: 2 }
                    ]
                  }} >View_details</button>
                </tr>
                <tr>





                </tr>
                
              </div>
              
            </div>
          </div>
        </div>
        <div>



        </div>

      </div>

    )
  }
}