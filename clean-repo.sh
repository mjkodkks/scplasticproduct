#!/bin/bash
echo clean-repo.sh - clean the repository
rm -rf node_modules \
&& rm -rf pnpm-lock.yaml \
&& rm -rf dist \
&& rm -rf .astro \
&& pnpm i && pnpm dev