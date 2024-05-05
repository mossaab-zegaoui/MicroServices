package fst.master;

import fst.master.entitties.BankAccount;
import fst.master.repository.BankAccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import static fst.master.entitties.BankAccountType.CHECKING_ACCOUNT;
import static fst.master.entitties.BankAccountType.SAVING_ACCOUNT;

@SpringBootApplication
@EnableFeignClients
public class BankAccountServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BankAccountServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner lineRunner(BankAccountRepository accountRepository) {
        return args -> {
            BankAccount account1 = BankAccount.builder()
                    .balance(BigDecimal.valueOf(Math.random() * 15000))
                    .accountType(SAVING_ACCOUNT)
                    .clientId(1L)
                    .createdAt(LocalDate.now())
                    .build();
            BankAccount account2 = BankAccount.builder()
                    .balance(BigDecimal.valueOf(Math.random() * 33000))
                    .accountType(CHECKING_ACCOUNT)
                    .clientId(1L)
                    .createdAt(LocalDate.now())
                    .build();
            BankAccount account3 = BankAccount.builder()
                    .balance(BigDecimal.valueOf(Math.random() * 15000))
                    .accountType(SAVING_ACCOUNT)
                    .createdAt(LocalDate.now())
                    .clientId(2L)
                    .build();
            BankAccount account4 = BankAccount.builder()
                    .balance(BigDecimal.valueOf(Math.random() * 33000))
                    .accountType(CHECKING_ACCOUNT)
                    .clientId(2L)
                    .createdAt(LocalDate.now())
                    .build();
            List<BankAccount> accounts = List.of(account1, account2, account3, account4);
            accountRepository.saveAll(accounts);
        };
    }
}
