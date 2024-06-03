"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { motion } from "framer-motion";

export default function Page() {
  const [activeGame, setActiveGame] = useState<(typeof GAMES)[0] | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useOnClickOutside(ref, () => setActiveGame(null));

  return (
    <div className="w-full h-full flex justify-center py-20">
      <AnimatePresence>
        {activeGame ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/5 absolute inset-0"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeGame ? (
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              layoutId={`game-card-${activeGame.title}`}
              className="bg-white space-y-2 rounded-md p-4 w-[500px]"
            >
              <div className="flex w-full gap-4">
                <motion.img
                  layoutId={`game-image-${activeGame.image}`}
                  width={56}
                  height={56}
                  className="rounded-md w-[56px] h-[56px]"
                  src={activeGame.image}
                  alt=""
                />
                <div className="flex grow py-2">
                  <div className="flex grow flex-col">
                    <motion.p
                      layoutId={`game-title-${activeGame.title}`}
                      className="text-base font-semibold"
                    >
                      {activeGame.title}
                    </motion.p>
                    <motion.p
                      layoutId={`description-${activeGame.title}`}
                      className="text-sm font-thin"
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    layoutId={`game-button-${activeGame.title}`}
                    className="py-1 px-2 text-blue-500 bg-slate-200 rounded-xl"
                  >
                    Get
                  </motion.button>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                layout
                className="text-sm font-thin"
              >
                {activeGame.longDescription}
              </motion.p>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-96">
        {GAMES.map((game) => (
          <motion.li
            layoutId={`game-card-${game.title}`}
            className="cursor-pointer flex gap-4 items-center py-2"
            onClick={() => setActiveGame(game)}
            ref={ref}
            key={game.title}
          >
            <motion.img
              className="w-[56] h-[56]"
              layoutId={`game-image-${game.image}`}
              style={{ borderRadius: 12 }}
              width={56}
              height={56}
              src={game.image}
              alt=""
            />
            <div className="flex grow border-b border-slate-200 py-2">
              <div className="flex grow flex-col">
                <motion.p
                  layoutId={`game-title-${game.title}`}
                  className="text-base font-semibold"
                >
                  {game.title}
                </motion.p>
                <motion.p
                  layoutId={`description-${game.title}`}
                  className="text-sm font-thin"
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`game-button-${game.title}`}
                className="py-1 px-2 text-blue-500 bg-slate-200 rounded-xl"
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
