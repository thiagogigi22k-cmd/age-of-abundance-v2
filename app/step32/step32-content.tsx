"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Check, Star, Sparkles } from "lucide-react"

const notifications = [
  { emoji: "🏠", text: "Manifesting your dream home in the spiritual realm..." },
  { emoji: "🚗", text: "Reserving your ideal car..." },
  { emoji: "👨‍👩‍👧", text: "Aligning your family happiness..." },
  { emoji: "💗", text: "Activating perfect health protocols..." },
  { emoji: "🔓", text: "Breaking spiritual and emotional blocks..." },
  { emoji: "🌟", text: "Preparing your 100x manifestation boost..." },
  { emoji: "💰", text: "Unlocking abundance channels..." },
  { emoji: "✨", text: "Finalizing your divine script..." },
]

const portals = [
  { name: "I Choose My Future", image: "/images/man-silhouette-stars.jpg" },
  { name: "Faith Decision", image: "/images/praying-hands.jpg" },
  { name: "Dream Home", image: "/images/dream-home.jpg" },
  { name: "Dream Car", image: "/images/dream-car.jpg" },
  { name: "Happy Family", image: "/images/happy-family.jpg" },
  { name: "Perfect Health", image: "/images/perfect-health.jpg" },
  { name: "Abundance", image: "/images/abundance.jpg" },
  { name: "100x Boost", image: "/images/100x-boost.jpg" },
  { name: "Blocks Broken", image: "/images/blocks-broken.jpg" },
  { name: "100x Multiplication", image: "/mystical-golden-river-with-gold-coins-and-magical-.jpg" },
]

export default function Step32Content() {
  const searchParams = useSearchParams()
  const name = searchParams.get("name") || "A"
  const balance = searchParams.get("balance") || "2000101.00"

  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState("Starting transformation...")
  const [isComplete, setIsComplete] = useState(false)
  const [visibleNotifications, setVisibleNotifications] = useState<Array<{ id: number; index: number }>>([])
  const [cardAnimationIndex, setCardAnimationIndex] = useState(-1)
  const notificationIdRef = useRef(0)
  const notificationTimerRef = useRef<NodeJS.Timeout | null>(null)
  const currentNotificationIndexRef = useRef(0)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  useEffect(() => {
    const duration = 25000
    const interval = 100
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment

        if (newProgress < 20) {
          setStatusText("Starting transformation...")
        } else if (newProgress < 40) {
          setStatusText("Analyzing your answers...")
        } else if (newProgress < 60) {
          setStatusText("Aligning divine energies...")
        } else if (newProgress < 80) {
          setStatusText("Preparing your manifestation...")
        } else {
          setStatusText("Finalizing your script...")
        }

        if (newProgress >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTimeout(() => {
            let idx = 0
            const cardTimer = setInterval(() => {
              setCardAnimationIndex(idx)
              idx++
              if (idx >= portals.length) {
                clearInterval(cardTimer)
              }
            }, 150)
          }, 300)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isComplete) {
      if (notificationTimerRef.current) {
        clearInterval(notificationTimerRef.current)
      }
      setVisibleNotifications([])
      return
    }

    // Start notifications after 3 seconds
    const startDelay = setTimeout(() => {
      // Add first notification
      const firstId = notificationIdRef.current++
      setVisibleNotifications([{ id: firstId, index: 0 }])
      currentNotificationIndexRef.current = 0

      notificationTimerRef.current = setInterval(() => {
        currentNotificationIndexRef.current = (currentNotificationIndexRef.current + 1) % notifications.length
        const newId = notificationIdRef.current++
        const newIndex = currentNotificationIndexRef.current

        setVisibleNotifications((prev) => {
          // Add new notification, keep max 3 (remove oldest)
          const updated = [...prev, { id: newId, index: newIndex }]
          if (updated.length > 3) {
            return updated.slice(-3)
          }
          return updated
        })
      }, 3000)
    }, 3000)

    return () => {
      clearTimeout(startDelay)
      if (notificationTimerRef.current) {
        clearInterval(notificationTimerRef.current)
      }
    }
  }, [isComplete])

  if (isComplete) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-[#1a1510] via-[#0d0d0d] to-black px-6 py-8 relative overflow-hidden">
        {/* Spinning star in top right */}
        <div className="absolute top-4 right-4">
          <Star className="w-8 h-8 text-[#F9D423] animate-spin-slow" fill="#F9D423" />
        </div>

        {/* Pulsing logo */}
        <div className="flex flex-col items-center mb-6 mt-4 animate-pulse-soft">
          <Image
            src="/images/sem-20nome-20-281080-20x-201080-20px-29-20-281-29.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-white text-[28px] font-bold text-center mb-6 leading-tight">
          {name.toLowerCase()}, you've made it this
          <br />
          far... and that's no
          <br />
          accident.
        </h1>

        <p className="text-[#D4AF37] text-lg text-center mb-4 leading-relaxed italic">
          Today is {currentDate} – the first day
          <br />
          of your new reality.
        </p>

        {/* Pulsing golden bar */}
        <div className="w-32 h-2 bg-[#D4AF37] rounded-full mb-8 animate-pulse-soft" />

        {/* Portals container */}
        <div className="w-full max-w-md bg-[#0f0f1a]/80 rounded-2xl border border-[#D4AF37]/30 p-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          {/* Pulsing title */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-pulse-soft">
            <span className="text-2xl">🏆</span>
            <h2 className="text-[#D4AF37] text-xl font-bold text-center">
              Your Unlocked Prosperity
              <br />
              Portals:
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {portals.map((portal, index) => (
              <div
                key={index}
                className={`bg-[#1a1a2e] rounded-lg border-2 border-[#D4AF37] p-3 flex flex-col items-center transition-all duration-300 ${
                  [0, 3, 6, 9].includes(index) ? "shadow-[0_0_15px_rgba(212,175,55,0.5)]" : ""
                } ${cardAnimationIndex >= index ? "card-pop" : "opacity-0 scale-50"}`}
              >
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 border border-[#D4AF37]/50 relative">
                  <Image src={portal.image || "/placeholder.svg"} alt={portal.name} fill className="object-cover" />
                </div>
                <span className="text-[#D4AF37] text-xs font-bold text-center leading-tight min-h-[32px] flex items-center justify-center">
                  {portal.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-md mt-8 bg-[#0a0a14] rounded-2xl border border-[#D4AF37]/40 p-6 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
          <p className="text-white text-lg font-semibold mb-5 text-center">You went through every step...</p>

          <div className="space-y-3 mb-6">
            <p className="text-white text-base text-center">
              <span className="mr-2">👉</span>Reflected on your life...
            </p>
            <p className="text-white text-base text-center">
              <span className="mr-2">👉</span>Faced your inner blocks...
            </p>
            <p className="text-white text-base text-center">
              <span className="mr-2">👉</span>Visualized your dreams...
            </p>
            <p className="text-white text-base text-center">
              <span className="mr-2">👉</span>And unlocked breakthroughs that showed... a new life is possible.
            </p>
          </div>

          <p className="text-white text-lg mb-4 text-center">Now... you're standing before a decision.</p>

          <p className="text-white text-lg mb-4 text-center">And just like Joseph, Abraham, and Job...</p>

          <p className="text-[#F9D423] text-xl font-bold text-center">Maybe this... Is your moment of being tested.</p>
        </div>

        <div className="w-full max-w-md mt-6 bg-[#0a0a14] rounded-2xl border border-[#D4AF37]/40 p-6 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
          <p className="text-white text-xl font-bold mb-5">
            <span className="mr-2">📖</span>Remember...
          </p>

          <div className="space-y-4 mb-6">
            <p className="text-white text-base">
              <span className="mr-2">👉</span>Joseph went through prison... before reaching the palace.
            </p>
            <p className="text-white text-base">
              <span className="mr-2">👉</span>Abraham had to trust... even without understanding.
            </p>
            <p className="text-white text-base">
              <span className="mr-2">👉</span>Job lost everything... before receiving double.
            </p>
          </div>

          <p className="text-[#F9D423] text-xl font-bold">And now... you're also being called... to choose.</p>
        </div>

        <div className="w-full max-w-md mt-10 px-2">
          <h3 className="text-[#F9D423] text-2xl font-bold text-center mb-4">
            Remember What Happened to Jamie Heavens?
          </h3>

          <p className="text-gray-300 text-lg italic text-center mb-6">
            He's living proof that God uses even the smallest details to change a life...
          </p>

          <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden border-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] mb-8">
            <Image
              src="/images/jamie-heavens.jpg"
              alt="Jamie Heavens"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Jamie Heavens full story text */}
          <p className="text-white text-lg mb-6">Jamie Heavens was a simple carpenter in England.</p>

          <div className="space-y-3 mb-6">
            <p className="text-white text-base">
              <span className="mr-2">👉</span>Every day... the same routine...
            </p>
            <p className="text-white text-base">
              <span className="mr-2">👉</span>The same paycheck that barely covered the bills...
            </p>
            <p className="text-white text-base">
              <span className="mr-2">👉</span>The same challenges... over and over.
            </p>
          </div>

          <p className="text-white text-lg font-semibold mb-6">
            But one ordinary day in 2018... Something seemingly insignificant happened...
          </p>

          <div className="space-y-3 mb-6">
            <p className="text-white text-base">
              <span className="mr-2">👉</span>He went to the convenience store near the job site...
            </p>
            <p className="text-white text-base">
              <span className="mr-2">👉</span>Like he did every day... grabbed his usual drink...
            </p>
            <p className="text-white text-base">
              <span className="mr-2">👉</span>But... distracted... he accidentally grabbed the wrong one.
            </p>
          </div>

          {/* Highlighted quote box */}
          <div className="bg-[#1a1a2e]/60 rounded-xl p-5 mb-6 border-l-4 border-[#D4AF37]">
            <p className="text-white text-base mb-2">
              <span className="mr-2">👉</span>At checkout, the cashier said:
            </p>
            <p className="text-[#F9D423] text-lg italic">
              "Today... with this drink... you get a free lottery scratch card."
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-white text-base">
              <span className="mr-2">👉</span>Jamie almost declined...
            </p>
            <p className="text-white text-base">
              <span className="mr-2">👉</span>But on impulse... took the scratch card...
            </p>
          </div>

          <p className="text-white text-lg">
            And with the same carelessness with which he picked the wrong drink... Scratched the ticket...
          </p>

          {/* Container: In less than 30 seconds... 1 million pounds */}
          <div className="w-full bg-[#1a1a2e]/60 rounded-xl p-5 mt-8 border border-[#D4AF37]/30">
            <p className="text-white text-lg text-center mb-2">In less than 30 seconds...</p>
            <p className="text-[#F9D423] text-3xl font-bold text-center mb-4">
              <span className="mr-2">👉</span>1 million pounds.
            </p>
            <p className="text-white text-lg text-center">No planning.</p>
            <p className="text-white text-lg text-center">No expectation.</p>
            <p className="text-white text-lg text-center mb-4">No idea...</p>
            <p className="text-white text-lg text-center">
              That this "small mistake" was part of something much bigger.
            </p>
          </div>

          {/* Jamie's interview quote */}
          <p className="text-white text-lg mt-8 mb-4">And do you know what Jamie said in the interview right after?</p>

          <div className="border-l-4 border-[#D4AF37] pl-4 mb-8">
            <p className="text-[#F9D423] text-lg italic">
              "It felt like God organized everything... I didn't even want that drink... but when it's your time... God
              finds a way."
            </p>
          </div>

          {/* And today section */}
          <div className="bg-[#1a1a2e]/60 rounded-xl p-5 border border-[#D4AF37]/30">
            <p className="text-[#F9D423] text-2xl font-bold text-center mb-4">And today... 20...</p>
            <p className="text-white text-lg text-center">
              <span className="mr-2">👉</span>It's your time.
            </p>
            <p className="text-white text-lg text-center mb-2">The proof?</p>
            <p className="text-white text-lg text-center">
              <span className="mr-2">👉</span>Is that you're reading these exact words... right now.
            </p>
          </div>

          {/* What Has Been Prepared Section */}
          <div className="w-full max-w-md mt-10 px-2">
            <h3 className="text-[#F9D423] text-2xl font-bold text-center mb-6 italic">
              What Has Been Prepared Especially For You...
            </h3>

            <div className="bg-[#0a0a14] rounded-2xl border border-[#D4AF37]/30 p-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <p className="text-gray-300 text-lg mb-4">20...</p>
              <p className="text-white text-lg mb-4">After everything you answered...</p>
              <p className="text-white text-lg mb-4">After every choice you made...</p>
              <p className="text-white text-lg mb-6">And after each of the pains and dreams you shared with us...</p>

              <p className="text-[#F9D423] text-2xl font-bold mb-6">Something VERY special was created for you.</p>

              <p className="text-white text-lg mb-4">And it's not just anything...</p>

              <div className="pl-4 space-y-2 mb-4">
                <p className="text-white text-lg">Not just a prayer...</p>
                <p className="text-white text-lg">Not just a beautiful motivational text...</p>
                <p className="text-white text-lg">And definitely not another generic internet message...</p>
              </div>

              <p className="text-[#D4AF37] text-lg mt-6">What's being released for you right now...</p>
            </div>

            {/* Is a Sacred Script */}
            <h3 className="text-[#F9D423] text-2xl font-bold mt-8 mb-6">Is a Sacred Script.</h3>

            <div className="bg-[#1a1a2e]/80 rounded-xl p-5 border border-[#D4AF37]/30">
              <p className="text-[#D4AF37] text-lg font-semibold mb-4">
                <span className="mr-2">👉</span>A true Divine Manifestation Script...
              </p>

              <div className="pl-6 space-y-2 mb-4">
                <p className="text-white text-lg">Written...</p>
                <p className="text-white text-lg">Word by word...</p>
                <p className="text-white text-lg">Comma by comma...</p>
                <p className="text-white text-lg">Every line... every sentence...</p>
              </div>

              <div className="space-y-3">
                <p className="text-white text-lg">
                  <span className="mr-2">👉</span>Totally inspired by the answers you gave us...
                </p>
                <p className="text-white text-lg">
                  <span className="mr-2">👉</span>Aligned with your biggest struggles...
                </p>
                <p className="text-white text-lg">
                  <span className="mr-2">👉</span>And also... with the deepest dreams you carry in your heart...
                </p>
              </div>
            </div>

            {/* Heaven opened text */}
            <p className="text-white text-lg italic mt-8 mb-4">
              Yes... today... Heaven literally opened over your life.
            </p>
            <p className="text-white text-lg mb-2">God...</p>
            <p className="text-white text-lg mb-2">The Universe...</p>
            <p className="text-white text-lg mb-2">And all the Spiritual Energy that brought you here...</p>
            <p className="text-white text-lg mb-4">Came together...</p>
            <p className="text-[#F9D423] text-lg font-bold mb-2">To deliver to you...</p>
            <p className="text-white text-lg mb-6">Exactly what you need right now...</p>

            {/* Container with bullet points about calls */}
            <div className="bg-[#1a1a2e]/80 rounded-xl p-5 border border-[#D4AF37]/30 mb-8">
              <div className="space-y-4">
                <p className="text-white text-lg">
                  <span className="mr-2">👉</span>A call to finally break the blocks...
                </p>
                <p className="text-white text-lg">
                  <span className="mr-2">👉</span>A spiritual command to open the paths...
                </p>
                <p className="text-white text-lg">
                  <span className="mr-2">👉</span>A release from everything that's been holding you back...
                </p>
              </div>
            </div>

            {/* People online and Daily cost containers */}
            <div className="mt-6 bg-[#1a1a2e]/80 rounded-xl p-4 border border-[#D4AF37]/30 text-center animate-pulse-soft">
              <p className="text-[#D4AF37] font-bold text-lg">
                <span className="mr-2">👥</span>People online today:
              </p>
              <p className="text-white text-lg">Over 1,100 visitors</p>
            </div>

            <div className="mt-4 bg-[#1a1a2e]/80 rounded-xl p-4 border border-[#D4AF37]/30 text-center">
              <p className="text-[#D4AF37] font-bold text-lg">
                <span className="mr-2">💻</span>Daily cost:
              </p>
              <p className="text-white text-lg">Over 1,177 euros per day</p>
            </div>

            <p className="text-white text-lg mt-6 mb-4">
              <span className="mr-2">👉</span>Our team works day and night... so people like you can have access to this
              opportunity.
            </p>

            <div className="bg-[#1a1a2e]/80 rounded-xl p-5 border border-[#D4AF37]/30 text-center mb-8">
              <p className="text-white text-lg mb-4">But... 20... since the beginning... we made a decision:</p>
              <p className="text-[#F9D423] text-xl font-bold italic mb-4">
                We NEVER... under any circumstance... want money to be a barrier for someone to experience their
                breakthrough.
              </p>
              <p className="text-white text-lg font-semibold">
                That's why... WE DO NOT CHARGE ANYTHING FOR WHAT WE DO.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-white text-lg">
                <span className="mr-2">👉</span>You don't have to pay anything for this.
              </p>
              <p className="text-white text-lg">
                <span className="mr-2">👉</span>What you'll do now... is a step of faith...
              </p>
              <p className="text-white text-lg">
                <span className="mr-2">👉</span>A symbolic gesture...
              </p>
              <p className="text-white text-lg">
                <span className="mr-2">👉</span>A spiritual decision...
              </p>
              <p className="text-white text-lg">
                <span className="mr-2">👉</span>A Seed of Faith... that you plant... to determine the size of
              </p>
            </div>

            <div className="bg-[#1a1a2e]/80 rounded-xl p-5 border border-[#D4AF37]/30 text-center mb-8">
              <p className="text-white text-lg mb-4">
                <span className="mr-2">👉</span>A gesture that says to the Universe... and to God:
              </p>
              <p className="text-[#F9D423] text-xl font-bold italic mb-4">
                "I am ready... and I choose to live the best that the Lord has for me."
              </p>
            </div>

            <p className="text-white text-lg text-center mb-8">So now... the decision... Is entirely in your hands.</p>

            <div className="bg-[#1a1a2e]/80 rounded-xl p-5 border-2 border-red-500/70 shadow-[0_0_15px_rgba(239,68,68,0.2)] mb-8">
              <p className="text-white text-lg font-semibold mb-4">But... let's be clear: This is not for everyone.</p>
              <p className="text-white text-lg mb-4">Not everyone is ready to live the extraordinary.</p>
              <p className="text-white text-lg mb-4">For this reason... I need to ask you an important question:</p>
              <p className="text-white text-lg mb-4">
                <span className="mr-2">👉</span>The life you have today... is the result of the choices you've made so
                far.
              </p>
              <p className="text-white text-lg mb-6">
                <span className="mr-2">👉</span>And the life you'll live tomorrow... will be the result of the choice
                you make right now.
              </p>
              <p className="text-[#F9D423] text-2xl font-bold text-center mb-4">So... 20...</p>
              <p className="text-[#F9D423] text-xl font-bold text-center">
                <span className="mr-2">👉</span>Which life do you choose?
              </p>
            </div>

            <div className="bg-[#1a1a2e]/80 rounded-xl p-5 border-2 border-red-500/70 shadow-[0_0_15px_rgba(239,68,68,0.2)] mb-8">
              <p className="text-white text-lg font-semibold mb-4">Remember Abraham?</p>
              <p className="text-white text-lg mb-4">
                <span className="mr-2">👉</span>Tested until the last second... before provision appeared.
              </p>

              <p className="text-white text-lg font-semibold mb-4">Remember Joseph?</p>
              <p className="text-white text-lg mb-4">
                <span className="mr-2">👉</span>Spent years in prison... before leading an entire nation.
              </p>

              <p className="text-white text-lg font-semibold mb-4">Remember Job?</p>
              <p className="text-white text-lg mb-6">
                <span className="mr-2">👉</span>Lost everything... before receiving double.
              </p>

              <p className="text-[#F9D423] text-xl font-bold text-center mb-2">Now... 20... it's your turn.</p>
              <p className="text-white text-lg text-center">This is your test.</p>
              <p className="text-white text-lg text-center">This is your moment.</p>
            </div>

            <div className="bg-[#1a1a2e]/80 rounded-xl p-5 border-2 border-red-500/70 shadow-[0_0_15px_rgba(239,68,68,0.2)] mb-8">
              <p className="text-red-400 text-xl font-bold mb-4">Important for you to know:</p>
              <p className="text-white text-lg mb-4">20...</p>
              <p className="text-white text-lg mb-2">
                <span className="mr-2">👉</span>This page...
              </p>
              <p className="text-white text-lg mb-2">
                <span className="mr-2">👉</span>This opportunity...
              </p>
              <p className="text-white text-lg mb-4">
                <span className="mr-2">👉</span>And your Divine Manifestation Script...
              </p>
              <p className="text-[#F9D423] text-lg font-bold mb-4">Are available only now.</p>
              <p className="text-white text-lg mb-2">
                <span className="mr-2">👉</span>Everything we prepared until this point... was based on your answers.
              </p>
              <p className="text-white text-lg mb-2">
                <span className="mr-2">👉</span>There is no replay...
              </p>
              <p className="text-white text-lg mb-6">
                <span className="mr-2">👉</span>No way to go back later.
              </p>
              <p className="text-[#F9D423] text-lg font-bold">
                <span className="mr-2">👉</span>The size of your faith... will determine the size of your harvest.
              </p>
            </div>

            <div className="bg-[#1a1a2e]/80 rounded-xl p-5 border-2 border-red-500/70 shadow-[0_0_15px_rgba(239,68,68,0.2)] text-center mb-8">
              <p className="text-white text-lg mb-4">No matter which seed you choose...</p>
              <p className="text-[#F9D423] text-lg font-bold mb-4">
                Your Divine Manifestation Script will be created and delivered directly to your email.
              </p>
              <p className="text-white text-lg mb-4">20...</p>
              <p className="text-white text-lg mb-2">
                <span className="mr-2">👉</span>Now... it's up to you.
              </p>
              <p className="text-white text-lg mb-2">
                <span className="mr-2">👉</span>Your decision... your faith... your harvest.
              </p>
              <p className="text-white text-lg">
                <span className="mr-2">👉</span>All of Heaven is watching the choice you're about to make... right now.
              </p>
            </div>

            <div className="text-center">
              <p className="text-[#F9D423] text-lg mb-2">
                <span className="mr-2">👆</span>Click... choose your seed...
              </p>
              <p className="text-[#F9D423] text-lg font-bold mb-2">
                <span className="mr-2">👉</span>Unlock your Divine
                <br />
                Manifestation Script
              </p>
            </div>

            {/* Choice title and cards */}
            <h2 className="text-[#F9D423] text-2xl font-bold italic text-center mt-8 mb-8">
              {name}, Make your choice now!
            </h2>

            {/* Choice Cards */}
            <div className="w-full space-y-8">
              {/* $0 Option - First (poorest) */}
              <div className="cursor-pointer px-4">
                <div
                  className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border-4 border-[#F9D423] transition-all duration-500 ease-out origin-center ${
                    selectedCard === 0 ? "scale-105 shadow-[0_0_25px_rgba(249,212,35,0.5)]" : ""
                  }`}
                  onClick={() => setSelectedCard(0)}
                  onMouseEnter={() => setSelectedCard(0)}
                  onMouseLeave={() => setSelectedCard(null)}
                >
                  <Image src="/images/qtpucbmv6eza55x7j5ca7m4q.png" alt="Barren Earth" fill className="object-cover" />
                </div>
                <a
                  href="https://ichoosethislife-v2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-[#F9D423] text-black font-bold text-lg py-4 rounded-xl mt-6">
                    This is the life I choose – $0
                  </button>
                </a>
              </div>

              {/* $27 Option */}
              <div className="cursor-pointer px-4">
                <div
                  className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border-4 border-[#F9D423] transition-all duration-500 ease-out origin-center ${
                    selectedCard === 27 ? "scale-105 shadow-[0_0_25px_rgba(249,212,35,0.5)]" : ""
                  }`}
                  onClick={() => setSelectedCard(27)}
                  onMouseEnter={() => setSelectedCard(27)}
                  onMouseLeave={() => setSelectedCard(null)}
                >
                  <Image
                    src="/images/ymmmpsh8j8hrfm9kipssq7qc.png"
                    alt="Growing Sprout"
                    fill
                    className="object-cover"
                  />
                </div>
                <a
                  href="https://instituteabundance.mycartpanda.com/checkout/205869962:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-[#F9D423] text-black font-bold text-lg py-4 rounded-xl mt-6">
                    This is the life I choose – $27
                  </button>
                </a>
              </div>

              {/* $47 Option - Updated image to green tree with orange fruits */}
              <div className="cursor-pointer px-4">
                <div
                  className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border-4 border-[#F9D423] transition-all duration-500 ease-out origin-center ${
                    selectedCard === 47 ? "scale-105 shadow-[0_0_25px_rgba(249,212,35,0.5)]" : ""
                  }`}
                  onClick={() => setSelectedCard(47)}
                  onMouseEnter={() => setSelectedCard(47)}
                  onMouseLeave={() => setSelectedCard(null)}
                >
                  <Image
                    src="/images/z2h6ejvvhrkvy9fvgy5hnhh0.png"
                    alt="Tree with Subtle Fruits"
                    fill
                    className="object-cover"
                  />
                </div>
                <a
                  href="https://instituteabundance.mycartpanda.com/checkout/205881040:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-[#F9D423] text-black font-bold text-lg py-4 rounded-xl mt-6">
                    This is the life I choose – $47
                  </button>
                </a>
              </div>

              {/* $77 Option - Updated image to golden tree with glowing orbs */}
              <div className="cursor-pointer px-4">
                <div
                  className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border-4 border-[#F9D423] transition-all duration-500 ease-out origin-center ${
                    selectedCard === 77 ? "scale-105 shadow-[0_0_25px_rgba(249,212,35,0.5)]" : ""
                  }`}
                  onClick={() => setSelectedCard(77)}
                  onMouseEnter={() => setSelectedCard(77)}
                  onMouseLeave={() => setSelectedCard(null)}
                >
                  <Image
                    src="/images/s1o4hl3p8ccq85rhevw3tlef.png"
                    alt="Golden Tree of Prosperity"
                    fill
                    className="object-cover"
                  />
                </div>
                <a
                  href="https://instituteabundance.mycartpanda.com/checkout/205881049:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-[#F9D423] text-black font-bold text-lg py-4 rounded-xl mt-6">
                    This is the life I choose – $77
                  </button>
                </a>
              </div>

              {/* $100 Option - Last (richest) - Divine figure descending with treasure */}
              <div className="cursor-pointer px-4">
                <div
                  className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border-4 border-[#F9D423] transition-all duration-500 ease-out origin-center ${
                    selectedCard === 100 ? "scale-105 shadow-[0_0_25px_rgba(249,212,35,0.5)]" : ""
                  }`}
                  onClick={() => setSelectedCard(100)}
                  onMouseEnter={() => setSelectedCard(100)}
                  onMouseLeave={() => setSelectedCard(null)}
                >
                  <Image
                    src="/images/dsoqmjbqfiljpxmuvlvxwbbe.jpeg"
                    alt="Divine Golden Abundance"
                    fill
                    className="object-cover"
                  />
                </div>
                <a
                  href="https://instituteabundance.mycartpanda.com/checkout/205881055:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-[#F9D423] text-black font-bold text-lg py-4 rounded-xl mt-6">
                    This is the life I choose – $100
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes pulseSoft {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-soft {
            animation: pulseSoft 2s ease-in-out infinite;
          }
          
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spinSlow 3s linear infinite;
          }
          
          @keyframes cardPop {
            0% { opacity: 0; transform: scale(0.5); }
            60% { opacity: 1; transform: scale(1.15); }
            100% { opacity: 1; transform: scale(1); }
          }
          .card-pop {
            animation: cardPop 0.4s ease-out forwards;
          }
        `}</style>
      </div>
    )
  }

  // Loading state
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-[#1a1510] via-[#0d0d0d] to-black px-6 py-8 relative overflow-hidden">
      {visibleNotifications.length > 0 && !isComplete && (
        <div className="fixed top-2 left-3 right-3 z-50 flex flex-col gap-2">
          {visibleNotifications.map((notif) => (
            <div
              key={notif.id}
              className="bg-gradient-to-r from-[#b8860b] to-[#d4a017] rounded-xl p-3 flex items-center gap-3 shadow-lg border border-[#F9D423]/50 animate-slide-in-right"
            >
              <div className="w-10 h-10 bg-[#F9D423] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-[#8B7500]" strokeWidth={3} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[#1a1a00] font-bold text-sm">PROCESSING</p>
                <p className="text-[#1a1a00] text-sm leading-tight">
                  {notifications[notif.index].emoji} {notifications[notif.index].text}
                </p>
              </div>

              <Star className="w-5 h-5 text-[#8B7500] flex-shrink-0 animate-spin-slow" />
            </div>
          ))}
        </div>
      )}

      {/* Pulsing circles */}
      <div className="absolute top-20 left-8 w-3 h-3 bg-[#F9D423] rounded-full animate-pulse-circle" />
      <div
        className="absolute top-16 right-10 w-4 h-4 bg-[#F9D423] rounded-full animate-pulse-circle"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Logo */}
      <div className="flex flex-col items-center mb-8 mt-8">
        <Image
          src="/images/sem-20nome-20-281080-20x-201080-20px-29-20-281-29.png"
          alt="Logo"
          width={70}
          height={70}
          className="object-contain"
          priority
        />
      </div>

      {/* Main title */}
      <h1 className="text-white text-[26px] font-bold text-center mb-6 leading-tight">
        {name.toUpperCase()}, your Divine
        <br />
        Manifestation
        <br />
        Script is being
        <br />
        created...
      </h1>

      <p className="text-[#D4AF37] text-lg text-center mb-10 leading-relaxed">
        Processing your answers
        <br />
        with divine precision
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-sm mb-3">
        <div className="relative w-full h-3 bg-[#3a3a4a] rounded-full overflow-visible">
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#F9D423] rounded-full z-10 shadow-lg"
            style={{ left: `calc(${Math.min(progress, 100)}% - 8px)` }}
          />
          <div
            className="h-full bg-[#F9D423] rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="w-full max-w-sm flex justify-between items-center mb-10">
        <span className="text-[#D4AF37] text-sm">{statusText}</span>
        <span className="text-[#F9D423] text-3xl font-bold">{Math.round(progress)}%</span>
      </div>

      {/* Unlocked Portals section */}
      <div className="w-full max-w-sm flex items-center justify-center gap-3 mb-6">
        <div className="h-px bg-[#D4AF37] flex-1" />
        <span className="text-[#D4AF37] text-base font-bold whitespace-nowrap">Unlocked Portals</span>
        <div className="h-px bg-[#D4AF37] flex-1" />
      </div>

      {/* Preview cards during loading - with checkmarks */}
      <div className="w-full max-w-sm grid grid-cols-2 gap-4 mb-8">
        {portals.map((portal, index) => (
          <div
            key={index}
            className={`bg-[#1a1a2e] rounded-lg border-2 border-[#D4AF37] p-2 flex flex-col items-center ${
              [0, 3, 6, 9].includes(index) ? "shadow-[0_0_12px_rgba(212,175,55,0.4)]" : ""
            }`}
          >
            <div className="w-full aspect-square rounded-lg overflow-hidden mb-1 border border-[#D4AF37]/50 relative">
              <Image src={portal.image || "/placeholder.svg"} alt={portal.name} fill className="object-cover" />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center border-2 border-[#1a1a2e]">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="text-[#D4AF37] text-[10px] font-bold text-center leading-tight">{portal.name}</span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-sm text-center mt-4">
        <div className="flex items-start justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin-slow mt-1 flex-shrink-0" />
          <p className="text-[#D4AF37] text-lg italic leading-relaxed">
            "We're preparing your
            <br />
            Divine Manifestation
            <br />
            Script, based on
            <br />
            everything you've told us,
            <br />
            20..."
          </p>
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin-slow mt-1 flex-shrink-0" />
        </div>

        <p className="text-gray-400 text-sm mt-6">
          You will be redirected
          <br />
          automatically
        </p>

        <div className="flex justify-center gap-2 mt-4">
          <div className="w-3 h-3 bg-[#F9D423] rounded-full animate-bounce-dot" style={{ animationDelay: "0ms" }} />
          <div className="w-3 h-3 bg-[#F9D423] rounded-full animate-bounce-dot" style={{ animationDelay: "150ms" }} />
          <div className="w-3 h-3 bg-[#F9D423] rounded-full animate-bounce-dot" style={{ animationDelay: "300ms" }} />
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulseCircle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-pulse-circle {
          animation: pulseCircle 2s ease-in-out infinite;
        }
        
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(100%); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }
        
        @keyframes bounceDot {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        .animate-bounce-dot {
          animation: bounceDot 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
