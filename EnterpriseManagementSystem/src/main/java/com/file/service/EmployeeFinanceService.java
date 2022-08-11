package com.file.service;

import java.util.List;

import com.file.model.Employee;
import com.file.model.EmployeeFinance;
import com.file.model.User;

public interface EmployeeFinanceService {
	List<EmployeeFinance> findAll();
	EmployeeFinance findById(int theId);
	
	EmployeeFinance save(EmployeeFinance theUser);

	void deleteById(int theId);
	List<EmployeeFinance> findByEmployee(Employee employee);
	int getLastEF(Employee employee);
	int isFirst(Employee empl);
	void saveFirst(EmployeeFinance emplfin);
	
	
}
