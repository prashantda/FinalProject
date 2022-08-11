package com.utility.aopconfig;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.utility.model.User;
import com.utility.service.SupplierService;
import com.utility.valueobjects.ResponseTemplate;
import com.utility.valueobjects.USC;

@Aspect
@Component
@CrossOrigin
public class AspectConfiguration {
	@Autowired
	private SupplierService supplierService;
	
	@Pointcut ("execution(*  com.utility.contoller.*.getUSC(..))")
	public void logging() {}
	
	@Around("logging()")	
	public Object supplierAOP(ProceedingJoinPoint pjp) throws Throwable {
		System.out.println("Before");
		Object[] args=pjp.getArgs();
		System.out.println(pjp.getSignature());
//		System.out.println(pjp.getTarget());
		String token=(String)args[0];
		User user=supplierService.getUser(token);
		Object object=null;
		object=pjp.proceed();
		USC usc=new USC();
		usc.setCustomer(((ResponseTemplate)object).getCustomer());
		usc.setSupplier(((ResponseTemplate)object).getSupplier());
		usc.setUser(user);
		object=(Object)usc;
		Object object1=null;
		System.out.println("After");
		if(user !=null)
			return object;
		else 
			return object1;
	}
}
