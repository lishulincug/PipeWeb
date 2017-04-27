package com.imudges.Service;

import com.imudges.entity.PipeWeb;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * Created by Administrator on 2017/4/11 0011.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/spring-service.xml",
                        "classpath:spring/spring-dao.xml"})
public class PipeWebServiceTest {
    @Autowired
    PipeWebService pipeWebService;

    @Test
    public void queryAllPipeWebInfo() throws Exception {
        List<PipeWeb> pipeWeb = pipeWebService.queryAllPipeWebInfo();
        System.out.println(pipeWeb);
    }

}