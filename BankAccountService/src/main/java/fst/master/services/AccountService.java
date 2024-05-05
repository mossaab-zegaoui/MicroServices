package fst.master.services;

import fst.master.RestClient.RestClientService;
import fst.master.entitties.BankAccount;
import fst.master.model.Client;
import fst.master.repository.BankAccountRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AccountService {
    private final BankAccountRepository accountRepository;
    private final RestClientService serviceClient;

    public AccountService(BankAccountRepository accountRepository, RestClientService serviceClient) {
        this.accountRepository = accountRepository;
        this.serviceClient = serviceClient;
    }

    public List<BankAccount> getAllAccounts() {
        return accountRepository.findAll();
    }

    public BankAccount getAccountById(UUID id) {

        BankAccount bankAccount = accountRepository.findById(id).get();
        Client client = serviceClient.getClientById(bankAccount.getClientId());
        bankAccount.setClient(client);
        return bankAccount;
    }
}
