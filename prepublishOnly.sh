#!/bin/bash

# 执行构建、清理工作或者其他操作
echo "正在执行发布前脚本..."

# 执行打包（比如使用 Babel）

  # babel 编译（弃用）
  #npm run build_publish

#vite编译
npm run build


#删除vite图标
FILE_PATH="./dist/vite.svg"
if [ -f "$FILE_PATH" ]; then
    rm "$FILE_PATH"
    echo "文件已删除: $FILE_PATH"
else
    echo "文件不存在: $FILE_PATH"
fi

# 如果一切成功，继续执行 npm publish
echo "准备好发布了!"
