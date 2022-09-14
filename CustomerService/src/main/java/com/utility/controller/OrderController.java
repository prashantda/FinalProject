package com.utility.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utility.entity.Customer;
import com.utility.entity.Order;
import com.utility.model.User;
import com.utility.service.CustomerService;
import com.utility.service.OrderService;

import antlr.collections.List;

@RestController
@RequestMapping("/api/order")
@CrossOrigin
public class OrderController {
	@Autowired
	private OrderService os;
	@Autowired
	private CustomerService cs;
	
//	@PostMapping("/saveorder")
//	 public Object  saveOrder(@RequestHeader(value = "Authorization") String auth,@RequestBody Order o) {
//		return os.save(o);
//	}
}
