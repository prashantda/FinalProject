package com.file.controller;

import java.util.Random;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.aspectj.weaver.NewConstructorTypeMunger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.file.model.Message;
import com.file.model.User;
import com.file.service.EmailService;
import com.file.service.UserService;

@Controller
@RequestMapping("/home")
public class HomeController {
	
	
	@Autowired
	private UserService userService;
	@Autowired
	private EmailService emailService;

	@GetMapping("/ya")
	public String Home(Model model)
	{
		model.addAttribute("title","Home-Enterprise Management");
		return "homepage";
	}
	@GetMapping("/forgot")
	public String forgotPassword(Model model)
	{
		model.addAttribute("title","Forgot/Change Password");
		
		return "forgotpassword";
	}
	@PostMapping("/changepassword")
	public String changePassword(@RequestParam("username") String email,Model model,HttpSession session)
	{
		User user1=userService.findByUsername(email);
		if(user1==null) {
			session.setAttribute("message","User not found with given email");
			return "forgotpassword";
		}
				
		int status =this.emailService.sendMail(email);
		if(status!=0) {
			model.addAttribute("title","Verify OTP");
			session.setAttribute("otp", status);
			session.setAttribute("email",email);
			session.setAttribute("message","Check your inbox/spam");		
			return "verifyotp";
		}
		else {
			session.setAttribute("message","Somthing went wrong");
			return "forgotpassword";
		}
		
	}

	@PostMapping("/verification")
	public String changePass(@RequestParam("otp") Integer myotp,HttpSession session,Model model ) {
	int otp =(int) session.getAttribute("otp");
	String email=(String) session.getAttribute("email");
	session.setAttribute("email",email);
	if((int)otp == myotp) {	
		
		return "change_password";}
	else {
		System.out.println(otp+"    fail entered"+myotp);

		session.setAttribute("message","You have entered wrong otp ");
		return "verifyotp";
	}		
	}
	
	@PostMapping("/changing")
	public String changingPassword(@RequestParam("password") String password,HttpSession session) {
		String email=(String) session.getAttribute("email");
		userService.changePassword(email,password);
		return "login";
	}
	
	
	
	
	
	@GetMapping("/about")
	public String about(Model model)
	{
		model.addAttribute("title","About-Yogeshwar Associates");
		return "about";
	}
	
	@GetMapping("/login")
	public String login(Model model)
	{
		model.addAttribute("title","Login");
		return "login";
	}
	
	
}
