package com.file.service;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.Month;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.file.model.Employee;
import com.file.model.EmployeeFinance;
import com.file.model.EmployeeFinance;
import com.file.model.User;
import com.file.repository.EmployeeFinanceRepository;
import com.file.repository.EmployeeFinanceRepository;
import com.file.repository.UserRepository;
@Service
public class EmployeeFinanceImpl implements EmployeeFinanceService{

	@Autowired
	private EmployeeFinanceRepository employeeFinanceRepository;
	@Autowired
	private UserRepository userRepository;
//	private  DecimalFormat df = new DecimalFormat("0.00");

	
	
	
	@Override
	@Transactional
	public EmployeeFinance findById(int theId) {
		
		return employeeFinanceRepository.findById(theId).get();
	}

	@Override
	@Transactional
	public EmployeeFinance save(EmployeeFinance employee) {
		try {
			
		double sal=employee.getEmployee().getSalary();
		double perday=sal/getMonthDays();
		double grossSalary=perday*(employee.getWorkingDays()+getSunday() );
		double netSalary=grossSalary-employee.getDeduction();			
		double remain;double remaining;
		Integer last=employeeFinanceRepository.getLastEF(employee.getEmployee());
		EmployeeFinance emplast=employeeFinanceRepository.findById(last).get();
		 remain=emplast.getRemaining();	
		 remaining=remain-employee.getDeduction()+employee.getAdvance();
		employee.setGrosssalary( (int)grossSalary);
		employee.setNetSalary((int)netSalary);
		employee.setRemaining((int)remaining);
		employee.setMonth(new Date());
		EmployeeFinance emp=employeeFinanceRepository.save(employee);
		return emp;}
		catch (Exception e) {
			throw new RuntimeException ("Error");
		}
		
		
	}
	@Override
	public void saveFirst(EmployeeFinance employee) {
		double sal=employee.getEmployee().getSalary();
		double perday=sal/getMonthDays();
		double grossSalary=perday*(employee.getWorkingDays()+getSunday() );
		double netSalary=grossSalary-employee.getDeduction();			
		double remain=0;double remaining;		
		remaining=remain-employee.getDeduction()+employee.getAdvance();
		employee.setGrosssalary((int)grossSalary);
		employee.setNetSalary((int)netSalary);
		employee.setRemaining((int)remaining);
		employee.setMonth(new Date());
		EmployeeFinance emp=employeeFinanceRepository.save(employee);
		
	}
	@Override
	@Transactional
	public int isFirst(Employee empl) {
		return employeeFinanceRepository.isFirst(empl);
	}
	
	public String Month()
	{
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		Date date = cal.getTime();             
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
		return format1.format(date);            
		
	}
	
	
	@Override
	@Transactional
	public int getLastEF(Employee employee) {
	return	employeeFinanceRepository.getLastEF(employee);
	}
	public  int getMonthDays() {
		Date someDayInCurrentMonth=new Date();
	    Calendar lastMonthCal = Calendar.getInstance();
	    lastMonthCal.setTime(someDayInCurrentMonth);
	    lastMonthCal.add(Calendar.MONTH, -1);
	    return lastMonthCal.getActualMaximum(Calendar.DAY_OF_MONTH);
	}
	public  int getSunday() {
		int sun=0;
		Calendar c = Calendar.getInstance();
		int year = c.get(Calendar.YEAR);
		int month = c.get(Calendar.MONTH);
		int monthdays= getMonthDays();
		Calendar cal=new GregorianCalendar();
		month+=1;
		for(int i=1;i<=monthdays;i++) {
			cal.set(year,month,i);
			if((cal.get(Calendar.DAY_OF_WEEK))==(Calendar.SUNDAY))
				{sun++;}           
		}
		return sun;
	}

	@Override
	@Transactional
	public void deleteById(int theId) {
		employeeFinanceRepository.deleteById(theId);
	}
	@Override
	@Transactional
	public List<EmployeeFinance> findByEmployee(Employee user) {
		return employeeFinanceRepository.findByEmployee(user);
	}

	@Override
	@Transactional
	public List<EmployeeFinance> findAll() {
		
		return employeeFinanceRepository.findAll();
	}

	

}
