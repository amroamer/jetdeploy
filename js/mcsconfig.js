define(["mcs"],function(e){function a(){var a=this;e.MobileBackendManager.setConfig(n),a.MobileBackend=e.MobileBackendManager.getMobileBackend("mcsJet"),a.MobileBackend.setAuthenticationType("basicAuth")}var n={logLevel:e.LOG_LEVEL.INFO,logHTTP:!0,mobileBackends:{mcsJet:{default:!0,baseUrl:"https://mcs-gse00011723.mobileenv.us2.oraclecloud.com:443",applicationKey:"02f5dab3-407c-456a-bf67-c83d73d56643",authorization:{basicAuth:{backendId:"69506791-223c-4c95-bac8-fbb1d360b685",anonymousToken:"R1NFMDAwMTE3MjNfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6bzRvdW5neURxLmpsMG0="}}}}};return new a});