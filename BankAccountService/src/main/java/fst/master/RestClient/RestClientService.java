package fst.master.RestClient;

import fst.master.model.Client;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "CLIENT-SERVICE")
public interface RestClientService {
    @GetMapping("clients/{clientId}")
    @CircuitBreaker(name = "clientServiceCircuitBreaker", fallbackMethod = "fallBackForGetClientById")
    Client getClientById(@PathVariable Long clientId);

    default Client fallBackForGetClientById(Long clientId, Exception exception) {
        return new Client(null, "default name", "default@gmail.com");
    }

}
