package com.imudges.controller;

import com.imudges.Service.PipeWebService;
import com.imudges.entity.PipeWeb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by Administrator on 2017/4/11 0011.
 */
@Controller
@RequestMapping(value = "/PipeWeb")
public class PipeWebController {
    @Autowired
    PipeWebService pipeWebService;
    @RequestMapping(value = "/map",method = RequestMethod.GET)
    public String details(Model model){
        List<PipeWeb> allPipeWeb = pipeWebService.queryAllPipeWebInfo();
        model.addAttribute("allPipeWeb",allPipeWeb);
        System.out.println(allPipeWeb);
        return "map";
    }
}
