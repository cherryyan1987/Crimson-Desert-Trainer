# 快速配置指南 - 分析和广告

## 📋 快速开始

### 1. 复制环境变量文件
```bash
cp .env.example .env
```

### 2. 编辑 `.env` 文件，添加你的分析和广告代码

```bash
# Google Analytics (GA4)
GOOGLE_ANALYTICS_ID = "G-你的ID"

# Microsoft Clarity
CLARITY_ID = "你的Clarity_ID"

# Google AdSense
ADSENSE_CODE = "ca-pub-你的AdSense_ID"
```

### 3. 重启开发服务器
```bash
npm run dev
```

## 🎯 推荐配置

### 最小配置 (推荐)
- Google Analytics (必选)
- Microsoft Clarity (推荐)

### 完整配置
- Google Analytics
- Microsoft Clarity  
- Google AdSense

## 📱 验证配置

打开浏览器控制台，运行：

```javascript
// 检查 Google Analytics
window.dataLayer

// 检查 Microsoft Clarity
window.clarity

// 检查 AdSense
document.querySelector('script[src*="adsbygoogle"]')
```

## 🔗 获取ID

| 服务 | 获取地址 | ID格式 |
|------|----------|--------|
| Google Analytics | https://analytics.google.com/ | `G-XXXXXXXXXX` |
| Microsoft Clarity | https://clarity.microsoft.com/ | `xxxxxxxxxx` |
| Google AdSense | https://adsense.google.com/ | `ca-pub-xxxxxxxxxxxxxxxx` |

## 📚 详细文档

查看完整配置指南：[ANALYTICS_ADS_SETUP.md](./ANALYTICS_ADS_SETUP.md)

## ⚠️ 注意事项

1. **不要提交真实ID到Git仓库**
2. **生产环境使用真实ID，开发环境可留空**
3. **AdSense需要审核通过后才会显示广告**
4. **定期检查分析数据确保配置正确**

---

**快速帮助**: 
- 开发环境: 可以暂时留空
- 生产环境: 必须配置真实的分析ID
- 广告收入: 需要 AdSense 审核通过