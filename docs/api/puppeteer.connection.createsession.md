# Connection.createSession() method

**Signature:**

```typescript
createSession(targetInfo: Protocol.Target.TargetInfo): Promise<CDPSession>;
```

## Parameters

| Parameter  | Type                       | Description     |
| ---------- | -------------------------- | --------------- |
| targetInfo | Protocol.Target.TargetInfo | The target info |

**Returns:**

Promise&lt;[CDPSession](./puppeteer.cdpsession.md)&gt;

The CDP session that is created
