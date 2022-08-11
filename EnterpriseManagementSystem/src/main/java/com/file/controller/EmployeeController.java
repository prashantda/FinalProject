package com.file.controller;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
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
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private EmployeeFinanceService employeeFinance;
	@ModelAttribute
	public void addCommonData(Model model,Principal principal) {
		User user=userService.findByUsername(principal.getName());
		Employee employee=employeeService.findByUser(user);
		model.addAttribute("employee",employee);
		model.addAttribute("user",user);
	}
	@GetMapping("/salary/{eid}")
	public String salary(@PathVariable("eid") int eid, Model model,Principal principal) {
		Employee emp=employeeService.findById(eid);
		List<EmployeeFinance> empf=	employeeFinance.findByEmployee(emp);
		User user=userService.findByUsername(principal.getName());
		Employee employee=employeeService.findByUser(user);
		
		if(employee.getId()==eid) {
		model.addAttribute("emplf", empf);
		model.addAttribute("emplo", emp);}
		else {
			model.addAttribute("emplf", new ArrayList<EmployeeFinance>());
			model.addAttribute("emplo", new Employee());
		}
		
		return "employee/allsalaries";
	}
	@GetMapping("/editprofile")
	public String editprofile() {
		return "employee/edit_profile";
	}
	
	@PostMapping("/edit")
	public String update(@ModelAttribute("user") User user,@RequestParam("profileimage") MultipartFile profileimage,@RequestParam("iCard") MultipartFile iCard,Principal principal,HttpSession httpSession)
	{
		try {			
			if(profileimage.isEmpty() || iCard.isEmpty()) {
				httpSession.setAttribute("message",new Message("Profile updated successfuly! Photo or IdCard is Empty ","success"));
				userService.updateEmp(user);
			}
			else {	
				user.setImage(profileimage.getOriginalFilename());
				user.setIdCard(iCard.getOriginalFilename());
				userService.updateEmp(user);
				File saveFile=new ClassPathResource("static/imag").getFile();
				File saveFile1=new ClassPathResource("static/imag").getFile();				
				Path path=Paths.get(saveFile.getAbsolutePath()+File.separator+profileimage.getOriginalFilename());
				Path path1=Paths.get(saveFile1.getAbsolutePath()+File.separator+iCard.getOriginalFilename());
				Files.copy(profileimage.getInputStream(),path,StandardCopyOption.REPLACE_EXISTING);
				Files.copy(iCard.getInputStream(),path1,StandardCopyOption.REPLACE_EXISTING);
				httpSession.setAttribute("message",new Message("Prifile updated successfully","success"));
				
			}
		
		}catch(Exception e) {
			httpSession.setAttribute("message",new Message("Something went wrong","danger"));
			
		}
		return "employee/edit_profile";
		
	}
	
}
