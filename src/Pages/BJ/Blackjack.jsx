import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "../../css/blackjackStyles.css";
import { BjBoard } from "./components/BjBoard";
import CustomButton from "./components/CustomButton";

export const Blackjack = () => {
  const defaultFourDeck = [
    "A♢",
    "A♡",
    "A♠",
    "A♣",
    "2♢",
    "2♡",
    "2♠",
    "2♣",
    "3♢",
    "3♡",
    "3♠",
    "3♣",
    "4♢",
    "4♡",
    "4♠",
    "4♣",
    "5♢",
    "5♡",
    "5♠",
    "5♣",
    "6♢",
    "6♡",
    "6♠",
    "6♣",
    "7♢",
    "7♡",
    "7♠",
    "7♣",
    "8♢",
    "8♡",
    "8♠",
    "8♣",
    "9♢",
    "9♡",
    "9♠",
    "9♣",
    "10♢",
    "10♡",
    "10♠",
    "10♣",
    "J♢",
    "J♡",
    "J♠",
    "J♣",
    "Q♢",
    "Q♡",
    "Q♠",
    "Q♣",
    "K♢",
    "K♡",
    "K♠",
    "K♣",
    "A♢",
    "A♡",
    "A♠",
    "A♣",
    "2♢",
    "2♡",
    "2♠",
    "2♣",
    "3♢",
    "3♡",
    "3♠",
    "3♣",
    "4♢",
    "4♡",
    "4♠",
    "4♣",
    "5♢",
    "5♡",
    "5♠",
    "5♣",
    "6♢",
    "6♡",
    "6♠",
    "6♣",
    "7♢",
    "7♡",
    "7♠",
    "7♣",
    "8♢",
    "8♡",
    "8♠",
    "8♣",
    "9♢",
    "9♡",
    "9♠",
    "9♣",
    "10♢",
    "10♡",
    "10♠",
    "10♣",
    "J♢",
    "J♡",
    "J♠",
    "J♣",
    "Q♢",
    "Q♡",
    "Q♠",
    "Q♣",
    "K♢",
    "K♡",
    "K♠",
    "K♣",
    "A♢",
    "A♡",
    "A♠",
    "A♣",
    "2♢",
    "2♡",
    "2♠",
    "2♣",
    "3♢",
    "3♡",
    "3♠",
    "3♣",
    "4♢",
    "4♡",
    "4♠",
    "4♣",
    "5♢",
    "5♡",
    "5♠",
    "5♣",
    "6♢",
    "6♡",
    "6♠",
    "6♣",
    "7♢",
    "7♡",
    "7♠",
    "7♣",
    "8♢",
    "8♡",
    "8♠",
    "8♣",
    "9♢",
    "9♡",
    "9♠",
    "9♣",
    "10♢",
    "10♡",
    "10♠",
    "10♣",
    "J♢",
    "J♡",
    "J♠",
    "J♣",
    "Q♢",
    "Q♡",
    "Q♠",
    "Q♣",
    "K♢",
    "K♡",
    "K♠",
    "K♣",
    "A♢",
    "A♡",
    "A♠",
    "A♣",
    "2♢",
    "2♡",
    "2♠",
    "2♣",
    "3♢",
    "3♡",
    "3♠",
    "3♣",
    "4♢",
    "4♡",
    "4♠",
    "4♣",
    "5♢",
    "5♡",
    "5♠",
    "5♣",
    "6♢",
    "6♡",
    "6♠",
    "6♣",
    "7♢",
    "7♡",
    "7♠",
    "7♣",
    "8♢",
    "8♡",
    "8♠",
    "8♣",
    "9♢",
    "9♡",
    "9♠",
    "9♣",
    "10♢",
    "10♡",
    "10♠",
    "10♣",
    "J♢",
    "J♡",
    "J♠",
    "J♣",
    "Q♢",
    "Q♡",
    "Q♠",
    "Q♣",
    "K♢",
    "K♡",
    "K♠",
    "K♣",
  ];

  const [cardList, setCardList] = React.useState(defaultFourDeck);
  const [players, setPlayers] = React.useState([
    {
      player: "aaa",
      deck: { cards: [], hardTotal: 0, softTotal: 0 },
      stand: false,
      coins: 100,
      coinsPlaced: 0,
      winner: false,
      splitAvailable: false,
      split: null,
      doubleDownAvailable: false,
      insuranceBet: 0,
    },
    {
      player: "bbb",
      deck: { cards: [], hardTotal: 0, softTotal: 0 },
      stand: false,
      coins: 100,
      coinsPlaced: 0,
      winner: false,
      splitAvailable: false,
      split: null,
      doubleDownAvailable: false,
      insuranceBet: 0,
    },
    {
      player: "ccc",
      deck: { cards: [], hardTotal: 0, softTotal: 0 },
      stand: false,
      coins: 100,
      coinsPlaced: 0,
      winner: false,
      splitAvailable: false,
      split: null,
      doubleDownAvailable: false,
      insuranceBet: 0,
    },
    {
      player: "ddd",
      deck: { cards: [], hardTotal: 0, softTotal: 0 },
      stand: false,
      coins: 100,
      coinsPlaced: 0,
      winner: false,
      splitAvailable: false,
      split: null,
      doubleDownAvailable: false,
      insuranceBet: 0,
    },
    {
      player: "eee",
      deck: { cards: [], hardTotal: 0, softTotal: 0 },
      stand: false,
      coins: 100,
      coinsPlaced: 0,
      winner: false,
      splitAvailable: false,
      split: null,
      doubleDownAvailable: false,
      insuranceBet: 0,
    },
  ]);
  const [npc, setNpc] = React.useState({
    player: "NPC",
    deck: { cards: [], hardTotal: 0, softTotal: 0 },
    stand: false,
    insuranceAvailable: false,
  });
  const [playersDone, setPlayersDone] = React.useState(false);
  const [forceReRender, setForceReRender] = React.useState(0);
  const [shuffling, setShuffling] = React.useState(false);
  const [validNewGame, setValidNewGame] = React.useState(false);

  useEffect(() => {
    handleNPC();
  }, [playersDone]);
  useEffect(() => {
    checkAllDone();
  }, [forceReRender]);
  useEffect(() => {
    checkWinners();
  }, [npc.stand]);

  const checkWinners = () => {
    if (playersDone && npc.stand) {
      const npcValue = npc.deck.softTotal;

      players.forEach((player) => {
        if (player.winner) return;

        if (npc.insuranceAvailable) {
          if (player.insuranceBet > 0) {
            if (isBlackjack(npc))
              player.coins = player.coins + player.insuranceBet;
            setForceReRender(forceReRender + 1);
          }
        }

        if (player.split) {
          if (
            player.split.deck.softTotal <= 21 &&
            player.split.deck.softTotal >= player.split.deck.hardTotal
          ) {
          } else {
            player.split.deck.softTotal = player.split.deck.hardTotal;
          }
          const playerSplitValue = player.split.deck.softTotal;
          if (playerSplitValue === 21)
            if (npcValue === 21 && npc.deck.cards.length === 2) {
            } else {
              player.coins = player.coins + Math.round(player.coinsPlaced / 2);
            }
          if (didPlayerWin(playerSplitValue, npcValue)) {
            player.coins = player.coins + Math.round(player.coinsPlaced * 2);
            player.split.winner = true;
            setForceReRender(forceReRender + 1);
          } else if (npcValue === playerSplitValue) handleDraw(player);
        }

        if (
          player.deck.softTotal <= 21 &&
          player.deck.softTotal >= player.deck.hardTotal
        ) {
        } else {
          player.deck.softTotal = player.deck.hardTotal;
        }

        const playerValue = player.deck.softTotal;

        if (playerValue === 21 && player.deck.cards.length === 2) {
          if (npcValue === 21 && npc.deck.cards.length === 2) {
          } else {
            player.coins = player.coins + Math.round(player.coinsPlaced / 2);
          }
        }
        if (didPlayerWin(playerValue, npcValue)) {
          player.coins = player.coins + Math.round(player.coinsPlaced * 2);
          player.winner = true;
          setForceReRender(forceReRender + 1);
        } else if (npcValue === playerValue) handleDraw(player);
      });
    } else return;
  };

  const didPlayerWin = (playerValue, npcValue) => {
    if (playerValue > 21) return false;
    if (npcValue > 21) return true;
    if (playerValue > npcValue) return true;

    return false;
  };

  const handleDraw = (player) => {
    player.coins = player.coins + player.coinsPlaced;
  };

  const isBlackjack = (player) => {
    if (player.deck.cards.length === 0) return;

    if (
      (player.deck.hardTotal === 21 && player.deck.cards.length === 2) ||
      (player.deck.softTotal === 21 && player.deck.cards.length === 2)
    ) {
      player.stand = true;
      return true;
    }
    return false;
  };

  const checkAllDone = () => {
    if (playersDone) return;

    let check = true;
    players.forEach((player) => {
      if (!player.stand) check = false;
      if (player.split && !player.split.stand) check = false;
    });

    if (check) {
      setPlayersDone(true);
      handleNPC();
    }
  };

  const handleNPC = () => {
    if (!playersDone || npc.stand) return;

    const copyNpc = { ...npc };

    while (copyNpc.deck.softTotal < 18 || copyNpc.deck.hardTotal < 17) {
      if (copyNpc.deck.softTotal >= 18 && copyNpc.deck.softTotal <= 21) break;
      if (copyNpc.deck.hardTotal >= 17 && copyNpc.deck.hardTotal <= 21) break;
      handleHit(copyNpc);
    }

    copyNpc.deck.softTotal =
      copyNpc.deck.softTotal > 21
        ? copyNpc.deck.hardTotal
        : copyNpc.deck.softTotal;

    copyNpc.stand = true;
    setNpc(copyNpc);
    checkWinners();
  };

  const createNewGame = () => {
    if (validNewGame) return;

    const copyPlayers = [...players];
    const copyNpc = { ...npc };

    copyNpc.deck.cards = [];
    copyNpc.deck.hardTotal = 0;
    copyNpc.deck.softTotal = 0;
    copyNpc.stand = false;
    copyNpc.insuranceAvailable = false;

    copyPlayers.forEach((player) => {
      player.stand = false;
      player.deck.cards = [];
      player.deck.softTotal = 0;
      player.deck.hardTotal = 0;
      player.coinsPlaced = 0;
      player.winner = false;
      player.doubleDownAvailable = false;
      player.splitAvailable = false;
      player.split = null;
      player.insuranceBet = 0;
    });

    setPlayersDone(false);
    setNpc(copyNpc);
    setPlayers(copyPlayers);
    setValidNewGame(true);
    setForceReRender(0);
  };

  const giveCards = () => {
    if (!validNewGame) return;

    const copyPlayers = [...players];
    let copyUpdatedDeck = [...cardList];
    const copyNpc = { ...npc };

    let randomNum = Math.floor(Math.random() * copyUpdatedDeck.length);
    copyNpc.deck.cards[0] = copyUpdatedDeck[randomNum];
    copyUpdatedDeck.splice(randomNum, 1);
    if (copyNpc.deck.cards[0].slice(0, -1) === "A")
      copyNpc.insuranceAvailable = true;
    for (let i = 0; i < copyPlayers.length; i++) {
      randomNum = Math.floor(Math.random() * copyUpdatedDeck.length);
      copyPlayers[i].deck.cards[0] = copyUpdatedDeck[randomNum];
      copyUpdatedDeck.splice(randomNum, 1);
    }

    randomNum = Math.floor(Math.random() * copyUpdatedDeck.length);
    copyNpc.deck.cards[1] = copyUpdatedDeck[randomNum];
    copyUpdatedDeck.splice(randomNum, 1);
    calculateValue(copyNpc);

    for (let i = 0; i < copyPlayers.length; i++) {
      randomNum = Math.floor(Math.random() * copyUpdatedDeck.length);
      copyPlayers[i].deck.cards[1] = copyUpdatedDeck[randomNum];
      copyUpdatedDeck.splice(randomNum, 1);

      calculateValue(copyPlayers[i]);

      copyPlayers[i].splitAvailable = checkSplit(copyPlayers[i]);
    }

    copyUpdatedDeck = shuffleDeck(copyUpdatedDeck);
    setNpc(copyNpc);
    setCardList(copyUpdatedDeck);
    setPlayers(copyPlayers);
    setPlayersDone(false);
    setValidNewGame(false);
  };

  const calculateValue = (player) => {
    if (player.deck.cards.length === 0) return 0;

    const deck = player.deck;
    deck.hardTotal = 0;
    deck.softTotal = 0;

    deck.cards.forEach((card) => {
      card = card.slice(0, -1);
      if (card === "A") {
        deck.hardTotal += 1;
        deck.softTotal += deck.softTotal + 11 > 21 ? 1 : 11;
      } else if (card === "J" || card === "Q" || card === "K") {
        deck.hardTotal += 10;
        deck.softTotal += 10;
      } else {
        deck.hardTotal += parseInt(card);
        deck.softTotal += parseInt(card);
      }
    });
  };

  const handleBet = (value, player) => {
    if (validNewGame) {
      if (value > 0 && player.coins >= value) {
        player.coins = player.coins - value;
        player.coinsPlaced = value;
        if (player.coins >= player.coinsPlaced)
          player.doubleDownAvailable = true;
        setForceReRender(forceReRender + 1);
      }
    }
    return;
  };

  const handleHit = (player) => {
    if (player.stand) return;

    const copiedDeck = [...cardList];

    let randomNum = Math.floor(Math.random() * copiedDeck.length);
    player.deck.cards.push(copiedDeck[randomNum]);
    copiedDeck.splice(randomNum, 1);

    calculateValue(player);
    setCardList(copiedDeck);
    setForceReRender(forceReRender + 1);
  };

  const handleStand = (player) => {
    if (player.stand) return;
    player.stand = true;
    player.splitAvailable = false;
    setForceReRender(forceReRender + 1);
  };

  const checkSplit = (player) => {
    if (player.coins < player.coinsPlaced) return false;
    if (player.deck.cards[0].slice(0, -1) !== player.deck.cards[1].slice(0, -1))
      return false;
    return true;
  };

  const handleSplit = (player) => {
    if (!player.splitAvailable) return;

    player.split = {};
    player.split.deck = {};
    player.split.deck.cards = player.deck.cards.splice(1, 1);
    player.split.deck.softTotal = 0;
    player.split.deck.hardTotal = 0;
    player.split.stand = false;
    player.split.winner = false;
    player.split.coinsPlaced = player.coinsPlaced;
    player.coins = player.coins - player.coinsPlaced;
    player.splitAvailable = false;
    player.doubleDownAvailable = false;

    calculateValue(player);
    calculateValue(player.split);
    setForceReRender(forceReRender + 1);
  };

  const handleDoubleDown = (player) => {
    if (!player.doubleDownAvailable) return;
    if (player.coins < player.coinsPlaced) return;

    player.coins = player.coins - player.coinsPlaced;
    player.coinsPlaced = Math.round(player.coinsPlaced * 2);

    handleHit(player);
    handleStand(player);
  };

  const handleInsurance = (player) => {
    if (!npc.insuranceAvailable) return;

    if (player.coins >= Math.round(player.coinsPlaced / 2)) {
      player.insuranceBet = Math.round(player.coinsPlaced / 2);
      player.coins = player.coins - Math.round(player.coinsPlaced / 2);
    }

    setForceReRender(forceReRender + 1);
  };

  const shuffleDeck = (copiedDeck) => {
    if (cardList.length < 52) {
      setShuffling(true);
      return defaultFourDeck;
    }

    setShuffling(false);
    return copiedDeck;
  };

  return (
    <>
      <div className="background">
        <Box>
          <br />
          <div className="header">
            <Button
              sx={{ margin: "auto", marginLeft: "17em" }}
              disabled={players[0].deck.cards.length === 0 ? false : !npc.stand}
              onClick={() => createNewGame()}
            >
              <CustomButton
                buttonName="New Game"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button disabled={!validNewGame} onClick={() => giveCards()}>
              <CustomButton
                buttonName="Start Game"
                sx={{ display: "flex", margin: "auto" }}
              />
            </Button>

            <Typography
              display={"inline"}
              color="Highlight"
              variant="h4"
              sx={{
                float: "right",
                margin: "auto",
                justifyContent: "center",
                alignItems: "right",
              }}
            >
              Cards left: {cardList.length}
            </Typography>
            <br />
            {shuffling && (
              <Typography
                display={"inline"}
                color="Highlight"
                variant="h4"
                sx={{
                  float: "right",
                  margin: "0 auto",
                  justifyContent: "center",
                  alignItems: "right",
                }}
              >
                Shuffled
              </Typography>
            )}
          </div>
          <BjBoard
            leftCards={cardList}
            players={players}
            npc={npc}
            betTime={validNewGame}
            handleBet={(value, player) => handleBet(value, player)}
            handleHit={(player) => handleHit(player)}
            handleStand={(player) => handleStand(player)}
            handleDoubleDown={(player, split) =>
              handleDoubleDown(player, split)
            }
            handleSplit={(player) => handleSplit(player)}
            handleInsurance={(player) => handleInsurance(player)}
            calculateValue={(player) => calculateValue(player)}
            isBlackjack={(player) => isBlackjack(player)}
          />
        </Box>
      </div>
    </>
  );
};
