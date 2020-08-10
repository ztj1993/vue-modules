# px-to-rem

### 核心文件
```
config/postcss-px-to-viewport.js
util/zoom.js
```

### 启用环境
```
POSTCSS_PLUGIN_PX2REM_ENABLE=true
```

### 使用示例
```
import zoom from '@vue/modules/util/zoom';

zoom.init(1024, 768);
zoom.set_body_font_size();
zoom.set_html_font_size();
```
