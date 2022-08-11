package com.file.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.file.model.Employee;
import com.file.model.EmployeeFinance;
import com.file.model.Message;
import com.file.model.User;
import com.file.service.EmployeeFinanceService;
import com.file.service.EmployeeService;
import com.file.service.UserService;
@Controller
@RequestMapping("/accountant")
public class AccountantController {
	@Autowired
	private UserService userService;
	@Autowired
	private EmployeeFinanceService employeeFinance;
	@Autowired
	private EmployeeService employeeService;
	
	@ModelAttribute
	public void addCommonData(Model model,Principal principal) {
		User user=userService.findByUsername(principal.getName());
		Employee emp= 	employeeService.findByUser(user);
		model.addAttribute("employee",emp);
		model.addAttribute("user",user);
	}
	
	@PostMapping("/deletesalary/{eid}")
	public String deleteSalary(@PathVariable("eid") int eid,Model model)
	{	EmployeeFinance emplfin=employeeFinance.findById(eid);
		Employee employee=emplfin.getEmployee();
		employeeFinance.deleteById(eid);
		List<EmployeeFinance> empf=	employeeFinance.findByEmployee(employee);
		model.addAttribute("emplf", empf);
		model.addAttribute("emplo", employee);		
		return "accountant/allsalaries";
	}
	
	@GetMapping("/employee-salary/{eid}")
	public String salary(@PathVariable("eid") int eid,Model model) {
		
		Employee employee=employeeService.findById(eid);
		model.addAttribute("empl",employee);
		EmployeeFinance emplfin=new EmployeeFinance();
		model.addAttribute("emplfin", emplfin);
		return "accountant/salary";}
	
	
	@GetMapping("/salaries/{eid}")
	public String getAllSalaries(@PathVariable("eid") int eid,Model model)
	{ 
		Employee emp=employeeService.findById(eid);
	List<EmployeeFinance> empf=	employeeFinance.findByEmployee(emp);
		model.addAttribute("emplf", empf);
		model.addAttribute("emplo", emp);
		return "accountant/allsalaries";
	}
	
	
	@PostMapping("/salary")
	public String salaryCalcula(@ModelAttribute("emplfin") EmployeeFinance emplfin,@ModelAttribute("empl") Employee empl,Model model) {
		Employee employee=employeeService.findById(empl.getId());		
		emplfin.setEmployee(employee);
		if(employeeFinance.isFirst(employee)!=0)
		{employeeFinance.save(emplfin);}
		else {
			employeeFinance.saveFirst(emplfin);
		}	
		model.addAttribute("emplo", employee);
		List<EmployeeFinance> empf=	employeeFinance.findByEmployee(employee);
		model.addAttribute("emplf", empf);
		return "accountant/allsalaries";
		
		
		
	}
	
	@PostMapping("/empsave")
	public String empSave(@ModelAttribute("empl") Employee empl, Model model,Principal principal,HttpSession session) {		
		Employee employee=employeeService.findById(empl.getId());
	employee.setJobProfile(empl.getJobProfile());
	employee.setSalary(empl.getSalary());
	employee.getUser().setEnabled(empl.getUser().isEnabled());	
		employeeService.save(employee);
		session.setAttribute("message",new Message("Updated Successfully","alert-success"));

		return "accountant/edit_employee";}
	
	
	@GetMapping("/editprofile")
	public String editprofile(Model model) {
	
		return "accountant/edit_profile";}
	
	@GetMapping("/employees/{page}")
	public String employees(@PathVariable("page") Integer page, Model model)
	{
		model.addAttribute("title","Employees");
		Pageable pageable=PageRequest.of(page,3);
		Page<Employee> empl=  employeeService.findAll(pageable);
		model.addAttribute("employees",empl);
		model.addAttribute("currentPage",page);
		model.addAttribute("totalPages",empl.getTotalPages());
		return "accountant/employees";
	}
	
	@GetMapping("/employee-details/{eid}")
	public String employeeDetails(@PathVariable("eid") int eid,Model model)
	{
		model.addAttribute("title","EmployeeDetails");
		Employee employee=employeeService.findById(eid);
		model.addAttribute("employee", employee);
		return "accountant/employee_details";
	}
	
	@GetMapping("/employee-update/{eid}")
	public String employeeUpdate(@PathVariable("eid") int eid,Model model)
	{
		model.addAttribute("title","EmployeeDetails");
		Employee employee=employeeService.findById(eid);
		model.addAttribute("empl", employee);
		return "accountant/edit_employee";
	}
	
		
	
}
