package com.file.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.file.model.Employee;
import com.file.model.EmployeeFinance;
import com.file.model.User;
import com.file.repository.EmployeeRepository;
import com.file.repository.UserRepository;
@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private UserRepository userRepository;
	@Override
	@Transactional
	public Page<Employee> findAll(Pageable pageable) {
		
		return employeeRepository.getAllEmployees(pageable);
	}

	
	@Override
	@Transactional
	public List<EmployeeFinance> getFinancesByEid(int eid) {
		
		return employeeRepository.getFinancesByEid(eid);
	}
	
	
	@Override
	@Transactional
	public Employee findById(int theId) {
		
		return employeeRepository.findById(theId).get();
	}

	@Override
	@Transactional
	public Employee save(Employee employee) {
		Employee emp=employeeRepository.save(employee);
		return emp;
		
		
	}

	@Override
	@Transactional
	public void deleteById(int theId) {
		employeeRepository.deleteById(theId);
	}
	@Override
	@Transactional
	public Employee findByUser(User user) {
		return employeeRepository.findByUser(user);
	}

	@Override
	public List<Employee> findAll() {
		
		return employeeRepository.findAll();
	}

}
