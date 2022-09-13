package com.utility.valueobjects;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.utility.entity.Customer;
import com.utility.entity.Order;
import com.utility.model.ServiceType;
import com.utility.model.Supplier;
import com.utility.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@AllArgsConstructor
@Data
@ToString
@NoArgsConstructor
public class ALL {
	
	private Customer customer;	
	private Supplier supplier;
	private ServiceType service;
	private Order order;
	private User user;		
	private List<Supplier> supplierslist;
	private List <Customer> customerslist;
	private List<ServiceType> servicelist;
	private List<Order> orderlist;
	private SDashboard sDashboard;
}
