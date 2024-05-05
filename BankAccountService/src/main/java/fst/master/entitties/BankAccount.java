package fst.master.entitties;

import fst.master.model.Client;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@NoArgsConstructor @AllArgsConstructor @Builder
@Getter @Setter
public class BankAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private BankAccountType accountType;
    private BigDecimal balance;
    private LocalDate createdAt;
    private Long clientId;
    @Transient
    private Client client;
}
