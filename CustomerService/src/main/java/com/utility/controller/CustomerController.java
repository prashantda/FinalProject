package com.utility.controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import com.utility.entity.Customer;
import com.utility.entity.Order;
import com.utility.model.User;
import com.utility.service.CustomerService;
import com.utility.valueobjects.CSignUp;

import java.util.*;
@RestController
@RequestMapping("/api/customer")
@CrossOrigin
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	
	

	@GetMapping("/ordersdetails/{id}")
	public Object getOrderDetail(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id){
		User u=customerService.getUser(auth);
		if(u.getRole().equals("ROLE_ADMIN"))
			return customerService.getOrderDetail(id);
	
	return new ArrayList();
	}
	@DeleteMapping("/deleteorder/{id}")
	public Object deleteOrder(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id){
		User u=customerService.getUser(auth);
		if(u.getRole().equals("ROLE_ADMIN"))
			return customerService.deleteOrder(u,id);
	
	return new ArrayList();
	}
	
	
	@GetMapping("/orderslist")
	public Object getOrdersList(@RequestHeader(value = "Authorization") String auth){
		User u=customerService.getUser(auth);
		if(u.getRole().equals("ROLE_ADMIN"))
			return customerService.getOrdersList();
	
	return new ArrayList();
	}
	
	
	@GetMapping("/customerforadmin/{id}")
	public Object getCustomerAdmin(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id) {
		return customerService.getCustomerAdmin(auth,id);
	}
	
	
	
	
	//used
	@GetMapping("/admindashboard")
	public Object getAdminDashboard(@RequestHeader(value ="Authorization") String auth) {
		User u=customerService.getUser(auth);
		if(u.getRole().equals("ROLE_ADMIN"))
		return customerService.getAdminDashboard(auth);
		return new Object();
	}
	
	
	
	//used
	@GetMapping("/getuserotp/{id}")
	public Object getUserOtp(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id) {
		return customerService.getUserOtp(auth,id);
	}
	
	
	//used
	@GetMapping("/getsupplierorders")
	public Object getSupplierOrders(@RequestHeader(value ="Authorization") String auth) {
		User u=customerService.getUser(auth);
		return customerService.getSupplierOrders(auth,u);
	}
	//used
	@GetMapping("/getcustomerorder/{id}")
	public Object getCustomerorder(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id)
	{
		return customerService.getCustomerorder(auth,id);
	}
	
	
	
	//used
		@GetMapping("/supplierdashboard")
		public Object supplierDashboard(@RequestHeader(value ="Authorization") String auth){
			
			User u=customerService.getUser(auth);
			return customerService.supplierDashboard(auth,u);
		}
	
	//All below used
	@GetMapping("/getcustomerpin/{id}")
	public Long getCustomerpin(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id) {
		System.out.println(id);
		//User u=customerService.getUser(auth);
		return customerService.getCustomerpin(id);
		 
	}	
	
	@PostMapping("/savecustomer")
	public Customer saveCustomer(@RequestBody Customer customer) {
		return customerService.saveCustomer(customer);
	}
	
	@PutMapping("/editcustomer")
	public Object editCustomer(@RequestHeader(value = "Authorization") String auth,
												@RequestBody CSignUp cust) {
		return	customerService.editCustomer(auth,cust);
		
	}
	
	
	@GetMapping("/getcustomer")
	public Object getCustomers(@RequestHeader(value = "Authorization") String auth) {
		User u=customerService.getUser(auth);
		return customerService.getCustomer(u.getId());
	}
	
	
	@GetMapping("/getcustomersuppliers")
	public Customer getCustomer(@RequestHeader(value = "Authorization") String auth) {
		User u=customerService.getUser(auth);
		return customerService.getCustomer(u.getId());
	}
	
	@GetMapping("/getorderdetails/{id}")
	public Object getOrderDetails(@RequestHeader(value = "Authorization") String auth,@RequestBody User u,@PathVariable long id) {
		return customerService.getOrderDetails(u,id);
	}
	@GetMapping("/getsuporderdetails/{id}")
	public Object getSuppOrderDetails(@RequestHeader(value = "Authorization") String auth,@PathVariable long id) {
		User u=customerService.getUser(auth);
		System.out.println("inside getSuppOrderDetails");
		return customerService.getSuppOrderDetails(auth,u,id);
	}
	
	@GetMapping("/getallcustomer")
	public Object getAllCustomers(@RequestHeader(value = "Authorization") String auth){
		return customerService.getAllCustomers();
	}
	@PostMapping("/saveorder")
	 public Object  saveOrder(@RequestHeader(value = "Authorization") String auth,@RequestBody Order o) {
		User user=customerService.getUser(auth);
		return customerService.save(user,o);
	}
	@GetMapping("/cancalorder/{id}")
	public Object cancalOrder(@RequestHeader(value = "Authorization") String auth,@PathVariable long id)
	{
		User user=customerService.getUser(auth);
		
		return customerService.cancalOrder(user,id);
	}
	
}
