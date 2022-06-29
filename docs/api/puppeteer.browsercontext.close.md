# BrowserContext.close() method

Closes the browser context. All the targets that belong to the browser context will be closed.

**Signature:**

```typescript
close(): Promise<void>;
```

**Returns:**

Promise&lt;void&gt;

## Remarks

Only incognito browser contexts can be closed.
