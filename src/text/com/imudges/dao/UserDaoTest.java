package com.imudges.dao;

import com.imudges.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

/**
 * Created by Administrator on 2017/4/27 0027.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/spring-dao.xml"})
public class UserDaoTest {
    @Resource
    UserDao userDao;
    @Test
    public void getUserById() throws Exception {
        User user = userDao.getUserById("demo");
        System.out.println(user.getuPassword());
    }

}