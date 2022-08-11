package com.utility.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.utility.entity.Customer;
import com.utility.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	
	
	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}




	public Customer getCustomer(long id) {
		return customerRepository.findById(id).get();
	}




	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}
	
}
