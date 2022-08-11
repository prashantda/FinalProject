package com.file.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.Principal;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.file.model.EmpUser;
import com.file.model.Employee;
import com.file.model.EmployeeFinance;
import com.file.model.Message;
import com.file.model.User;
import com.file.service.EmployeeFinanceService;
import com.file.service.EmployeeService;
import com.file.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private EmployeeFinanceService employeeFinance;
	@ModelAttribute
	public void addCommonData(Model model,Principal principal) {
		User user=userService.findByUsername(principal.getName());	
		model.addAttribute("user",user);
		Employee emp= 	employeeService.findByUser(user);
		model.addAttribute("employee",emp);
	}
	
	

	@PostMapping("/register")
	public String save(@Valid @ModelAttribute("user1") User user1,BindingResult result,Model model,HttpSession session)
	{
		
		if(result.hasErrors()) {
			model.addAttribute("user1",user1);
			return "admin/signup";
		}
		
		boolean status=userService.saveEmp(user1);
		if(status) {
			model.addAttribute("user1",new User());
			session.setAttribute("message",new Message("Registration Successfull  Please Login","alert-success"));
			Employee employee=employeeService.findByUser(user1);
			return "admin/signup";
		}
		else {
			model.addAttribute("user1",user1);
			session.setAttribute("message",new Message("Something Went Wrong  Please try again","alert-danger"));
			return "admin/signup";
		}
		
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
				String randomID=UUID.randomUUID().toString();
				String random=UUID.randomUUID().toString();
				String photo=profileimage.getOriginalFilename();
				String icard=iCard.getOriginalFilename();
				String photo1=randomID.concat(photo.substring(photo.lastIndexOf(".")));
				String icard1=random.concat(icard.substring(icard.lastIndexOf(".")));
				user.setImage(photo1);
				user.setIdCard(icard1);
				userService.updateEmp(user);

				
				
				
				File saveFile=new ClassPathResource("static/imag").getFile();
				File saveFile1=new ClassPathResource("static/imag").getFile();				
				Path path=Paths.get(saveFile.getAbsolutePath()+File.separator+photo1);
				Path path1=Paths.get(saveFile1.getAbsolutePath()+File.separator+icard1);
				Files.copy(profileimage.getInputStream(),path,StandardCopyOption.REPLACE_EXISTING);
				Files.copy(iCard.getInputStream(),path1,StandardCopyOption.REPLACE_EXISTING);
				httpSession.setAttribute("message",new Message("Profile updated successfully","success"));
				
			}
		
		}catch(Exception e) {
			httpSession.setAttribute("message",new Message("Something went wrong","danger"));
			
		}
		User request=userService.findByUsername(principal.getName());
		if(request.getRole().equals("ROLE_ADMIN"))
		return "admin/edit_profile";
		return "accountant/edit_profile";
		
	}
	
	
}
