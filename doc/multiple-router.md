# 多路由文件功能

多路由功能可以完全的自定义路由。

### 核心文件
```
plugin/router.js
util/router.js
```

### 使用示例
```
import router from '@vue/modules/util/router';

router.init(require.context('/pages', true, /\/router.js$/));
router.init(require.context('/pages', true, /\/(.+?).router.js$/);
```
