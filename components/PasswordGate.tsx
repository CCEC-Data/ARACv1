"use client";

import { useState, useEffect } from "react";

const AUTH_KEY = "arac_auth";
const PASSWORD = "A2R0A2C6";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAuthed(typeof window !== "undefined" && sessionStorage.getItem(AUTH_KEY) === "1");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      if (typeof window !== "undefined") sessionStorage.setItem(AUTH_KEY, "1");
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (authed === null) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a2e",
        }}
      >
        <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          Loading…
        </div>
      </div>
    );
  }

  if (!authed) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a2e",
          padding: "2rem",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          Enter password to continue
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            placeholder="Password"
            autoFocus
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              border: "1px solid rgba(91,150,245,0.5)",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              minWidth: "200px",
            }}
          />
          {error && (
            <span style={{ color: "#f2f786", fontSize: "0.9rem" }}>{error}</span>
          )}
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.5rem",
              background: "#5b96f5",
              color: "#1a1a2e",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
