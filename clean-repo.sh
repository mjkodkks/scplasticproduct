#!/bin/bash
echo clean-repo.sh - clean the repository
rm -rf node_modules \
&& rm -rf pnpm-lock.yaml \
&& pnpm i && pnpm dev