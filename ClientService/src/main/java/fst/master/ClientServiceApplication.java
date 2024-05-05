package fst.master;

import fst.master.entities.Client;
import fst.master.repository.ClientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class ClientServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClientServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(ClientRepository clientRepository){
        return args -> {
            Client mossaab = Client.builder()
                    .name("mossaab")
                    .email("zegaoui")
                    .createdAt(LocalDateTime.now())
                    .build();
            Client anass = Client.builder()
                    .name("anass")
                    .email("zegaoui")
                    .createdAt(LocalDateTime.now())
                    .build();
            Client omar = Client.builder()
                    .name("omar")
                    .email("zegaoui")
                    .createdAt(LocalDateTime.now())
                    .build();
            clientRepository.save(mossaab);
            clientRepository.save(anass);
            clientRepository.save(omar);
        };
    }
}
