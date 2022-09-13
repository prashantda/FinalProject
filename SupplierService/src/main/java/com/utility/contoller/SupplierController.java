package com.utility.contoller;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utility.entity.ServiceType;
import com.utility.entity.Supplier;
import com.utility.model.User;
import com.utility.service.ServiceTypeService;
import com.utility.service.SupplierService;

@RestController
@RequestMapping("/api/supplier")
@CrossOrigin
public class SupplierController {
	
	@Autowired
	private SupplierService supplierService;
	@Autowired ServiceTypeService sts;
	@PostMapping("/savesupplier")
	public Supplier saveSupplier(@RequestBody Supplier supplier) {
		supplier.setServiceType(sts.getServiceType(supplier.getServiceType()));		
		return supplierService.saveSupplier(supplier);
	}
	
	@GetMapping("/getservices")
	public Object getAllServices(@RequestHeader(value ="Authorization") String auth){
		return sts.findAll();
	}
	
	
	
	
	@GetMapping("/getsupplier/{id}")
	public Object getSupplier(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id) {
		return supplierService.getSupplier(id);
	}
	
	@GetMapping("/getallsupplier")
	public Object getAllSupplier(@RequestHeader(value ="Authorization") String auth){
		return supplierService.getAllSupplier();
	}
	
	@GetMapping("/supplierdashboard")
	public Object supplierDashboard(@RequestHeader(value ="Authorization") String auth){
		User u=supplierService.getUser(auth);
		return supplierService.supplierDashboard(u.getId());
	}
	

	
	
}
