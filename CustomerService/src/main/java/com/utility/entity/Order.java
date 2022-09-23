package com.utility.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Orders")
@Entity
@Component
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long orderid;
	@Column
	@Size(min=8,max=512)
	private String description;
	@Column(nullable = false,length = 16)
	@NotBlank
	private String status;
	@Column(nullable = false,length = 16)
	
	
	private Date orderdate;
	@JsonBackReference
	@ManyToOne(cascade = CascadeType.ALL)
	private Customer customerid;
	@Column(nullable = false)
	private long supplierid;
	@Column(nullable = false)
	private int servicetypeid;
	@Column
	@Value("0")
	private int rating;
	@Column
	@Value("-")
	private String feedback;
	

}
