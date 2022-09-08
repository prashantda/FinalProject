package com.utility.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utility.entity.User;
import com.utility.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
}
