package com.utility.valueobjects;

import org.springframework.beans.factory.annotation.Autowired;

import com.utility.entity.Supplier;
import com.utility.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@AllArgsConstructor
@Data
@ToString
@NoArgsConstructor
public class USC {
	
	private Customer customer;
	
	private Supplier supplier;
	
	private User user;
}
