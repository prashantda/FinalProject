package com.file.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.file.model.Employee;
import com.file.model.EmployeeFinance;
import com.file.model.User;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
	
	Employee findByUser(User user);
	
	@Query(value = "SELECT * FROM EMPLOYEE order by id desc",nativeQuery = true)
	Page<Employee> getAllEmployees(Pageable pageable);
	
	@Query(value = "SELECT * FROM employee_finance ef where employee_id= :eid  order by ef.id desc",nativeQuery = true)
	List<EmployeeFinance> getFinancesByEid(@Param("eid") int eid);
}
