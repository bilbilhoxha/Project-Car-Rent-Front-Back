package com.bh.online.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderServiceImpl implements EmailSenderService {

    private final JavaMailSender mailSender;

    public EmailSenderServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendEmail(String name, String email, String message) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("xhejsihoxha67@gmail.com");
        simpleMailMessage.setTo(email);
        simpleMailMessage.setSubject("Contact Form Submission from " + name);
        simpleMailMessage.setText(message);

        this.mailSender.send(simpleMailMessage);
    }
}
