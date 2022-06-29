# Page.off() method

**Signature:**

```typescript
off<K extends keyof PageEventObject>(eventName: K, handler: (event: PageEventObject[K]) => void): EventEmitter;
```

## Parameters

| Parameter | Type                                                                       | Description |
| --------- | -------------------------------------------------------------------------- | ----------- |
| eventName | K                                                                          |             |
| handler   | (event: [PageEventObject](./puppeteer.pageeventobject.md)\[K\]) =&gt; void |             |

**Returns:**

[EventEmitter](./puppeteer.eventemitter.md)
