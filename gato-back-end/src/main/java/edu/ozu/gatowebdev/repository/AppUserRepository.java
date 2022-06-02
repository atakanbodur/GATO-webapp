package edu.ozu.gatowebdev.repository;

import edu.ozu.gatowebdev.entities.AppUser;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface AppUserRepository extends CrudRepository<AppUser, Long> {

    Optional<AppUser> findByUserName(String userName);
    Optional<AppUser> findByEmail(String email);
    List<AppUser> findAll();

    // test method
    List<AppUser> findAllByUserName(String userName);

}
