package com.domino.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloWorldController {
	
	//Request Mapping
	@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	@CrossOrigin(origins="http://localhost:4200")
	public String helloWorld() {
		return "Hello World!";
	}
	
	//Get Mapping
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean");
	}

}
