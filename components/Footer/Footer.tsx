import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="w-full p-4 border-t border-solid border-black/[.08] dark:border-white/[.145] text-center">
            <p className="text-sm text-gray-500">© 2025 made with lov by @dbonomelli </p>
        </footer>
    );
}