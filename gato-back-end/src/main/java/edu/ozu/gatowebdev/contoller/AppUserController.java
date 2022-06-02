package edu.ozu.gatowebdev.contoller;

import edu.ozu.gatowebdev.entities.AppUser;
import edu.ozu.gatowebdev.services.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")


public class AppUserController {

    @Autowired
    AppUserService service;

    @GetMapping("/test")
    public ResponseEntity<String> Test() {
        String str = "testing...1,2,3";
        return ResponseEntity.ok().body(str);
    }

    @PostMapping(path="/save-user",consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<Object> saveUser(@ModelAttribute AppUser user)  {
       try {
           AppUser createdUser = service.createUser(user);
           System.out.println("User created. \n" + user.toString());
           return ResponseEntity.ok().body(createdUser);
       }
       catch (Exception e){
           return ResponseEntity.badRequest().body(e.getMessage());
       }
    }

    @GetMapping("/get-user-by-name/{name}")
    public ResponseEntity<Optional<AppUser>> getUserByUsername(@PathVariable String name){
        return ResponseEntity.ok().body(service.getUserByUsername(name));
    }

    @GetMapping("/get-user-by-email/{email}")
    public ResponseEntity<Optional<AppUser>> getUserByEmail(@PathVariable String email){
        return ResponseEntity.ok().body(service.getUserByEmail(email));
    }

    @GetMapping("/get-all")
    public ResponseEntity<Collection<AppUser>> getAll(){
        return ResponseEntity.ok().body(service.getAll());
    }


}
