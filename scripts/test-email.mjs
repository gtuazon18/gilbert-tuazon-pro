// Sends one real test booking + one test message through api/contact.ts using the keys in .env.
// Usage: npm run test:email
import { build } from "esbuild";
import { readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

for (const line of readFileSync(".env", "utf8").split("\n")) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
}
if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
  console.error("Add RESEND_API_KEY and CONTACT_TO_EMAIL to .env first.");
  process.exit(1);
}

const out = join(tmpdir(), `contact-${Date.now()}.mjs`);
await build({ entryPoints: ["api/contact.ts"], outfile: out, format: "esm", platform: "node", logLevel: "warning" });
const { default: handler } = await import(out);

const send = (label, body) => new Promise((resolve) => {
  const res = { code: 200, setHeader() {}, status(c) { res.code = c; return res; }, json(b) { console.log(`${label}: ${res.code}`, b); resolve(); } };
  handler({ method: "POST", body }, res);
});

await send("Test booking", { kind: "booking", name: "Test Client (booking)", email: process.env.CONTACT_TO_EMAIL, company: "Test Co", service: "AI feature / agent", budget: "$1,000 – $5,000", timeline: "Within a month", date: "Friday, November 27, 2026", time: "2:00 PM", timezone: "Asia/Manila", message: "This is a test booking from your website setup." });
await send("Test message", { kind: "message", name: "Test Client (message)", email: process.env.CONTACT_TO_EMAIL, service: "Web app or MVP", message: "This is a test inquiry from your website contact form." });
console.log(`\nCheck ${process.env.CONTACT_TO_EMAIL} (and Spam) for 2 emails.`);
