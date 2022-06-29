# Puppeteer.connect() method

This method attaches Puppeteer to an existing browser instance.

**Signature:**

```typescript
connect(options: ConnectOptions): Promise<Browser>;
```

## Parameters

| Parameter | Type                                            | Description                                        |
| --------- | ----------------------------------------------- | -------------------------------------------------- |
| options   | [ConnectOptions](./puppeteer.connectoptions.md) | Set of configurable options to set on the browser. |

**Returns:**

Promise&lt;[Browser](./puppeteer.browser.md)&gt;

Promise which resolves to browser instance.

## Remarks
