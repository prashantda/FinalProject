package com.utility.entity;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.utility.model.User;

import lombok.*;



@Entity
@Table(name = "Customers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long customerid;
	
	@Column
	private String address;
	@Column
	private int pincode;
	@Column
	private long aadhaar;
	@Column
	private Date dob;	
	@Column
	private long userid;
	@JsonIgnore
	@JsonManagedReference
	@OneToMany(mappedBy = "customerid",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private List<Order> orders=new ArrayList<Order>(); 
	
	
}
