package com.file.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.file.model.EmpUser;
import com.file.model.Employee;
import com.file.model.EmployeeFinance;
import com.file.model.User;
import com.file.repository.EmployeeRepository;
import com.file.repository.UserRepository;

import lombok.NoArgsConstructor;
@NoArgsConstructor
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	@Autowired
	private EmployeeFinanceService employeeFinanceService;
	
	@Override
	@Transactional
	public List<User> findAll(){
		return userRepository.findAll();
	}

	@Override
	@Transactional
	public User findById(long theId) {
		
		return userRepository.findById(theId).get();
	}

	@Override
	@Transactional
	public boolean save(User theUser) {
		try {
			theUser.setEnabled(true);
		theUser.setId(0);	
		theUser.setPassword(passwordEncoder.encode(theUser.getPassword()));
		User user1=userRepository.findByUsername(theUser.getUsername());		
		User user2=userRepository.findByMobile(theUser.getMobile());
		System.out.println(user2);
		if(user1!=null || user2!=null)
		{	System.out.println("User present");
		System.out.println(user1);
		System.out.println(user2);
		
			return false;}
		userRepository.save(theUser);		
		return true;
		}catch(Exception e) {		
			return false;}
	}
	
	@Override
	@Transactional
	public boolean saveEmp(User user) {
		try {

		user.setAddress("");		
		user.setDob("");
		user.setEnabled(true);
		user.setId(0);
		user.setIdCard("");
		user.setImage("");	
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User user1=userRepository.findByUsername(user.getUsername());		
		User user2=userRepository.findByMobile(user.getMobile());
		if(user1!=null || user2!=null)
		{
			return false;}
		userRepository.save(user);		
		user1=userRepository.findByUsername(user.getUsername());
		Employee employ=new Employee(0,"",0.0,user1);
		employeeRepository.save(employ);
		
		return true;
		}catch(Exception e) {		
			return false;}
	}
	
	
	@Override
	@Transactional
	public boolean updateEmp(User user) {
		try {			
		userRepository.save(user);
		return true;
		}catch(Exception e) {		
			return false;}
	}
	

	@Override
	@Transactional
	public void deleteById(long id) {
		userRepository.deleteById(id);
	}

	

	@Override
	@Transactional
	public User findByMobile(String mobile) {
		
		return userRepository.findByMobile(mobile);
	}

	@Override
	@Transactional
	public User findByUsername(String username) {
		
		return userRepository.findByUsername(username);
	}

	
	
	public void changePassword(String email, String password) {
		password=passwordEncoder.encode(password);
		User user=userRepository.findByUsername(email);
		user.setPassword(password);
		userRepository.save(user);		
	}

	

}
