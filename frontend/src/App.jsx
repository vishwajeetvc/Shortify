import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  const [shortId, setShortId] = useState("");
  return (
    <>
      <div className={`h-screen bg-black`}>
        <div
          className={`text-[100px] p-[100px] text-center text-white font-bold`}
        >
          Shortify
        </div>

        <form
          className={`flex items-center flex-col`}
          onSubmit={async (e) => {
            e.preventDefault();
            const body = { fullUrl: link };
            let response = await fetch("http://localhost:8080/url", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(body),
            });
            const result = await response.json();
            setShortId(result.shortUrl);
          }}
        >
          <input
            type="text"
            className={`p-4 outline-none w-[800px] rounded`}
            placeholder="Your url to short..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <div
            className={`p-4 ${!shortId ? "hidden" : ""} my-10 text-white w-[800px] rounded`}
          >Your Shortified link : <span className={`text-green-600 px-4`}>{shortId}</span></div>

          <p className={`text-white font-thin py-8`}>Shortify is a simple project created in MERN Stack by Vishwajeet Kumar.</p>
        </form>
      </div>
    </>
  );
}

export default App;
