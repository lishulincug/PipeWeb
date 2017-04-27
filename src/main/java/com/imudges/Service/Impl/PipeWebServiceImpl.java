package com.imudges.Service.Impl;

import com.imudges.Service.PipeWebService;
import com.imudges.dao.PipeWebDao;
import com.imudges.entity.PipeWeb;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2017/4/11 0011.
 */
@Service
public class PipeWebServiceImpl implements PipeWebService{
    @Resource
    PipeWebDao pipeWebDao;
    public List<PipeWeb> queryAllPipeWebInfo() {
        List<PipeWeb> pipeWeb =pipeWebDao.queryAll();
        return pipeWeb;
    }
}
