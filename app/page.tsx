'use client'
import { useState } from 'react'

export default function Home() {
  const [step, setStep] = useState(0)

  return (
    <main className="bg">
      {step === 0 && (
        <section className="screen dark">
          <h1>HAPPY NEW YEAR</h1>
          <h2>2026</h2>
          <p>See what I made for you</p>
          <button onClick={() => setStep(1)}>Starting the journey</button>
        </section>
      )}

      {step === 1 && (
        <section className="screen light">
          <h3>Hey Anuradha,</h3>
          <h2>One Last Note</h2>
          <p>As the new year begins, I just wanted to share a few good thoughts with you.</p>
          <p>I hope the coming year brings you peace, growth, and many small wins.</p>
          <button onClick={() => setStep(2)}>Seal it 💌</button>
        </section>
      )}

      {step === 2 && (
        <section className="screen light">
          <h2>A Few Things I Want To Say To You ✨</h2>
          <div className="card">Your presence has a way of making things better ✨</div>
          <div className="card pink">You make moments feel lighter 🤍</div>
          <button onClick={() => setStep(3)}>Continue</button>
        </section>
      )}

      {step === 3 && (
        <section className="screen light">
          <h2>Goals for 2026</h2>
          <ul>
            <li>🌍 Visit a place you’ve always wanted</li>
            <li>📚 Learn or read more consistently</li>
            <li>🧘 Take care of mind & body</li>
            <li>❤️ Spend time with people who matter</li>
          </ul>
          <button onClick={() => setStep(4)}>Let's Go →</button>
        </section>
      )}

      {step === 4 && (
        <section className="screen red">
          <h1>HAPPY NEW YEAR TO YOU ANURADHA!</h1>
          <p>Thanks for being part of my 2025, now let’s make 2026 even better!</p>
          <p className="small">Made with care ✨</p>
        </section>
      )}
    </main>
  )
}
