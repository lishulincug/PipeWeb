package com.imudges.entity;

/**
 * Created by Administrator on 2017/4/27 0027.
 */
public class User {
    private String uId;
    private String uPassword;

    public String getuId() {
        return uId;
    }

    public void setuId(String uId) {
        this.uId = uId;
    }

    public String getuPassword() {
        return uPassword;
    }

    public void setuPassword(String uPassword) {
        this.uPassword = uPassword;
    }
}
