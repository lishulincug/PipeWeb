package com.imudges.entity;

/**
 * Created by Administrator on 2017/4/11 0011.
 */
public class WaterFactory {
    private Long wfId;
    private String wfLocal;//水源地
    private int wfVoltage;//电压
    private int wfCurrent;//电流
    private double wfPress;//压力
    private long wfFlow;//流量
    private int wfLever;//液位
    private int wfValve;//阀门开关

    public Long getWfId() {
        return wfId;
    }

    public void setWfId(Long wfId) {
        this.wfId = wfId;
    }

    public String getWfLocal() {
        return wfLocal;
    }

    public void setWfLocal(String wfLocal) {
        this.wfLocal = wfLocal;
    }

    public int getWfVoltage() {
        return wfVoltage;
    }

    public void setWfVoltage(int wfVoltage) {
        this.wfVoltage = wfVoltage;
    }

    public int getWfCurrent() {
        return wfCurrent;
    }

    public void setWfCurrent(int wfCurrent) {
        this.wfCurrent = wfCurrent;
    }

    public double getWfPress() {
        return wfPress;
    }

    public void setWfPress(double wfPress) {
        this.wfPress = wfPress;
    }

    public long getWfFlow() {
        return wfFlow;
    }

    public void setWfFlow(long wfFlow) {
        this.wfFlow = wfFlow;
    }

    public int getWfLever() {
        return wfLever;
    }

    public void setWfLever(int wfLever) {
        this.wfLever = wfLever;
    }

    public int getWfValve() {
        return wfValve;
    }

    public void setWfValve(int wfValve) {
        this.wfValve = wfValve;
    }

    @Override
    public String toString() {
        return "WaterFactory{" +
                "wfId=" + wfId +
                ", wfLocal='" + wfLocal + '\'' +
                ", wfVoltage=" + wfVoltage +
                ", wfCurrent=" + wfCurrent +
                ", wfPress=" + wfPress +
                ", wfFlow=" + wfFlow +
                ", wfLever=" + wfLever +
                ", wfValve=" + wfValve +
                '}';
    }
}
