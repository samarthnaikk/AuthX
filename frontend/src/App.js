
import React, { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      let data = {};
      try {
        data = await res.json();
      } catch (err) {
        data = { message: "Invalid server response" };
      }
      if (!res.ok) {
        setMessage(data.message || "Signup failed");
      } else {
        setMessage(data.message || "Signup successful! Please login.");
        setIsLogin(true);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      let data = {};
      try {
        data = await res.json();
      } catch (err) {
        data = { message: "Invalid server response" };
      }
      if (!res.ok) {
        setMessage(data.message || "Login failed");
      } else {
        setMessage(data.message || "Login successful!");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      {isLogin ? (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 10 }}
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 10 }}
              disabled={loading}
            />
            <button type="submit" style={{ width: "100%" }} disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
          </form>
          <p style={{ marginTop: 10 }}>
            Don't have an account?{' '}
            <button type="button" onClick={() => { setIsLogin(false); setMessage(""); setName(""); setEmail(""); setPassword(""); }} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', padding: 0 }} disabled={loading}>Sign up</button>
          </p>
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 10 }}
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 10 }}
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 10 }}
              disabled={loading}
            />
            <button type="submit" style={{ width: "100%" }} disabled={loading}>{loading ? "Signing up..." : "Sign Up"}</button>
          </form>
          <p style={{ marginTop: 10 }}>
            Already have an account?{' '}
            <button type="button" onClick={() => { setIsLogin(true); setMessage(""); setName(""); setEmail(""); setPassword(""); }} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', padding: 0 }} disabled={loading}>Login</button>
          </p>
        </>
      )}
      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
}

export default App;
