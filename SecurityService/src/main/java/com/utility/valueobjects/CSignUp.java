package com.utility.valueobjects;

import java.util.Date;

import org.springframework.stereotype.Component;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class CSignUp {
	private String name;
	private String address;	
	private int pincode;
	private Date dob;
	private long aadhaar;
	private String mobile;
	private String username;	
	private int service;
	private int charge;
	private String role;
	private  int isAccountNonExpired;
	private   int isAccountNonLocked;
	private  int isCredentialsNonExpired;
	private  int isEnabled;
			
}
