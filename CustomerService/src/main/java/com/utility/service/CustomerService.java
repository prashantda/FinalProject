package com.utility.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.utility.entity.Customer;
import com.utility.model.User;
import com.utility.repository.CustomerRepository;


@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private OrderService os;
	
	private static final String CUSTOMER_SERVICE= "SupplierService";
	
	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}




	public Customer getCustomer(long id) {
		return customerRepository.findById(id).get();
	}




	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}
	
	public User getUser(String auth) {
		System.out.println("getSupplierUser in");
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/getcustomeruser", HttpMethod.GET, entity, User.class);
		System.out.println("getCustomerUser out"+response.getBody());
		return (User) response.getBody();
	}
	public User getCUfallback(Exception e) {
		return new User();
	}
	
}
