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
	
	@PostMapping("/savecustomer")
	public Customer saveCustomer(@RequestBody Customer customer) {
		return customerService.saveCustomer(customer);
	}
	
	@PostMapping("/editcustomer")
	public Object editCustomer(@RequestHeader(value = "Authorization") String auth,
												@RequestBody CSignUp cust) {
		return	customerService.editCustomer(auth,cust);
		
	}
	
	
	@GetMapping("/getcustomer")
	public Object getCustomer(@RequestHeader(value = "Authorization") String auth,@RequestBody User u) {
		//User u=customerService.getUser(auth);
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
	
	@GetMapping("/getallcustomer")
	public Object getAllCustomers(@RequestHeader(value = "Authorization") String auth){
		return customerService.getAllCustomers();
	}
	@PostMapping("/saveorder")
	 public Object  saveOrder(@RequestHeader(value = "Authorization") String auth,@RequestBody Order o) {
		User user=customerService.getUser(auth);
		return customerService.save(user,o);
	}
	
}
