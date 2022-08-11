package com.file.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.file.model.Employee;
import com.file.model.EmployeeFinance;
import com.file.model.User;

public interface EmployeeService {
	List<Employee> findAll();
	Employee findById(int theId);
	
	Employee save(Employee theUser);

	void deleteById(int theId);
	Employee findByUser(User user);
	Page<Employee> findAll(Pageable pageable);
	List<EmployeeFinance> getFinancesByEid(int eid);
	
}
