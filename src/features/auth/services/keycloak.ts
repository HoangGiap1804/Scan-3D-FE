// services/keycloak.ts
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8081",
    realm: "test",
    clientId: "test-frontend",
});

export default keycloak;
