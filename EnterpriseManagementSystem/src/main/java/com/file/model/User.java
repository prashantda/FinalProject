package com.file.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table
@Component
public class User implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
   private long id;
   @Column(length = 128)
   @NotBlank(message = "Name field is required")
   @Size(min=2,max=64,message="Min 2 and Max 64 characters are allowed")
   private String name;
   @Column(unique = true,length = 64,nullable = false)
   @Pattern(regexp = "[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+")
   @NotBlank(message = "Email field is required")
   @Size(min=4,max=64,message="Min 4 and Max 64 characters are allowed")
   private String username;
   @Column(nullable = false,length = 128)
//  @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",message = "Minimum 8 and maximum 20 characters \n at least one uppercase letter, one lowercase letter, one number and one special character")
   @NotBlank(message = "Password field is required")
   private String password;
   @Column(unique = true,length = 16)
   @Pattern(regexp = "(0|91)?[7-9][0-9]{9}",message = "Enter Valid mobile number")
   @NotBlank(message = "Mobile field is required")
   private String mobile;
   @Column(nullable = false,length = 16)
   private String role;
   private String dob;
   private String address;
   private String image;
   private String idCard;  
   private boolean enabled;
   
	

}
