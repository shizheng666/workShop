# Google Form Setup Guide

以下内容面向第一次使用 Google Form 的维护者，网站 UI 仍保持全英文。

## 1. 新建表单

在自己的 Google 账号中创建一个新的 Google Form，建议名称使用：

- `ICPR 2026 Workshop Registration`

建议同时创建一个关联的 Google Sheet，便于后续导出和筛选报名数据。

## 2. 建议字段

按以下顺序创建字段，能与当前站点的前端结构直接对应：

1. `Full Name`
   类型：Short answer
2. `Email Address`
   类型：Short answer
3. `Affiliation`
   类型：Short answer
4. `Country / Region`
   类型：Short answer
5. `Position / Role`
   类型：Short answer
6. `Research Interests`
   类型：Paragraph
7. `Attendance Mode`
   类型：Multiple choice
   选项：
   - `In person`
   - `Online`
   - `Not decided yet`
8. `Dietary Restrictions`
   类型：Paragraph
9. `Consent to be contacted about workshop updates`
   类型：Multiple choice 或 Checkbox
   建议选项：
   - `Yes`
10. `Additional Notes`
    类型：Paragraph

## 3. 获取提交地址和 entry 编号

在 Google Form 中点击“预览”进入实际表单页面，查看页面源码或使用浏览器开发者工具，可以找到每个字段对应的 `entry.xxxxxxx`。

网站需要以下环境变量：

- `GOOGLE_FORM_ACTION_URL`
- `GOOGLE_FORM_ENTRY_FULL_NAME`
- `GOOGLE_FORM_ENTRY_EMAIL`
- `GOOGLE_FORM_ENTRY_AFFILIATION`
- `GOOGLE_FORM_ENTRY_COUNTRY_OR_REGION`
- `GOOGLE_FORM_ENTRY_ROLE`
- `GOOGLE_FORM_ENTRY_RESEARCH_INTERESTS`
- `GOOGLE_FORM_ENTRY_ATTENDANCE_MODE`
- `GOOGLE_FORM_ENTRY_DIETARY_RESTRICTIONS`
- `GOOGLE_FORM_ENTRY_CONSENT`
- `GOOGLE_FORM_ENTRY_ADDITIONAL_NOTES`

## 4. 本项目如何使用这些变量

- 前端页面不会暴露 `entry.xxxxxxx`
- `app/api/register/route.ts` 会读取上述环境变量
- API 会把结构化 JSON 转换为 Google Form 可接受的 `x-www-form-urlencoded` 提交
- 若环境变量未配置，前端仍然可以显示站内表单，但会提示用户当前处于 fallback 模式
