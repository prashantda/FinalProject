package com.utility.service;


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
import com.utility.entity.ServiceType;
import com.utility.entity.Supplier;
import com.utility.model.Customer;
import com.utility.model.User;
import com.utility.repository.SupplierRepository;
import com.utility.valueobjects.SDashboard;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
@Service
public class SupplierService {
	
	@Autowired
	private SupplierRepository supplierRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private ServiceTypeService sts;
	
	private static final String SUPPLIER_SERVICE= "SupplierService";

	public Supplier saveSupplier(Supplier supplier) {
		
		return supplierRepository.save(supplier);
	}

	public Supplier getSupplier(long id) {		
		return supplierRepository
				.findAll()
				.stream()
				.filter(s->s.getUserid()==id)
				.collect(Collectors.toList())
				.get(0);
	}
	
	public List<Supplier> getAllSupplier() {
		
		return supplierRepository.findAll();
	}



	@Retry(name = SUPPLIER_SERVICE,fallbackMethod ="getCUfallback" )
	public User getUser(String auth) {
		System.out.println("getSupplierUser in");
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/getsupplieruser", HttpMethod.GET, entity, User.class);
		System.out.println("getCustomerUser out"+response.getBody());
		return (User) response.getBody();
	}
	public User getCUfallback(Exception e) {
		return new User();
	}

	public SDashboard supplierDashboard(long id) {
		SDashboard sd=new SDashboard();
		sd.setAllorders(id);
		return null;
	}

	public List<Supplier> getServiceSuppliers(int pin, int id) {
		
		return supplierRepository.findAll()
				.stream().filter(s->s.getServiceType().getId()==id)
				.filter(su->su.getPincode()== pin)
				.collect(Collectors.toList());
	}
	
	
	
	
}
//public String about(String auth) {
//HttpHeaders http=new HttpHeaders();
//http.add("Authorization",auth);
//HttpEntity entity=new HttpEntity(http); 
//HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/about", HttpMethod.GET, entity, String.class);
//return (String) response.getBody();		
//}
//@CircuitBreaker(name = SUPPLIER_SERVICE, fallbackMethod = "getscFallback")
//@Retry(name = SUPPLIER_SERVICE,fallbackMethod ="getscFallback" )
//public ResponseTemplate getsc(long id) {
//	ResponseTemplate rt=new ResponseTemplate();		
//	Supplier s= supplierRepository.findById(id).get();
//	Customer c=restTemplate.getForObject("http://CUSTOMER-SERVICE/api/customer/getcustomer/"+s.getCustomersid(),Customer.class);
//	rt.setCustomer(c);
//	rt.setSupplier(s);
//	return rt;
//}
//
//public ResponseTemplate getscFallback(Exception e) {
//	ResponseTemplate rt=new ResponseTemplate();
//	return rt;
//}
//public Customer getCustomer(String auth,User u) {
//	System.out.println("getSupplierUser getCustomer");
//	HttpHeaders http=new HttpHeaders();
//	http.add("Authorization",auth);
////	http.setContentType(MediaType.APPLICATION_JSON);
////	String json=null;
////	try {
////		json=new ObjectMapper().writeValueAsString(u);
////	} catch (JsonProcessingException e) {
////		throw new RuntimeException(e);
////	}
//	HttpEntity<String> entity=new HttpEntity<String>(http); 
//	HttpEntity response=restTemplate.exchange("http://CUSTOMER-SERVICE/api/customer/getcustomersuppliers", HttpMethod.GET, entity, Customer.class);
//	System.out.println("getCustomerUser  getCustomer out"+response.getBody());
//	return (Customer) response.getBody();
//}
//public Customer getCustomerUfallback(Exception e) {
//	return new Customer();
//}
