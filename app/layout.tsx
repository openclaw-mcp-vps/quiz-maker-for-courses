import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizMaker — Generate Course Quizzes from Video Transcripts",
  description: "Upload course videos and get AI-generated quizzes with multiple choice, true/false, and short answer questions. Perfect for online course creators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cd474354-674e-498c-8d55-1b59949e1477"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
