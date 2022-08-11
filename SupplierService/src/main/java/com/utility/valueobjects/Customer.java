package com.utility.valueobjects;
import lombok.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
	private long id;
	private String name;
	private String email;
	private String mobile;
	private String address;
}
