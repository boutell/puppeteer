# PuppeteerNode.product property

The name of the browser that is under automation (`"chrome"` or `"firefox"`)

**Signature:**

```typescript
get product(): string;
```

## Remarks

The product is set by the `PUPPETEER_PRODUCT` environment variable or the `product` option in `puppeteer.launch([options])` and defaults to `chrome`. Firefox support is experimental.
