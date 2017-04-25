package com.imudges.dao;

import com.imudges.entity.PipeWeb;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2017/4/11 0011.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/spring-dao.xml"})
public class PipeWebDaoTest {
    @Resource
    PipeWebDao pipeWebDao;
    @Test
    public void queryAll() throws Exception {
        List<PipeWeb> allPipeWeb = pipeWebDao.queryAll();
        System.out.println(allPipeWeb);
    }

    @Test
    public void queryById() throws Exception {
        PipeWeb pipeWeb = pipeWebDao.queryById(6);
        System.out.println(pipeWeb);
    }

}