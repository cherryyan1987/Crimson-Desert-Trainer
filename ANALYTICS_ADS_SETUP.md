# 分析和广告配置指南

本项目支持多种分析和广告服务，可以通过环境变量进行配置。

## 🔍 分析服务配置

### 谷歌分析 (Google Analytics)

**环境变量**: `GOOGLE_ANALYTICS_ID`

**格式**: `G-XXXXXXXXXX` 或 `UA-XXXXXXXXX-X`

**示例**:
```bash
GOOGLE_ANALYTICS_ID = "G-1234567890"
```

**获取步骤**:
1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建一个账号和属性
3. 在"管理" -> "数据流"中创建网站数据流
4. 复制"衡量 ID"（格式：G-XXXXXXXXXX）

**支持的代码类型**:
- Google Analytics 4 (GA4): `G-XXXXXXXXXX`
- Universal Analytics: `UA-XXXXXXXXX-X`

---

### 微软 Clarity (Microsoft Clarity)

**环境变量**: `CLARITY_ID`

**格式**: `xxxxxxxxxx` (10位字符)

**示例**:
```bash
CLARITY_ID = "abcdefghij"
```

**获取步骤**:
1. 访问 [Microsoft Clarity](https://clarity.microsoft.com/)
2. 登录并创建新项目
3. 在项目设置中找到 Clarity ID
4. 复制项目ID（10位字符）

**功能**:
- 用户会话录制
- 热力图分析
- 用户行为洞察

---

### Plausible Analytics

**环境变量**:
- `PLAUSIBLE_DOMAIN`: 你的网站域名
- `PLAUSIBLE_SRC`: Plausible 脚本路径

**示例**:
```bash
PLAUSIBLE_DOMAIN = "crimsondeserttrainer.com"
PLAUSIBLE_SRC = "https://plausible.io/js/script.js"
```

**特点**:
- 隐私友好的分析工具
- 无需cookie同意
- 轻量级脚本

---

### Vercel Analytics

**环境变量**: `VERCEL_ANALYTICS_ENABLED`

**示例**:
```bash
VERCEL_ANALYTICS_ENABLED = "true"
```

**注意**: 仅在使用 Vercel 部署时可用

---

## 📢 广告服务配置

### Google AdSense

**环境变量**: `ADSENSE_CODE`

**格式**: `ca-pub-xxxxxxxxxxxxxxxx`

**示例**:
```bash
ADSENSE_CODE = "ca-pub-1234567890123456"
```

**获取步骤**:
1. 访问 [Google AdSense](https://adsense.google.com/)
2. 创建 AdSense 账号
3. 添加你的网站
4. 在"广告" -> "概览"中找到发布商 ID
5. 复制完整的发布商 ID（ca-pub-xxxxxxxxxxxxxxxx）

**注意事项**:
- 需要等待网站审核通过
- 审核通过后广告才会显示
- 确保网站符合 AdSense 政策

---

## 🚀 快速开始

### 1. 复制环境变量模板

```bash
cp .env.example .env
```

### 2. 填写你的分析和广告代码

编辑 `.env` 文件：

```bash
# 分析服务
GOOGLE_ANALYTICS_ID = "G-你的GA4_ID"
CLARITY_ID = "你的Clarity_ID"

# 广告服务
ADSENSE_CODE = "ca-pub-你的AdSense_ID"
```

### 3. 重启开发服务器

```bash
npm run dev
# 或
pnpm dev
```

### 4. 验证配置

- **检查分析代码**: 在浏览器中打开开发者工具，查看网络请求中是否包含相应的分析脚本
- **检查广告代码**: 等待 AdSense 审核通过后，查看页面源代码中是否包含 ad-client 配置

---

## 🔧 生产环境配置

### Vercel 部署

1. 在 Vercel 项目设置中添加环境变量
2. 重新部署项目

### Cloudflare Workers 部署

1. 在 Cloudflare Workers 设置中添加环境变量
2. 重新部署 Worker

### 其他主机

1. 在主机的环境变量配置中添加相应的变量
2. 重启应用

---

## 📊 配置优先级

系统按以下优先级加载配置：

1. **环境变量** (最高优先级)
2. **数据库配置** (通过管理后台设置)
3. **默认值** (代码中的默认配置)

**注意**: 如果设置了环境变量，将覆盖数据库中的配置。

---

## 🛠️ 管理后台配置

你也可以通过管理后台动态配置这些服务：

1. 访问 `/admin/settings/analytics` 配置分析服务
2. 访问 `/admin/settings/ads` 配置广告服务

**优势**:
- 无需重启应用
- 支持多人协作
- 配置版本控制

---

## 🔒 安全建议

1. **不要提交敏感信息**: 将 `.env` 文件添加到 `.gitignore`
2. **使用不同环境**: 开发、测试、生产环境使用不同的分析ID
3. **定期检查**: 定期检查分析和广告数据，确保配置正确
4. **备份数据**: 定期导出分析数据，避免数据丢失

---

## 📈 分析代码位置

分析代码会自动插入到：
- `<head>` 标签中（首屏加载）
- 页面底部（某些分析工具）

你可以通过以下方式验证：

```javascript
// 在浏览器控制台中检查
window.dataLayer // Google Analytics
window.clarity // Microsoft Clarity
```

---

## ❓ 常见问题

### Q: 分析代码不工作？

**A**: 检查以下几点：
1. 环境变量是否正确设置
2. 是否重启了开发服务器
3. 浏览器是否阻止了第三方脚本
4. 网络连接是否正常

### Q: AdSense 广告不显示？

**A**: 可能的原因：
1. 网站还在审核中
2. 违反了 AdSense 政策
3. 广告拦截插件
4. 代码配置错误

### Q: 可以同时使用多个分析工具吗？

**A**: 是的，你可以同时启用所有支持的分析工具。

---

## 📞 支持

如果遇到问题：
1. 检查各服务的官方文档
2. 查看浏览器控制台错误
3. 验证环境变量配置
4. 联系技术支持

---

**最后更新**: 2024年4月

**适用版本**: Crimson Desert Trainer v1.0+