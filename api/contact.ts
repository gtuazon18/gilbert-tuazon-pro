// Vercel serverless function: emails booking requests and inquiries to Gilbert.
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY     – API key from https://resend.com (free tier is enough)
//   CONTACT_TO_EMAIL   – inbox that receives leads (the email your Resend account uses)
// Optional:
//   CONTACT_FROM_EMAIL – verified sender, e.g. "Portfolio <hello@yourdomain.com>".
//                        Defaults to Resend's test sender, which can only deliver to
//                        your own Resend account email.

type Req = { method?: string; body?: unknown };
type Res = {
  status: (code: number) => Res;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

const MAX = { name: 120, email: 200, company: 160, message: 4000, short: 120 };

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export default async function handler(req: Req, res: Res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  const body = (typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {}) as Record<string, unknown>;

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const kind = body.kind === "booking" ? "booking" : "message";
  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const company = clean(body.company, MAX.company);
  const service = clean(body.service, MAX.short);
  const budget = clean(body.budget, MAX.short);
  const timeline = clean(body.timeline, MAX.short);
  const date = clean(body.date, MAX.short);
  const time = clean(body.time, MAX.short);
  const timezone = clean(body.timezone, MAX.short);
  const message = clean(body.message, MAX.message);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || (kind === "message" && message.length < 10)) {
    return res.status(400).json({ ok: false, error: "Please add your name, a valid email, and a short message." });
  }
  if (kind === "booking" && (!date || !time)) {
    return res.status(400).json({ ok: false, error: "Please pick a date and time for the call." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return res.status(503).json({ ok: false, error: "Email is not configured yet." });

  const rows: [string, string][] = [
    ["Type", kind === "booking" ? "📅 Call booking request" : "✉️ Project inquiry"],
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["Service", service],
    ["Budget", budget],
    ["Timeline", timeline],
    ["Requested date", date],
    ["Requested time", time ? `${time}${timezone ? ` (${timezone})` : ""}` : ""],
  ];
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px">
      <h2 style="margin:0 0 16px">New ${kind === "booking" ? "call booking" : "inquiry"} from your website</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap">${k}</td><td style="padding:6px 0"><strong>${escapeHtml(v)}</strong></td></tr>`).join("")}
      </table>
      ${message ? `<p style="margin-top:20px;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>` : ""}
      <p style="margin-top:24px;color:#888;font-size:12px">Reply to this email to respond directly to ${escapeHtml(name)}.</p>
    </div>`;
  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n") + (message ? `\n\n${message}` : "");

  const subject = kind === "booking"
    ? `📅 Call request: ${name} — ${date} ${time}`
    : `✉️ New inquiry: ${name}${service ? ` — ${service}` : ""}`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Leads <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });
    if (!r.ok) {
      console.error("Resend error", r.status, await r.text());
      return res.status(502).json({ ok: false, error: "Could not send right now." });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact handler failed", err);
    return res.status(500).json({ ok: false, error: "Could not send right now." });
  }
}
