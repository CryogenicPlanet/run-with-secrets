# Secrets to Env

Run a command with all secrets as environment variables


```yaml
  uses: cryogenicplanet/secrets-to-env@v1
  with:
    secrets: ${{ toJson(secrets) }}
    command: printenv
```