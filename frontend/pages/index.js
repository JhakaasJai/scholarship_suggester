const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userQuery }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };