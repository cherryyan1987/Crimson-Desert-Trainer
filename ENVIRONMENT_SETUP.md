# 🔧 环境配置完整指南

## 📋 环境配置文件说明

本项目支持多环境配置，每个环境有独立的配置文件：

| 文件 | 用途 | 优先级 |
|------|------|--------|
| `.env.development` | 开发环境 | 默认 |
| `.env.test` | 测试环境 | 测试时 |
| `.env.production` | 生产环境 | 部署时 |
| `.env.example` | 配置模板 | 参考 |

---

## 🚀 快速开始

### 1. 开发环境设置

```bash
# 开发环境配置已存在，直接使用
cp .env.development .env.local

# 或者创建你自己的开发配置
cp .env.example .env.local
```

### 2. 生产环境设置

```bash
# 复制生产环境模板
cp .env.production .env.local

# 编辑并填写真实的配置信息
nano .env.local
```

### 3. 测试环境设置

```bash
# 复制测试环境模板
cp .env.test .env.local
```

---

## ⚙️ 配置文件详解

### 开发环境 (.env.development)

```bash
# 开发环境默认配置
NEXT_PUBLIC_APP_URL = "http://localhost:3000"
DATABASE_PROVIDER = "sqlite" # 使用本地 SQLite
GOOGLE_ANALYTICS_ID = ""    # 开发时不启用分析
ADSENSE_CODE = ""            # 开发时不显示广告
```

**特点**：
- 使用 SQLite 数据库（无需额外安装）
- 不启用分析和广告（避免污染数据）
- 本地开发服务器配置

### 生产环境 (.env.production)

```bash
# 生产环境配置（需要填写真实信息）
NEXT_PUBLIC_APP_URL = "https://crimsondeserttrainer.com"
DATABASE_PROVIDER = "postgres" # 使用生产数据库
GOOGLE_ANALYTICS_ID = "G-真实的ID"  # 必须配置
ADSENSE_CODE = "ca-pub-真实的ID"    # 必须配置
```

**特点**：
- 使用 PostgreSQL/MySQL 数据库
- 必须配置真实分析ID
- 必须配置AUTH_SECRET
- 启用所有监控和广告

### 测试环境 (.env.test)

```bash
# 测试环境配置
DATABASE_PROVIDER = "sqlite" # 使用测试数据库
GOOGLE_ANALYTICS_ID = ""    # 测试时不启用
ADSENSE_CODE = ""            # 测试时不显示
```

**特点**：
- 独立的测试数据库
- 不启用外部服务
- 快速测试配置

---

## 🔑 关键配置项说明

### 应用配置

```bash
NEXT_PUBLIC_APP_URL = "https://yourdomain.com"  # 网站 URL
NEXT_PUBLIC_APP_NAME = "Your App Name"         # 网站名称
```

### 数据库配置

```bash
# SQLite (开发/测试)
DATABASE_PROVIDER = "sqlite"
DATABASE_URL = "file:data/local.db"

# PostgreSQL (生产)
DATABASE_PROVIDER = "postgres"
DATABASE_URL = "postgresql://user:pass@host:5432/db"

# MySQL (生产)
DATABASE_PROVIDER = "mysql"
DATABASE_URL = "mysql://user:pass@host:3306/db"
```

### 分析配置

```bash
# Google Analytics
GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX"

# Microsoft Clarity
CLARITY_ID = "xxxxxxxxxx"

# Plausible (可选)
PLAUSIBLE_DOMAIN = "yourdomain.com"
PLAUSIBLE_SRC = "https://plausible.io/js/script.js"
```

### 广告配置

```bash
# Google AdSense
ADSENSE_CODE = "ca-pub-xxxxxxxxxxxxxxxx"
```

---

## 🎯 不同环境配置策略

### 本地开发

```bash
# 使用 .env.development
npm run dev
```

**配置重点**：
- 快速启动，最小依赖
- 不启用分析和广告
- 使用 SQLite 数据库

### 功能测试

```bash
# 使用 .env.test
npm run test
```

**配置重点**：
- 独立测试数据库
- 模拟生产环境配置
- 不启用外部服务

### 生产部署

```bash
# 使用 .env.production
npm run build
npm run start
```

**配置重点**：
- 真实数据库连接
- 启用所有分析和监控
- 配置真实的广告ID

---

## 🛠️ 环境切换

### 方法一：使用 .env.local

```bash
# 开发环境
cp .env.development .env.local

# 生产环境
cp .env.production .env.local

# 测试环境
cp .env.test .env.local
```

### 方法二：指定环境文件

```bash
# 开发
NODE_ENV=development npm run dev

# 生产
NODE_ENV=production npm run build

# 测试
NODE_ENV=test npm run test
```

### 方法三：部署平台设置

**Vercel**:
```javascript
// vercel.json 或 Vercel 控制台环境变量
{
  "env": {
    "GOOGLE_ANALYTICS_ID": "G-XXXXXXXXXX",
    "CLARITY_ID": "xxxxxxxxxx"
  }
}
```

**Cloudflare**:
```bash
# wrangler.toml 或 Cloudflare 控制台
[vars]
GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX"
CLARITY_ID = "xxxxxxxxxx"
```

---

## 🔒 安全最佳实践

### ✅ 推荐做法

1. **不提交敏感信息**
   ```bash
   # .gitignore
   .env.local
   .env.*.local
   ```

2. **使用不同密钥**
   ```bash
   # 开发环境
   AUTH_SECRET = "dev-secret"
   
   # 生产环境
   AUTH_SECRET = "strong-production-secret"
   ```

3. **环境变量验证**
   ```bash
   # 启动前检查必需的环境变量
   if [ -z "$AUTH_SECRET" ]; then
     echo "Error: AUTH_SECRET is required"
     exit 1
   fi
   ```

### ❌ 避免做法

1. 在代码中硬编码配置
2. 提交真实ID到Git仓库
3. 所有环境使用相同配置
4. 忽略配置文件权限

---

## 📊 配置验证

### 检查当前环境

```bash
# 查看当前环境变量
npm run dev

# 在应用中检查
console.log('Environment:', process.env.NODE_ENV)
console.log('Database:', process.env.DATABASE_PROVIDER)
console.log('Analytics:', process.env.GOOGLE_ANALYTICS_ID)
```

### 验证配置加载

```javascript
// 在浏览器控制台
console.log('App URL:', process.env.NEXT_PUBLIC_APP_URL)
console.log('Analytics:', window.dataLayer) // Google Analytics
console.log('Clarity:', window.clarity)     // Microsoft Clarity
```

---

## 🚨 常见问题

### Q: 配置没有生效？

**A**: 检查以下几点：
1. 确认使用了正确的环境文件
2. 重启开发服务器
3. 检查环境变量名称是否正确
4. 确认 .env.local 不存在冲突

### Q: 生产环境如何配置？

**A**: 
1. 复制 `.env.production` 到 `.env.local`
2. 填写真实的生产环境配置
3. 确保 `AUTH_SECRET` 已设置
4. 配置真实的分析ID

### Q: 如何在部署平台配置？

**A**: 
1. **Vercel**: 在项目设置中添加环境变量
2. **Cloudflare**: 在 `wrangler.toml` 或控制台配置
3. **Docker**: 在 `docker-compose.yml` 中配置
4. **VPS**: 在 `/etc/environment` 或 systemd 配置

---

## 📚 相关文件

- `.env.development` - 开发环境配置
- `.env.test` - 测试环境配置
- `.env.production` - 生产环境配置
- `.env.example` - 配置模板
- `.env.example.analytics` - 分析配置示例

---

## 🎁 快速命令

```bash
# 开发环境
npm run dev

# 生产构建
npm run build

# 生产启动
npm run start

# 测试
npm run test

# 检查配置
cat .env.local

# 验证环境
node -e "console.log(process.env.NODE_ENV)"
```

---

**最后更新**: 2024年4月14日
**维护者**: Crimson Desert Trainer Team