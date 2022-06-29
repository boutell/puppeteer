## FlattenHandle type

**Signature:**

```typescript
export declare type FlattenHandle<T> = T extends HandleOr<infer U> ? U : never;
```

**References:** [HandleOr](./puppeteer.handleor.md)
