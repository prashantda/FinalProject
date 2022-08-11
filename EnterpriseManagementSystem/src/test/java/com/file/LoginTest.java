package com.file;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTest {
	
	public LoginTest() {
	
	}
	@Test
	public void LoginTesting() {
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\GodboleG\\eclipse-workspace\\Automation_Testing\\src\\test\\resources\\chromedriver.exe");
		driver.get("https://github.com/login");
		driver.findElement(By.xpath("//*[@id=\"login_field\"]")).sendKeys("darade@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("darade");
		driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[3]/input")).click();
		


		
	}

}
