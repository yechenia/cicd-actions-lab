# cicd-actions-lab

这是一个用来学习 CI/CD 的最小实验仓库，语言是 Go。里面只有一个纯函数 `Add`，以及用 Go 标准库 `testing` 写的单元测试。没有 Web 框架，也没有部署步骤。

## 本地运行

需要 Go 1.22 或与 `go.mod` 里声明的版本一致。

```bash
go test ./...
```

`go test` 会编译 `calc` 包并运行其中的测试。这个示例没有第三方依赖，所以没有单独的安装步骤。测试通过时进程退出码为 0。加上 `-v` 可以看到每个子测试的名字：

```bash
go test -v ./...
```

## CI 做了什么

工作流文件是 [`.github/workflows/ci.yml`](.github/workflows/ci.yml)。它会在下面两种情况触发：

- 向 `main` 推送代码
- 打开或更新目标分支为 `main` 的 Pull Request

每次运行依次做三件事：

1. 用 `actions/checkout@v5` 检出代码
2. 用 `actions/setup-go@v7` 读取 `go.mod` 里的 Go 版本并安装，同时缓存模块和构建结果
3. 执行 `go test ./...`

任意一步失败，这次检查就会标红。

## 去哪里看运行结果

**Actions 标签页**

打开仓库首页，点顶部的 **Actions**。左侧选 **CI**，就能看到每一次推送或 PR 触发的运行记录。点进某一次运行，可以展开 `test` 任务，查看安装 Go 和测试的日志。

**Pull Request 检查**

打开一个指向 `main` 的 Pull Request，在对话页底部的 **Checks** 区域能看到 `test` 是否通过。全部通过时显示绿色对勾。
