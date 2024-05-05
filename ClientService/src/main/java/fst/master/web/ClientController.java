package fst.master.web;

import fst.master.entities.Client;
import fst.master.service.ClientService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("clients")
public class ClientController {
    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> getClientList() {
        return clientService.getAllClients();
    }

    @GetMapping("{id}")
    public Client getClient(@PathVariable Long id) {
        return clientService.getClientById(id);
    }
}
