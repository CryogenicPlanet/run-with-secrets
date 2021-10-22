# run-with-secrets

Run a command with all secrets as environment variables


```yaml
  uses: cryogenicplanet/run-with-secrets@v1
  with:
    secrets: ${{ toJson(secrets) }} # Required
    command: printenv # Required
```