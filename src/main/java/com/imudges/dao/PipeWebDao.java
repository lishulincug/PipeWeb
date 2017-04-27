package com.imudges.dao;

import com.imudges.entity.PipeWeb;

import java.util.List;

/**
 * Created by Administrator on 2017/4/11 0011.
 */
/*
*管网dao接口
* */

public interface PipeWebDao {
    /*
    * 查询所有的管网*/
    public List<PipeWeb> queryAll();
    /*
    * 通过id查找相应的管网
    * */
    public PipeWeb queryById(int pwId);

    /**通过地点查找管网
     * */
    public PipeWeb queryByLocal(String pwLocal);
}
