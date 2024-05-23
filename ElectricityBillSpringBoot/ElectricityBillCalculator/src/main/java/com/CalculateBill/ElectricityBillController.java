package com.CalculateBill;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ElectricityBillController {

    @GetMapping("/")
    public String getHomePage() {
        return "index";
    }
}
