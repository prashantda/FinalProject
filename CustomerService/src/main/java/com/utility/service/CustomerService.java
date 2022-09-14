package com.utility.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.utility.entity.Customer;
import com.utility.entity.Order;
import com.utility.model.ServiceType;
import com.utility.model.User;
import com.utility.repository.CustomerRepository;
import com.utility.repository.OrderRepository;
import com.utility.valueobjects.CSignUp;


@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private OrderRepository or;
	@Autowired
	private OrderService os;
	
	private static final String CUSTOMER_SERVICE= "SupplierService";
	
	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}




	public Customer getCustomer(long id) {
//		System.out.println(id);
		return customerRepository.findAll().stream().filter(c->c.getUserid()==id).collect(Collectors.toList()).get(0);
	}




	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}
	
	public User getUser(String auth) {
		System.out.println("getcustomerUser in");
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




	public Object editCustomer(String auth,CSignUp cust) {
		User u=getUser(auth);
		Customer cu =customerRepository.findAll().stream().filter(c->c.getUserid()==u.getId()).collect(Collectors.toList()).get(0);
		cu=getCustomerSignup(cust,cu);
		
		customerRepository.save(cu);
		u.setMobile(cust.getMobile());
		u.setName(cust.getName());
		SaveUser(auth,u);
		return cu;
	}



	public Customer getCustomerSignup(CSignUp cust,Customer c) {
		
		c.setAddress(cust.getAddress());
		c.setPincode(cust.getPincode());
		c.setAadhaar(cust.getAadhaar());
		c.setDob(cust.getDob());
		
		return c;
	}
	public boolean SaveUser(String auth,User u) {
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		http.setContentType(MediaType.APPLICATION_JSON);
		String json=null;
		
		try {
			json=new ObjectMapper().writeValueAsString(u);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
		HttpEntity<String> entity=new HttpEntity<String>(json,http); 
		ResponseEntity<HttpEntity> o=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/saveuser", HttpMethod.POST, entity, HttpEntity.class);
		if(o.getStatusCodeValue()==200)
			return true;
		else 
			return false;
		
	
	}
	public User getSaveUfallback(Exception e) {
		return new User();
	}




	public Object getOrderDetails(User u, long id) {
		System.out.println(u);
		Customer c=getCustomer(u.getId());
	return	os.getOrderOfCustomer(c.getCustomerid(),id);
	}




	public Order save(User u,Order o) {
		Customer c=getCustomer(u.getId());
		o.setCustomerid(c);
		
		o.setStatus("New");
		return or.save(o);
	}
}
