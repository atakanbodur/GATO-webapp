package edu.ozu.gatowebdev.entities;


import javax.persistence.*;

@Entity
@Table(name = "appusers")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id",unique=true, nullable = false)
    private Long id;
    @Column(unique=true, nullable = false)
    private String userName;
    @Column(unique=true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String dateOfBirth;
    @Column(nullable = false)
    private String password;

    public AppUser(String userName, String email, String dateOfBirth, String password) {
        this.userName = userName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
    }

    public AppUser() {

    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", dateOfBirth='" + dateOfBirth + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
