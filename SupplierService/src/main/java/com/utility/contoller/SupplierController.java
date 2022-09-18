package com.utility.contoller;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utility.entity.ServiceType;
import com.utility.entity.Supplier;
import com.utility.model.User;
import com.utility.service.ServiceTypeService;
import com.utility.service.SupplierService;
import com.utility.valueobjects.CSignUp;

@RestController
@RequestMapping("/api/supplier")
@CrossOrigin
public class SupplierController {
	
	@Autowired
	private SupplierService supplierService;
	@Autowired 
	private ServiceTypeService sts;
	
	@GetMapping("/getsupplierspin/{sid}/{pin}")
	public Object getsupplierspin(@RequestHeader(value="Authorization")String auth,
			@PathVariable("sid") int sid, @PathVariable("pin")int pin){
		return supplierService.getsupplierspin(sid, pin);
	}
	@GetMapping("/serviceslist")
	public List<ServiceType> serviceList()
	{
		return sts.findAll();
	}
	@GetMapping("/supplierforadmin/{id}")
	public Object getSupplierAdmin(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id) {
		return supplierService.getSupplierAdmin(auth,id);
	}
	
	@GetMapping("/getsupplieruserotp")
	public Object getSupplierUserotp(@RequestHeader(value ="Authorization") String auth) {
		return supplierService.getSupplierUserotp();
	}
	
	
	//used
	@GetMapping("/getodersupplier/{id}")
	public Object getOrderSupplier(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") int id) {
		
		return supplierService.getOrderSupplier(auth,id);
	}
	
	
	
	//used
	@PostMapping("/savesupplier")
	public Supplier saveSupplier(@RequestBody Supplier supplier) {
		supplier.setServiceType(sts.getServiceType(supplier.getServiceType()));		
		return supplierService.saveSupplier(supplier);
	}
	//used
	@GetMapping("/getservices")
	public Object getAllServices(@RequestHeader(value ="Authorization") String auth){
		return sts.findAll();
	}
	
	
	//used
	@GetMapping("/getservicesuppliers/{id}")
	public Object getServiceSuppliers(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") int id)
	{
		User u=supplierService.getUser(auth);
		
		return	supplierService.getServiceSuppliers(u,auth,id);
	}
	//used
	@GetMapping("/getsupplierdash/{id}")
	public Long getSupplierDash(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id) {
		System.out.println(id);
		return supplierService.getSupplier(id).getSupplierid();
		 
	}
	//used
	@GetMapping("/getsupplier")
	public Object getSupplier(@RequestHeader(value ="Authorization") String auth) {
		//System.out.println(id);
		User u=supplierService.getUser(auth);
		return supplierService.getSupplier(u.getId());
		
		 
	}
	
	//used
	@GetMapping("/getsupplier/{id}")
	public Object getSupplier(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id) {
		System.out.println(id);
		 Supplier s=supplierService.getSupplierforDashboard(id);
		 System.out.println("getsupplier in method"+s);
		 return s;
	}
	
	//used
	@PutMapping("/editsupplier")
	public Object editSupplier(@RequestHeader(value ="Authorization") String auth,@RequestBody CSignUp supp) {
	 
		 return supplierService.editSupplier(auth,supp);
				 
	}
	
	
	@GetMapping("/getallsupplier")
	public Object getAllSupplier(@RequestHeader(value ="Authorization") String auth){
		return supplierService.getAllSupplier();
	}
	
	
	
	

	
	
}
