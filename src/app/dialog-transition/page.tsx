"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function SharedLayout() {
  const [activeGame, setActiveGame] = useState<(typeof GAMES)[0] | null>();
  const isOpen = Boolean(activeGame);

  return (
    <div className="py-12">
      <RadixDialog.Root
        open={isOpen}
        onOpenChange={() => isOpen && setActiveGame(null)}
      >
        <div className="min-h-screen">
          <AnimatePresence>
            <RadixDialog.Portal>
              <RadixDialog.Overlay className="absolute inset-0 bg-black/20" />
              <RadixDialog.Content className="absolute inset-0 grid place-items-center z-10">
                <motion.div
                  layoutId={`game-wrapper-${activeGame?.title}`}
                  className="flex h-fit w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden bg-white p-4"
                  style={{ borderRadius: 12 }}
                >
                  <div className="flex w-full items-center gap-4">
                    <motion.img
                      layoutId={`image-${activeGame?.title}`}
                      height={56}
                      width={56}
                      alt="Game"
                      src={activeGame?.image}
                      style={{ borderRadius: 12 }}
                    />
                    <div className="flex grow items-center justify-between">
                      <div className="flex flex-col py-4 px-0">
                        <motion.h2
                          layoutId={`game-title-${activeGame?.title}`}
                          className="text-sm font-medium"
                        >
                          {activeGame?.title}
                        </motion.h2>
                        <motion.p
                          layoutId={`game-description-${activeGame?.title}`}
                          className="text-sm text-gray-500"
                        >
                          {activeGame?.description}
                        </motion.p>
                      </div>
                      <RadixDialog.Close aria-label="Close">
                        <motion.button
                          layoutId={`game-button-${activeGame?.title}`}
                          className="rounded-full bg-gray-300 py-1 px-3 font-semibold text-blue-500"
                        >
                          Get
                        </motion.button>
                      </RadixDialog.Close>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    layoutId={`game-long-description-${activeGame?.title}`}
                    className="text-sm text-gray-500 w-full"
                  >
                    {activeGame?.longDescription}
                  </motion.p>
                </motion.div>
              </RadixDialog.Content>
            </RadixDialog.Portal>
          </AnimatePresence>
          <ul className="relative flex w-full flex-col items-center p-0">
            {GAMES.map((game) => (
              <RadixDialog.Trigger key={game.title} asChild>
                <motion.li
                  className="flex w-[386px] cursor-pointer items-center gap-4 p-0 [&>*]:last:border-none"
                  layoutId={`game-wrapper-${game.title}`}
                  onClick={() => setActiveGame(game)}
                  style={{ borderRadius: 8 }}
                >
                  <motion.img
                    layoutId={`image-${game.title}`}
                    height={56}
                    width={56}
                    alt="Game"
                    src={game.image}
                    style={{ borderRadius: 12 }}
                  />
                  <div className="flex grow items-center justify-between border-b border-gray-200">
                    <div className="flex flex-col py-4 px-0">
                      <motion.h2
                        layoutId={`game-title-${game.title}`}
                        className="text-sm font-medium"
                      >
                        {game.title}
                      </motion.h2>
                      <motion.p
                        layoutId={`game-description-${game.title}`}
                        className="text-sm text-gray-500"
                      >
                        {game.description}
                      </motion.p>
                    </div>
                    <motion.button
                      className="rounded-full background-gray-200 text-blue-500 py-1 px-3 font-semibold"
                      layoutId={`game-button-${game.title}`}
                    >
                      Get
                    </motion.button>
                  </div>
                </motion.li>
              </RadixDialog.Trigger>
            ))}
          </ul>
        </div>
      </RadixDialog.Root>
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
