package com.loollablk.messageservice.entity;

public class RequestData {

	private String name;
	private String uid;

	public RequestData() {
	}

	public RequestData(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}
}
