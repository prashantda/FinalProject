import React, { useEffect, useState } from 'react'

const SDashboardCards = () => {
    useEffect(() => {
        document.title = "Wish-it || Supplier Dashboard"
    })
    return (
        <div class="container rounded bg-white mt-3 mb-3 ">
            <h4 class="offset-5 mt-2">Supplier Dashboard</h4>
            <div class="row">
                <div class="center  border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle width:70 height:120 " src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" style={{
                            width: 200,
                            height: 200,
                            borderRadius: 140 / 2,
                            backgroundColor: '#FF6F00',
                            transform: [
                                { scaleX: 2 }
                            ]
                        }} />
                        <span class="font-weight-bold">Kunal</span><span class="text-black-50">kshirsgarkunal72@gmail.com</span><span> </span></div>
                </div>
                <div class="card-group">
                    <div class="card-wrap ms-5">
                        <div class="card-header one">
                            <i class="fas fa-code">25</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn one">All Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header two">
                            <i class="fab fa-css3-alt">12</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn two">New Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header three">
                            <i class="fab fa-html5">7</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn three">Pending Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header four">
                            <i class="fab fa-js-square">4</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn four">Cancelled Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header five">
                            <i class="fab fa-js-square">54</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn five">Completed Orders</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            )
}
            export default SDashboardCards