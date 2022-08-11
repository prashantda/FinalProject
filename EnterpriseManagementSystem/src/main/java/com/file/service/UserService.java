package com.file.service;

import java.util.List;

import com.file.model.EmpUser;
import com.file.model.User;

import lombok.NoArgsConstructor;

public interface UserService {

	public List<User> findAll();
	public User findById(long theId);
	
	public boolean save(User theUser);

	void deleteById(long id);
	public User findByUsername(String username);
	public User findByMobile(String mobile);
	public boolean saveEmp(User user);
	boolean updateEmp(User user);
	 void changePassword(String email, String password);

}
