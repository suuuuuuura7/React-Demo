import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import App from "./App";
import Notes from "./Notes";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>

        <Header />

        {Notes.map((Notes) => (
            <App
                Key={Notes.id}
                title={Notes.title}
                detail={Notes.detail}

            />
        ))}

        <Footer />

    </StrictMode>
);