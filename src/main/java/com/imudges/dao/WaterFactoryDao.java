package com.imudges.dao;

import com.imudges.entity.WaterFactory;

import java.util.List;

/**
 * Created by Administrator on 2017/4/11 0011.
 */

public interface WaterFactoryDao {
    /*
    * 查询全部的水厂*/
    public List<WaterFactory> queryAllWaterFactory();

    /*
    * 通过id进行查询*/
    public WaterFactory queryById(int wfId);

}
