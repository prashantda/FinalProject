package com.utility.model;
import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class User {
	
	private long id;	
	private String name;	
	private String username;
	private String password;
	private String mobile;
	private String role;
    private  boolean isAccountNonExpired;
	private   boolean isAccountNonLocked;
	private  boolean isCredentialsNonExpired;
	private  boolean isEnabled;
	
}
