package com.file.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table
public class Employee implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(nullable = false)
	private String jobProfile;
	@Column(nullable = false)
	private double salary;
	@CreationTimestamp
	private Date joinDate;
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "employee")
	private List<EmployeeFinance> finances=new ArrayList<>();
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private User user;
	public Employee(int id, String jobProfile, double salary, User user) {
		super();
		this.id = id;
		this.jobProfile = jobProfile;
		this.salary = salary;
		this.user = user;
	}
	

}
