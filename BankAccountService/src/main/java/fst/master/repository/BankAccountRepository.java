package fst.master.repository;

import fst.master.entitties.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BankAccountRepository  extends JpaRepository<BankAccount, UUID> {
}
