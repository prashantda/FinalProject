package com.utility.valueobjects;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@Data
@ToString
@NoArgsConstructor
public class SDashboard {

	private long allorders;
	private long completedorders;
	private long cancalledorders;
	private long pendingorders;
	private long neworders;
	private long customers;
	private long suppliers;
	private long services;
}
