import { JSX } from "react";
import Card from "@/components/Card/Card";

export default function Contact(): JSX.Element {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                    title="John Doe"
                    description="+56 9 1234 5678"
                    price=""
                />
                <Card
                    title="Jane Smith"
                    description="+56 9 8765 4321"
                    price=""
                />
            </div>
        </div>
    );
}