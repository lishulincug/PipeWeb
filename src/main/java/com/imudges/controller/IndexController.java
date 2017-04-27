package com.imudges.controller;


import com.imudges.Service.UserService;
import com.imudges.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
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
   @Autowired
   UserService userService;

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String login(){
        return "Login";
    }
    @RequestMapping(value = "/index",method = RequestMethod.POST)
    public String index(HttpServletRequest request, HttpServletResponse response){
        User user = userService.getUserById(request.getParameter("username"));
        if(user!=null&&user.getuPassword().equals(request.getParameter("password")))
            return "index";
        return "loginfailed";
    }

}
