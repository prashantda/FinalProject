package com.file.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table
public class EmployeeFinance implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private int id;
	 @ManyToOne
	 private Employee employee;
	 @CreatedDate
	 private Date month;
	 private int workingDays;
	 private double grosssalary;
	 private int deduction;
	 private int advance;
	 private int remaining;
	 private double netSalary;
//	 private int bankAccountNo;
	
	
		
		
	
	 
}
