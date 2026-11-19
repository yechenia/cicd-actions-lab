# cicd-actions-lab

这是一个用来学习 CI/CD 的最小实验仓库。里面只有一个纯函数 `add`，以及用 Node.js 自带测试运行器写的单元测试。没有 Web 框架，也没有部署步骤。

## 本地运行

需要 Node.js 20 或更高版本。

```bash
npm ci
npm test
```

`npm test` 会执行 `node --test`，跑 `test/` 目录下的测试。测试通过时进程退出码为 0。

## CI 做了什么

工作流文件是 [`.github/workflows/ci.yml`](.github/workflows/ci.yml)。它会在下面两种情况触发：

- 向 `main` 推送代码
- 打开或更新目标分支为 `main` 的 Pull Request

每次运行依次做四件事：

1. 用 `actions/checkout@v4` 检出代码
2. 用 `actions/setup-node@v4` 安装 Node.js 20，并按 `package-lock.json` 缓存 npm
3. 执行 `npm ci` 按锁文件安装依赖
4. 执行 `npm test`

任意一步失败，这次检查就会标红。

## 去哪里看运行结果

**Actions 标签页**

打开仓库首页，点顶部的 **Actions**。左侧选 **CI**，就能看到每一次推送或 PR 触发的运行记录。点进某一次运行，可以展开 `test` 任务，查看安装和测试日志。

**Pull Request 检查**

打开一个指向 `main` 的 Pull Request，在对话页底部的 **Checks** 区域（或 **Files changed** 旁边的检查状态）能看到 `test` 是否通过。全部通过时显示绿色对勾。
