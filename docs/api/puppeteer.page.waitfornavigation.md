## Page.waitForNavigation() method

This resolves when the page navigates to a new URL or reloads. It is useful when you run code that will indirectly cause the page to navigate. Consider this example:

```js
const [response] = await Promise.all([
  page.waitForNavigation(), // The promise resolves after navigation has finished
  page.click('a.my-link'), // Clicking the link will indirectly cause a navigation
]);
```

**Signature:**

```typescript
class Page {
  waitForNavigation(options?: WaitForOptions): Promise<HTTPResponse | null>;
}
```

## Parameters

| Parameter | Type                                            | Description                                                                        |
| --------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| options   | [WaitForOptions](./puppeteer.waitforoptions.md) | <i>(Optional)</i> Navigation parameters which might have the following properties: |

**Returns:**

Promise&lt;[HTTPResponse](./puppeteer.httpresponse.md) \| null&gt;

Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. In case of navigation to a different anchor or navigation due to History API usage, the navigation will resolve with `null`.

## Remarks

NOTE: Usage of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to change the URL is considered a navigation.

Shortcut for [page.mainFrame().waitForNavigation(options)](./puppeteer.frame.waitfornavigation.md).