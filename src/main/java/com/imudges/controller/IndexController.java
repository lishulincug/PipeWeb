package com.imudges.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Administrator on 2017/4/11 0011.
 */
@Controller
public class IndexController {
    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String login(){
        return "Login";
    }
    @RequestMapping(value = "/index",method = RequestMethod.POST)
    public String index(HttpServletRequest request, HttpServletResponse response){
        if (request.getParameter("username").equals("123")
                &&request.getParameter("password").equals("123")) {
            return "index";
        }
        return "loginfailed";
    }

}
