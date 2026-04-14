import { Component } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./styles/index.css";

class RootErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            boxSizing: "border-box",
            padding: 24,
            fontFamily: "system-ui, sans-serif",
            background: "#fff7ed",
            color: "#3b2400",
          }}
        >
          <h1 style={{ fontSize: "1.25rem", marginBottom: 8 }}>
            Page load nahi ho paya (app error)
          </h1>
          <p style={{ marginBottom: 12, opacity: 0.85, lineHeight: 1.5 }}>
            Pehle terminal mein <code>npm run dev</code> chalao, phir browser mein wahi URL
            kholo jo Vite print karta hai (jaise <code>http://localhost:5173</code>).
            Neeche error detail — F12 Console se bhi match kar sakte ho.
          </p>
          <pre
            style={{
              background: "#fff",
              padding: 12,
              borderRadius: 8,
              overflow: "auto",
              fontSize: 13,
              border: "1px solid rgba(249,115,22,0.35)",
            }}
          >
            {this.state.error?.message ?? String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Root element "#root" not found');
}

try {
  createRoot(rootEl).render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
} catch (err) {
  const box = document.createElement("div");
  box.style.cssText =
    "padding:24px;font-family:system-ui,sans-serif;background:#fff7ed;color:#7a2e00;border:2px solid #f97316;border-radius:8px;margin:16px;";
  const title = document.createElement("strong");
  title.textContent = "React start nahi ho paya.";
  const pre = document.createElement("pre");
  pre.style.cssText =
    "white-space:pre-wrap;font-size:13px;background:#fff;padding:12px;border-radius:6px;";
  pre.textContent = String(err?.message ?? err);
  box.appendChild(title);
  box.appendChild(document.createElement("br"));
  box.appendChild(pre);
  rootEl.replaceChildren(box);
}
