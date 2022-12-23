import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function Hacker() {
    useEffect(() => {
        document.title = "Hacker Page"
    }, []);
    return (
        <div>
        Hacker Page
        </div>
    );
}
