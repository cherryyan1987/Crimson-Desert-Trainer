# 🔧 Crimson Desert Trainer - 环境配置快速指南

## 📋 配置文件说明

| 文件 | 用途 | 是否提交Git |
|------|------|-------------|
| `.env.development` | 开发环境配置 | ✅ 是 |
| `.env.test` | 测试环境配置 | ✅ 是 |
| `.env.production` | 生产环境配置 | ✅ 是 |
| `.env.example` | 配置模板 | ✅ 是 |
| `.env.local` | 本地覆盖配置 | ❌ 否 |

## 🚀 快速开始

### 1. 选择你的环境

```bash
# 开发环境 (默认)
cp .env.development .env.local

# 测试环境
cp .env.test .env.local

# 生产环境
cp .env.production .env.local
```

### 2. 编辑配置

```bash
# 使用你喜欢的编辑器
nano .env.local
# 或
vim .env.local
# 或
code .env.local
```

### 3. 验证配置

```bash
# 运行配置检查脚本
npx tsx scripts/check-env.ts
```

### 4. 启动应用

```bash
# 开发环境
npm run dev

# 生产环境
npm run build
npm run start
```

## 🎯 不同环境配置要点

### 开发环境 (.env.development)

**重点**: 快速启动，最小依赖

```bash
# 数据库：SQLite (无需额外安装)
DATABASE_PROVIDER = "sqlite"
DATABASE_URL = "file:data/local.db"

# 分析：不启用 (避免污染数据)
GOOGLE_ANALYTICS_ID = ""
CLARITY_ID = ""

# 广告：不显示
ADSENSE_CODE = ""
```

### 测试环境 (.env.test)

**重点**: 独立测试，快速验证

```bash
# 数据库：独立的 SQLite
DATABASE_URL = "file:data/test.db"

# 分析：不启用
GOOGLE_ANALYTICS_ID = ""

# 广告：不显示
ADSENSE_CODE = ""
```

### 生产环境 (.env.production)

**重点**: 真实配置，启用所有功能

```bash
# 数据库：PostgreSQL 或 MySQL
DATABASE_PROVIDER = "postgres"
DATABASE_URL = "postgresql://user:pass@host:5432/db"

# 分析：必须配置真实ID
GOOGLE_ANALYTICS_ID = "G-你的真实ID"
CLARITY_ID = "你的真实ID"

# 广告：必须配置真实ID
ADSENSE_CODE = "ca-pub-你的真实ID"

# 安全：必须设置强密钥
AUTH_SECRET = "your-strong-production-secret"
```

## 🔑 关键配置项

### 必需配置 (生产环境)

```bash
# 应用
NEXT_PUBLIC_APP_URL = "https://crimsondeserttrainer.com"
NEXT_PUBLIC_APP_NAME = "Crimson Desert Trainer"

# 数据库
DATABASE_PROVIDER = "postgres"
DATABASE_URL = "你的数据库连接字符串"

# 安全
AUTH_SECRET = "至少32位的随机字符串"
```

### 可选配置

```bash
# 分析
GOOGLE_ANALYTICS_ID = ""  # 如果不使用，留空
CLARITY_ID = ""           # 如果不使用，留空

# 广告
ADSENSE_CODE = ""         # 如果不使用，留空
```

## 🛡️ 安全配置

### 生成 AUTH_SECRET

```bash
# 方法一：使用 openssl
openssl rand -base64 32

# 方法二：使用 node
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 配置权限

```bash
# 设置正确的文件权限
chmod 600 .env.local

# 确保文件不会被误提交
git update-index --assume-unchanged .env.local
```

## 📊 验证配置

### 检查环境变量

```bash
# 查看当前环境
node -e "console.log(JSON.stringify(process.env, null, 2))"

# 检查特定配置
echo $DATABASE_PROVIDER
echo $GOOGLE_ANALYTICS_ID
```

### 浏览器验证

```javascript
// 在浏览器控制台中
console.log('Environment:', process.env.NODE_ENV);
console.log('App URL:', process.env.NEXT_PUBLIC_APP_URL);

// 检查分析脚本
console.log('GA:', window.dataLayer);
console.log('Clarity:', window.clarity);
```

## 🚨 常见问题

### Q: 配置没有生效？

```bash
# 1. 检查文件是否存在
ls -la .env.local

# 2. 检查文件内容
cat .env.local

# 3. 重启开发服务器
npm run dev

# 4. 清除缓存
rm -rf .next
npm run dev
```

### Q: 生产环境如何配置？

```bash
# 1. 复制生产环境配置
cp .env.production .env.local

# 2. 编辑并填写真实信息
nano .env.local

# 3. 验证配置
npx tsx scripts/check-env.ts

# 4. 构建生产版本
npm run build
```

### Q: 部署到平台如何配置？

**Vercel**:
1. 进入项目设置 → Environment Variables
2. 添加对应的环境变量
3. 重新部署

**Cloudflare**:
1. 编辑 `wrangler.toml`
2. 添加 `[vars]` 部分
3. 重新部署

**Docker**:
1. 编辑 `docker-compose.yml`
2. 添加 `environment` 部分
3. 重新构建容器

## 📝 配置检查清单

### 开发环境
- [ ] 复制 `.env.development` 到 `.env.local`
- [ ] 检查数据库配置
- [ ] 启动开发服务器测试
- [ ] 验证应用正常运行

### 生产环境
- [ ] 复制 `.env.production` 到 `.env.local`
- [ ] 配置真实的数据库连接
- [ ] 设置 `AUTH_SECRET`
- [ ] 配置分析ID (Google Analytics, Clarity)
- [ ] 配置广告ID (AdSense)
- [ ] 运行配置检查脚本
- [ ] 构建并测试生产版本
- [ ] 部署到生产环境
- [ ] 验证所有功能正常

## 🎁 快速命令

```bash
# 设置环境
cp .env.development .env.local

# 编辑配置
nano .env.local

# 验证配置
npx tsx scripts/check-env.ts

# 启动开发
npm run dev

# 构建生产
npm run build

# 启动生产
npm run start
```

## 📚 相关文档

- [完整配置指南](./ENVIRONMENT_SETUP.md)
- [分析配置指南](./ANALYTICS_ADS_SETUP.md)
- [快速分析配置](./QUICK_ANALYTICS_SETUP.md)
- [配置示例](./.env.example.analytics)

---

**最后更新**: 2024年4月14日
**项目**: Crimson Desert Trainer