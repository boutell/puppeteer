## BrowserLaunchArgumentOptions interface

Launcher options that only apply to Chrome.

**Signature:**

```typescript
export interface BrowserLaunchArgumentOptions
```

## Properties

| Property                                                                    | Modifiers | Type                | Description                                                                                                                                                                     |
| --------------------------------------------------------------------------- | --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [args?](./puppeteer.browserlaunchargumentoptions.args.md)                   |           | string\[\]          | <i>(Optional)</i> Additional command line arguments to pass to the browser instance.                                                                                            |
| [debuggingPort?](./puppeteer.browserlaunchargumentoptions.debuggingport.md) |           | number              | <i>(Optional)</i>                                                                                                                                                               |
| [devtools?](./puppeteer.browserlaunchargumentoptions.devtools.md)           |           | boolean             | <i>(Optional)</i> Whether to auto-open a DevTools panel for each tab. If this is set to <code>true</code>, then <code>headless</code> will be forced to <code>false</code>.     |
| [headless?](./puppeteer.browserlaunchargumentoptions.headless.md)           |           | boolean \| 'chrome' | <i>(Optional)</i> Whether to run the browser in headless mode.                                                                                                                  |
| [userDataDir?](./puppeteer.browserlaunchargumentoptions.userdatadir.md)     |           | string              | <i>(Optional)</i> Path to a user data directory. [see the Chromium docs](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/user_data_dir.md) for more info. |