package com.file.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.file.model.Employee;
import com.file.model.User;
import com.file.repository.UserRepository;
import com.file.service.EmployeeService;
import com.file.service.UserService;

@Controller
@RequestMapping("/signed")
public class LoginController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private EmployeeService employeeService;
	@ModelAttribute
	public void addCommonData(Model model,Principal principal) {
		User user=userService.findByUsername(principal.getName());
		model.addAttribute("user",user);
	}
	
	@GetMapping("/profile")
	public String firstpage(Model model,Principal principal)
	{
		model.addAttribute("title","Profile");
		User user=userService.findByUsername(principal.getName());
		model.addAttribute("user",user);
		if(user.getRole().equals("ROLE_ADMIN"))
			{
			Employee emp= 	employeeService.findByUser(user);
				model.addAttribute("employee",emp);
			return "admin/admin_dashboard";
			}
		else if(user.getRole().equals("ROLE_EMPLOYEE")) {
			Employee emp= 	employeeService.findByUser(user);
			model.addAttribute("employee",emp);
			return "employee/employee_dashboard";

		}
		else if(user.getRole().equals("ROLE_ACCOUNTANT")) {
			Employee emp= 	employeeService.findByUser(user);
			model.addAttribute("employee",emp);
			return "accountant/employee_dashboard";

		}
		return "homepage";
	}
}
