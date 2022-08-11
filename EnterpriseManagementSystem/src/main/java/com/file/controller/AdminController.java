package com.file.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.file.model.EmpUser;
import com.file.model.Employee;
import com.file.model.User;
import com.file.service.EmployeeService;
import com.file.service.UserService;

@Controller
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private EmployeeService employeeService;
	
	@ModelAttribute
	public void addCommonData(Model model,Principal principal) {
		User user=userService.findByUsername(principal.getName());
		model.addAttribute("user",user);
	}
	
	@GetMapping("/employees/{page}")
	public String employees(@PathVariable("page") Integer page, Model model)
	{
		model.addAttribute("title","Employees");
		Pageable pageable=PageRequest.of(page,3);
		Page<Employee> empl=  employeeService.findAll(pageable);
		model.addAttribute("employees",empl);
		model.addAttribute("currentPage",page);
		model.addAttribute("totalPages",empl.getTotalPages());
		return "admin/employees";
	}
	
	
	
	
	@GetMapping("/employee-details/{eid}")
	public String employeeDetails(@PathVariable("eid") int eid,Model model)
	{
		model.addAttribute("title","EmployeeDetails");
		Employee employee=employeeService.findById(eid);
		model.addAttribute("employee", employee);
		return "admin/employee_details";
	}
	@GetMapping("/employee-delete/{eid}")
	public String employeeDelete(@PathVariable("eid") int eid,Model model)
	{
		employeeService.deleteById(eid);
		return "redirect:/admin/employees/0";
		 
	}
	
	@GetMapping("/home")
	public String firstpage(Model model)
	{
		model.addAttribute("title","Profile");
		return "firstpage";
	}
	
	
	@GetMapping("/dashboard")
	public String profile(Model model,Principal principal) {
		User user=userService.findByUsername(principal.getName());
	Employee emp= 	employeeService.findByUser(user);
		model.addAttribute("employee",emp);
		return "admin/admin_dashboard";
	}
	
	@GetMapping("/editprofile")
	public String editprofile() {
		return "admin/edit_profile";
	}
		
	@GetMapping("/signup")
	public String signup(Model model)
{		model.addAttribute("title","Signup");
		model.addAttribute("user1",new User());
		return "admin/signup";
	}
}
