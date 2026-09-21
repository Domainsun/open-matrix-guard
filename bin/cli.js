#!/usr/bin/env node

import { runCli } from "../dist/cli.js";

runCli().catch((err) => {
  console.error("Error executing open-matrix-guard:", err);
  process.exit(1);
});
