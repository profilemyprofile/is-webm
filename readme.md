# Deno

```typescript
const fileContent = await Deno.readFile("file.ext");
const is = isWEBM(fileContent);
```

# NodeJS

```javascript
const fs = require("fs");

fs.readFile("file.ext").then(fileContent => {
    const is = isWEBM(fileContent);
});
```