package com.imudges.Service.Impl;

import com.imudges.Service.UserService;
import com.imudges.dao.UserDao;
import com.imudges.entity.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by Administrator on 2017/4/27 0027.
 */
@Service
public class UserServiceImpl implements UserService{
    @Resource
    UserDao userDao;
    public User getUserById(String id) {
        return userDao.getUserById(id);
    }
}
