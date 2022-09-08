package com.utility.entity;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@Data
@Entity
@AllArgsConstructor
@Table
public class VerificationToken {
	 
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private int otp;
	    @OneToOne(fetch = FetchType.EAGER)
	    private User user;
	   
}
