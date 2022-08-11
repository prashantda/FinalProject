package com.utility.valueobjects;

import com.utility.entity.Supplier;

import lombok.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseTemplate {
	private Customer customer;
	private Supplier supplier;
}
