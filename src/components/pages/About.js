import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.title = "About Us"
    }, []);
    return <div>About page</div>;
}
