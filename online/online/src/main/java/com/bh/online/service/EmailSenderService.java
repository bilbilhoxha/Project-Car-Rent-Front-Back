package com.bh.online.service;



public interface EmailSenderService {
    void sendEmail(String to, String message, String subject);
}

