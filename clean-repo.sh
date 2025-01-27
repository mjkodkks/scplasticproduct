#!/bin/bash
echo clean-repo.sh - clean the repository
rm -rf /node_modules \
&& pnpm i && pnpm dev