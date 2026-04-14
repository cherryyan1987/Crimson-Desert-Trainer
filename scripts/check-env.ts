#!/usr/bin/env tsx

/**
 * 环境配置检查脚本
 * 用于验证必需的环境变量是否已设置
 */

interface EnvConfig {
  name: string;
  required: boolean;
  description: string;
  validator?: (value: string) => boolean;
}

const configs: EnvConfig[] = [
  // 应用配置
  {
    name: 'NEXT_PUBLIC_APP_URL',
    required: true,
    description: '应用 URL',
    validator: (value) => value.startsWith('http') || value.startsWith('https'),
  },
  {
    name: 'NEXT_PUBLIC_APP_NAME',
    required: true,
    description: '应用名称',
  },

  // 数据库配置
  {
    name: 'DATABASE_PROVIDER',
    required: true,
    description: '数据库提供者 (sqlite, postgres, mysql)',
    validator: (value) => ['sqlite', 'postgres', 'mysql', 'd1'].includes(value),
  },
  {
    name: 'DATABASE_URL',
    required: true,
    description: '数据库连接字符串',
  },

  // 认证配置
  {
    name: 'AUTH_SECRET',
    required: true,
    description: '认证密钥',
    validator: (value) => value.length >= 32,
  },

  // 分析配置 (可选)
  {
    name: 'GOOGLE_ANALYTICS_ID',
    required: false,
    description: 'Google Analytics ID',
    validator: (value) => value === '' || value.startsWith('G-') || value.startsWith('UA-'),
  },
  {
    name: 'CLARITY_ID',
    required: false,
    description: 'Microsoft Clarity ID',
    validator: (value) => value === '' || value.length === 10,
  },

  // 广告配置 (可选)
  {
    name: 'ADSENSE_CODE',
    required: false,
    description: 'Google AdSense Code',
    validator: (value) => value === '' || value.startsWith('ca-pub-'),
  },
];

function checkEnvConfig(env: NodeJS.ProcessEnv): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  console.log('🔍 检查环境配置...\n');

  configs.forEach((config) => {
    const value = env[config.name];
    const isSet = value !== undefined && value !== '';

    // 检查必需配置
    if (config.required && !isSet) {
      errors.push(`❌ 缺少必需配置: ${config.name} (${config.description})`);
      return;
    }

    // 检查配置格式
    if (isSet && config.validator && !config.validator(value)) {
      errors.push(`❌ 配置格式错误: ${config.name} (${config.description})`);
      return;
    }

    // 显示已设置的配置
    if (isSet) {
      const displayValue = config.name.includes('SECRET') || config.name.includes('AUTH')
        ? '***已设置***'
        : value;

      if (config.required) {
        console.log(`✅ ${config.name}: ${displayValue}`);
      } else {
        console.log(`ℹ️  ${config.name}: ${displayValue}`);
        warnings.push(`可选配置已设置: ${config.name}`);
      }
    } else {
      console.log(`⚠️  ${config.name}: 未设置 (${config.description})`);
    }
  });

  const valid = errors.length === 0;

  console.log('\n' + '='.repeat(50));

  if (valid) {
    console.log('✅ 环境配置检查通过');
  } else {
    console.log('❌ 环境配置检查失败');
  }

  if (errors.length > 0) {
    console.log('\n错误信息:');
    errors.forEach((error) => console.log(`  ${error}`));
  }

  if (warnings.length > 0) {
    console.log('\n提醒:');
    warnings.forEach((warning) => console.log(`  ${warning}`));
  }

  console.log('='.repeat(50));

  return { valid, errors, warnings };
}

// 主函数
function main() {
  const env = process.env;
  const result = checkEnvConfig(env);

  if (!result.valid) {
    process.exit(1);
  }
}

// 运行检查
main();