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

public interface EmployeeFinanceRepository extends JpaRepository<EmployeeFinance,Integer> {
	
	List<EmployeeFinance> findByEmployee(Employee employee);
	@Query(value ="select max(id) from employee_finance where employee_id=:eid",nativeQuery = true)
	int getLastEF(@Param("eid") Employee employee);
	
	@Query(value ="select count(*) from employee_finance where employee_id=:eid",nativeQuery = true)
	int isFirst(@Param("eid") Employee employee);
	
}
