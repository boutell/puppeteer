# Page.authenticate() method

Provide credentials for `HTTP authentication`.

**Signature:**

```typescript
authenticate(credentials: Credentials): Promise<void>;
```

## Parameters

| Parameter   | Type                                      | Description |
| ----------- | ----------------------------------------- | ----------- |
| credentials | [Credentials](./puppeteer.credentials.md) |             |

**Returns:**

Promise&lt;void&gt;

## Remarks

To disable authentication, pass `null`.
