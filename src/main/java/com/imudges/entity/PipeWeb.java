package com.imudges.entity;

/**
 * Created by Administrator on 2017/4/11 0011.
 */
public class PipeWeb {
    private long pwId;
    private String pwLocal;//水源地
    private long pwFlow;//流量
    private double pwPress; //水压

    public long getPwId() {
        return pwId;
    }

    public void setPwId(long pwId) {
        this.pwId = pwId;
    }

    public String getPwLocal() {
        return pwLocal;
    }

    public void setPwLocal(String pwLocal) {
        this.pwLocal = pwLocal;
    }

    public long getPwFlow() {
        return pwFlow;
    }

    public void setPwFlow(long pwFlow) {
        this.pwFlow = pwFlow;
    }

    public double getPwPress() {
        return pwPress;
    }

    public void setPwPress(double pwPress) {
        this.pwPress = pwPress;
    }

    @Override
    public String toString() {
        return "PipeWeb{" +
                "pwId=" + pwId +
                ", pwLocal='" + pwLocal + '\'' +
                ", pwFlow=" + pwFlow +
                ", pwPress=" + pwPress +
                '}';
    }
}
