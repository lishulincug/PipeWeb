package com.imudges.Service;

import com.imudges.entity.PipeWeb;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/4/11 0011.
 *
 */

public interface PipeWebService {
    public List<PipeWeb> queryAllPipeWebInfo();
}
