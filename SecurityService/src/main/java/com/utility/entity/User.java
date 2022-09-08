package com.utility.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Users")
@Entity
@Component
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(nullable = false)
	@Size(min=2,max=64)
	private String name;	
	@Column(unique = true,length = 64,nullable = false)
	@Pattern(regexp = "[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+")
	private String username;
	@Column(length = 64,nullable = false)
	private String password;
	@Column(unique = true,length = 16,nullable = false)
	@Pattern(regexp = "(0|91)?[7-9][0-9]{9}",message = "Enter Valid mobile number")
	private String mobile;
	@Column(nullable = false,length = 16)
	@NotBlank
	private String role;
	   private  boolean isAccountNonExpired;
	   private   boolean isAccountNonLocked;
	   private  boolean isCredentialsNonExpired;
	   private  boolean isEnabled;
	
}
