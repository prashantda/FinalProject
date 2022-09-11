package com.utility.model;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.*;
import com.utility.model.*;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class Supplier {
	
	
	private long supplierid;
	
	private String address;
	
	private int pincode;
	
	private long aadhaar;
	
	private Date dob;
	private ServiceType serviceType;	
	private long userid;
	private int charge;
 
	
	
}
