package fst.master.web;

import fst.master.entitties.BankAccount;
import fst.master.services.AccountService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("accounts")
public class AccountController {
    public final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public List<BankAccount> getAccountList() {
        return accountService.getAllAccounts();
    }

    @GetMapping("{id}")
    public BankAccount getAccount(@PathVariable UUID id) {
        return accountService.getAccountById(id);
    }
}
