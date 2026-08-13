import { runFouaniDiscovery } from "./plugins/fouani";

async function main() {
  await runFouaniDiscovery();
}

main().catch(console.error);