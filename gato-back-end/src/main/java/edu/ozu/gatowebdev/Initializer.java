package edu.ozu.gatowebdev;

import edu.ozu.gatowebdev.entities.AppUser;
import edu.ozu.gatowebdev.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Initializer implements CommandLineRunner {

    private final AppUserRepository repository;

    @Autowired
    public Initializer(AppUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {

        //dummy data
        List<AppUser> appUserList = new ArrayList<AppUser>(){{
            add(new AppUser(
                    "atakanbodur", "bodur.atakan@gmail.com",
                    "05.25.2000", "lorem"
            ));
            add(new AppUser(
                    "yasemincevik", "cevik.yasemin@gmail.com",
                    "05.25.2000", "ipsum"
            ));
            add(new AppUser(
                    "senembilgin", "bilgin.senem@gmail.com",
                    "05.25.2000", "lorem"
            ));
        }};

        this.repository.saveAll(appUserList);
    }
}
