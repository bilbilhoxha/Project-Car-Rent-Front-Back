import com.bh.online.emailresource.ContactForm;
import com.bh.online.service.EmailSenderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    private final EmailSenderService emailSenderService;

    public EmailController(EmailSenderService emailSenderService) {
        this.emailSenderService = emailSenderService;
    }

    @PostMapping("/send-email")
    public ResponseEntity sendEmail(@RequestPart ContactForm contactForm) {
        emailSenderService.sendEmail(contactForm.getName(), contactForm.getEmail(), contactForm.getMessage());
        return ResponseEntity.ok("Email sent successfully");
    }
}
