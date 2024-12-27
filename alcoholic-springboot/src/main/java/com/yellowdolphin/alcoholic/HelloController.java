package com.yellowdolphin.alcoholic;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@RequestMapping(value = "/")
	public String spring() {
		return "THIS GONNA BE THE ALCOHOLIC SHOPPING MALL!!";
	}

	@RequestMapping(value = "/hello")
	public String hello() {
		return "Hello World!!";
	}
}
