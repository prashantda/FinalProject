package com.utility.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.utility.entity.Customer;
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
	public Object getCustomer(@RequestHeader(value = "Authorization") String auth) {
		User u=customerService.getUser(auth);
		return customerService.getCustomer(u.getId());
	}
	
	
	@GetMapping("/getallcustomer")
	public Object getAllCustomers(@RequestHeader(value = "Authorization") String auth){
		return customerService.getAllCustomers();
	}
	
}
