import React from "react";
import {
  AvatarGroup,
  Box,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import { GameCard } from "./GameCard";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@mui/icons-material/Close";
import { green, pink, red, yellow } from "@mui/material/colors";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import InputSlider from "./BetSlider";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { SentimentNeutral } from "@mui/icons-material";
import { AiOutlineSplitCells } from "react-icons/ai";
import RemoveIcon from "@mui/icons-material/Remove";

export const BjBoard = (props) => {
  const checkColor = (card) => {
    if (card === undefined) return;
    if (card.includes("♢") || card.includes("♡")) {
      return "#ba000d";
    } else return "#212121";
  };

  const overBlackjack = (player) => {
    if (player.deck.cards.length === 0) return;
    if (player.deck.hardTotal > 21 && player.deck.softTotal > 21) {
      {
        player.stand = true;
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <Box hidden={props.players[0].deck.cards.length === 0}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          display={"inline-grid"}
        >
          <AvatarGroup variant="square" spacing={"medium"}>
            {[...props.npc.deck.cards.keys()].map((i) => (
              <Grid
                item
                xs={9}
                key={i}
                sx={{
                  display: "grid",
                  backgroundColor: "#a5d6a7",
                  borderRadius: "1em",
                }}
              >
                {!props.npc.stand && i === 1 ? (
                  <GameCard key={i} CardNumber={"?"} color={"#689f38"} />
                ) : (
                  <GameCard
                    key={i}
                    CardNumber={props.npc.deck.cards[i]}
                    color={checkColor(props.npc.deck.cards[i])}
                  />
                )}
              </Grid>
            ))}
          </AvatarGroup>
          {!(props.npc.deck.cards.length === 0) && (
            <div className="playerInfo">
              <Typography
                fontSize={"1.3rem"}
                color={"#000"}
                sx={{
                  padding: "0.4rem",
                  borderRadius: "0.4rem",
                  width: "2rem",
                  height: "auto",
                  backgroundColor: "white",
                  display: "inline",
                }}
              >
                {props.npc.player} -
                <Typography
                  fontSize={"1.3rem"}
                  color={
                    props.npc.stand
                      ? props.isBlackjack(props.npc)
                        ? "#FFF"
                        : "#000"
                      : "#000"
                  }
                  sx={{
                    padding: "0.4rem",
                    borderRadius: "0.4rem",
                    width: "2rem",
                    height: "auto",
                    backgroundColor: props.npc.stand
                      ? props.isBlackjack(props.npc)
                        ? "#09af00"
                        : overBlackjack(props.npc)
                        ? "#B00020"
                        : "#FFFFFF"
                      : "#FFF",
                    display: "inline",
                  }}
                >
                  {!props.npc.stand
                    ? "?"
                    : props.npc.deck.hardTotal > props.npc.deck.softTotal
                    ? props.npc.deck.hardTotal
                    : props.npc.deck.softTotal}
                </Typography>
              </Typography>
            </div>
          )}
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={8}
        >
          {[...props.players.keys()].map((i) => (
            <>
              <Grid
                item
                xs={1.8}
                key={i}
                display={"grid"}
                sx={{
                  height: "auto",
                  width: "auto",
                  backgroundColor: "#a5d6a7",
                  borderRadius: "1em",
                }}
              >
                {props.npc.insuranceAvailable &&
                  props.players[i].coinsPlaced > 0 && (
                    <div classname="insuranceDiv">
                      <Button
                        onClick={() => props.handleInsurance(props.players[i])}
                        id="insuranceButton"
                        disabled={
                          props.players[i].insuranceBet > 0 ||
                          (!props.isBlackjack(props.players[i]) &&
                            props.players[i].stand) ||
                          (props.isBlackjack(props.players[i]) &&
                            props.npc.stand)
                        }
                        variant="h6"
                        color={"#222"}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          maxWidth: "10em",
                          display:
                            props.players[i].insuranceBet > 0 ||
                            (!props.isBlackjack(props.players[i]) &&
                              props.players[i].stand) ||
                            (props.isBlackjack(props.players[i]) &&
                              props.npc.stand)
                              ? "none"
                              : "unset",
                          backgroundColor: "#fff",
                          "&:hover": { backgroundColor: "lightgray" },
                          "&:disabled": {
                            backgroundColor: "black",
                            cursor: "default",
                            color: "gray",
                          },
                        }}
                      >
                        Insurance
                      </Button>
                      {props.players[i].insuranceBet > 0 && (
                        <Typography
                          fontSize={"1.3rem"}
                          color={"#000"}
                          justifyContent="center"
                          alignItems="center"
                          margin={"auto"}
                          sx={{
                            maxWidth: "7em",
                            display: "table",
                            padding: "0.4rem",
                            borderRadius: "0.4rem",
                            backgroundColor: props.npc.stand
                              ? props.isBlackjack(props.npc)
                                ? "#c8e6c9"
                                : props.npc.stand
                                ? "#ff7961"
                                : "#FFF"
                              : "#FFF",
                            display: "block",
                          }}
                        >
                          {props.players[i].insuranceBet} Placed
                        </Typography>
                      )}
                    </div>
                  )}
                {props.betTime && (
                  <div className="betDiv">
                    <InputSlider
                      coins={props.players[i].coins}
                      handleBet={(value) =>
                        props.handleBet(value, props.players[i])
                      }
                      coinsPlaced={props.players[i].coinsPlaced}
                    />
                  </div>
                )}
                <div className="splitGroup">
                  {props.players[i].deck.cards.length !== 0 && (
                    <div className="betDiv">
                      <Typography
                        fontSize={"1.3rem"}
                        color={"#000"}
                        sx={{
                          padding: "0.4rem",
                          borderRadius: "0.4rem",
                          width: "2rem",
                          height: "auto",
                          backgroundColor: "white",
                          display: "inline",
                          marginRight: "1em",
                        }}
                      >
                        Bet: {props.players[i].coinsPlaced}
                        <PaidRoundedIcon fontSize="medium" />
                      </Typography>
                    </div>
                  )}
                  {props.players[i].split !== null && (
                    <div className="betDiv">
                      <Typography
                        fontSize={"1.3rem"}
                        color={"#000"}
                        sx={{
                          padding: "0.4rem",
                          borderRadius: "0.4rem",
                          width: "2rem",
                          height: "auto",
                          backgroundColor: "white",
                          display: "inline",
                        }}
                      >
                        Bet: {props.players[i].coinsPlaced}
                        <PaidRoundedIcon fontSize="medium" />
                      </Typography>
                    </div>
                  )}
                </div>
                <div className="splitGroup">
                  <div className="playerWon">
                    {props.players[i].winner ? (
                      <Typography
                        fontSize={"1.5rem"}
                        color={"#43a047"}
                        sx={{
                          padding: "0.4rem",
                          borderRadius: "0.4rem",
                          width: "2rem",
                          height: "auto",
                          backgroundColor: "#c8e6c9",
                          display: "inline",
                        }}
                      >
                        YOU WON{" "}
                        {props.isBlackjack(props.players[i])
                          ? Math.round(props.players[i].coinsPlaced * 1.5)
                          : props.players[i].coinsPlaced}
                        <PaidRoundedIcon fontSize="medium" />
                      </Typography>
                    ) : (
                      props.npc.stand &&
                      (props.npc.deck.softTotal ===
                      props.players[i].deck.softTotal ? (
                        <Typography
                          fontSize={"1.5rem"}
                          color={"#111"}
                          sx={{
                            padding: "0.4rem",
                            borderRadius: "0.4rem",
                            width: "2rem",
                            height: "auto",
                            backgroundColor: "#ffef62",
                            display: "inline",
                          }}
                        >
                          Draw <SentimentNeutral fontSize="medium" />
                        </Typography>
                      ) : (
                        <Typography
                          fontSize={"1.5rem"}
                          color={"#111"}
                          sx={{
                            padding: "0.4rem",
                            borderRadius: "0.4rem",
                            width: "2rem",
                            height: "auto",
                            backgroundColor: "#ff7961",
                            display: "inline",
                          }}
                        >
                          You Lost{" "}
                          <SentimentVeryDissatisfiedIcon fontSize="medium" />
                        </Typography>
                      ))
                    )}
                    {props.players[i].split !== null &&
                      (props.players[i].split.winner ? (
                        <Typography
                          fontSize={"1.5rem"}
                          color={"#43a047"}
                          sx={{
                            padding: "0.4rem",
                            borderRadius: "0.4rem",
                            width: "2rem",
                            height: "auto",
                            backgroundColor: "#c8e6c9",
                            display: "inline",
                          }}
                        >
                          YOU WON{" "}
                          {props.isBlackjack(props.players[i].split)
                            ? Math.round(props.players[i].coinsPlaced * 1.5)
                            : props.players[i].coinsPlaced}
                          <PaidRoundedIcon fontSize="medium" />
                        </Typography>
                      ) : (
                        props.npc.stand &&
                        (props.npc.deck.softTotal ===
                        props.players[i].split.deck.softTotal ? (
                          <Typography
                            fontSize={"1.5rem"}
                            color={"#111"}
                            sx={{
                              padding: "0.4rem",
                              borderRadius: "0.4rem",
                              width: "2rem",
                              height: "auto",
                              backgroundColor: "#ffef62",
                              display: "inline",
                            }}
                          >
                            Draw <SentimentNeutral fontSize="medium" />
                          </Typography>
                        ) : (
                          <Typography
                            fontSize={"1.5rem"}
                            color={"#111"}
                            sx={{
                              padding: "0.4rem",
                              borderRadius: "0.4rem",
                              width: "2rem",
                              height: "auto",
                              backgroundColor: "#ff7961",
                              display: "inline",
                            }}
                          >
                            You Lost{" "}
                            <SentimentVeryDissatisfiedIcon fontSize="medium" />
                          </Typography>
                        ))
                      ))}
                  </div>
                </div>

                <div className="playerCards">
                  <div className="splitGroup">
                    <AvatarGroup
                      variant="square"
                      spacing={"small"}
                      sx={{
                        float: "left",
                        display: "inline-flex",
                        marginRight: "1em",
                      }}
                      max={6}
                    >
                      {[...props.players[i].deck.cards.keys()].map((y) => (
                        <GameCard
                          key={y}
                          CardNumber={props.players[i].deck.cards[y]}
                          color={checkColor(props.players[i].deck.cards[y])}
                        />
                      ))}
                    </AvatarGroup>
                    {props.players[i].split !== null && (
                      <AvatarGroup
                        variant="square"
                        spacing={"small"}
                        sx={{ float: "left", display: "inline-flex" }}
                        max={6}
                      >
                        {[...props.players[i].split.deck.cards.keys()].map(
                          (y) => (
                            <GameCard
                              key={y}
                              CardNumber={props.players[i].split.deck.cards[y]}
                              color={checkColor(
                                props.players[i].split.deck.cards[y]
                              )}
                            />
                          )
                        )}
                      </AvatarGroup>
                    )}
                  </div>
                </div>
                {props.players[i].deck.cards.length !== 0 && (
                  <div className="splitGroup">
                    <div className="playerInfo">
                      <Typography
                        fontSize={"1.3rem"}
                        color={
                          props.isBlackjack(props.players[i]) ? "#FFF" : "#000"
                        }
                        sx={{
                          padding: "0.4rem",
                          borderRadius: "0.4rem",
                          width: "2rem",
                          height: "auto",
                          backgroundColor: props.isBlackjack(props.players[i])
                            ? "#09af00"
                            : overBlackjack(props.players[i])
                            ? "#B00020"
                            : "#FFFFFF",
                          display: "inline",
                          marginRight: "1em",
                        }}
                      >
                        {props.players[i].deck.hardTotal ===
                        props.players[i].deck.softTotal
                          ? props.players[i].deck.hardTotal
                          : props.players[i].deck.softTotal === 21
                          ? props.players[i].deck.softTotal
                          : props.players[i].deck.softTotal > 21
                          ? props.players[i].deck.hardTotal
                          : props.players[i].stand
                          ? props.players[i].deck.softTotal
                          : props.players[i].deck.softTotal +
                            "/" +
                            props.players[i].deck.hardTotal}
                        <>
                          <Tooltip title="Hit">
                            <span>
                              <IconButton
                                disabled={props.players[i].stand ? true : false}
                                onClick={() =>
                                  props.handleHit(props.players[i])
                                }
                                color="success"
                                size="small"
                                sx={{
                                  color: props.players[i].stand
                                    ? "gray"
                                    : green[500],
                                  backgroundColor: props.players[i].stand
                                    ? "lightgray"
                                    : "white",
                                  "&:hover": {
                                    backgroundColor: props.players[i].stand
                                      ? "black"
                                      : "lightgray",
                                    cursor: props.players[i].stand
                                      ? "default"
                                      : "pointer",
                                  },
                                  "&:disabled": {
                                    backgroundColor: "black",
                                    cursor: "default",
                                    color: "gray",
                                  },
                                }}
                                aria-label="hit"
                              >
                                <AddIcon
                                  disabled={
                                    props.players[i].stand ? true : false
                                  }
                                  sx={{
                                    color: props.players[i].stand
                                      ? "gray"
                                      : pink[500],
                                    backgroundColor: props.players[i].stand
                                      ? "lightgray"
                                      : "pink[500]",
                                  }}
                                />
                              </IconButton>
                            </span>
                          </Tooltip>
                          <Tooltip title="Stand">
                            <span>
                              <IconButton
                                disabled={props.players[i].stand ? true : false}
                                onClick={() =>
                                  props.handleStand(props.players[i])
                                }
                                size="small"
                                sx={{
                                  backgroundColor: props.players[i].stand
                                    ? "lightgray"
                                    : "white",
                                  "&:hover": {
                                    backgroundColor: props.players[i].stand
                                      ? "black"
                                      : "lightgray",
                                    cursor: props.players[i].stand
                                      ? "default"
                                      : "pointer",
                                  },
                                  "&:disabled": {
                                    backgroundColor: "black",
                                    cursor: "default",
                                  },
                                  color: props.players[i].stand
                                    ? "gray"
                                    : pink[500],
                                }}
                                aria-label="stand"
                              >
                                <RemoveIcon
                                  disabled={
                                    props.players[i].stand ? true : false
                                  }
                                  sx={{
                                    color: props.players[i].stand
                                      ? "gray"
                                      : pink[500],
                                  }}
                                />
                              </IconButton>
                            </span>
                          </Tooltip>
                          {props.players[i].doubleDownAvailable &&
                            !props.players[i].stand && (
                              <Tooltip title="Double Down">
                                <span>
                                  <IconButton
                                    disabled={
                                      props.players[i].stand ? true : false
                                    }
                                    onClick={() =>
                                      props.handleDoubleDown(props.players[i])
                                    }
                                    size="small"
                                    sx={{
                                      backgroundColor: props.players[i].stand
                                        ? "lightgray"
                                        : "white",
                                      "&:hover": {
                                        backgroundColor: props.players[i].stand
                                          ? "black"
                                          : "lightgray",
                                        cursor: props.players[i].stand
                                          ? "default"
                                          : "pointer",
                                      },
                                      "&:disabled": {
                                        backgroundColor: "black",
                                        cursor: "default",
                                      },
                                      color: props.players[i].stand
                                        ? "lightgray"
                                        : yellow[900],
                                    }}
                                    aria-label="stand"
                                  >
                                    <CloseIcon
                                      disabled={
                                        props.players[i].stand ? true : false
                                      }
                                      sx={{
                                        color: props.players[i].stand
                                          ? "gray"
                                          : yellow[900],
                                      }}
                                    />
                                  </IconButton>
                                </span>
                              </Tooltip>
                            )}
                          {props.players[i].splitAvailable && (
                            <Tooltip title="Split">
                              <IconButton
                                disabled={props.players[i].stand ? true : false}
                                onClick={() =>
                                  props.handleSplit(props.players[i])
                                }
                                sx={{
                                  backgroundColor: props.players[i].stand
                                    ? "lightgray"
                                    : "white",
                                  "&:hover": {
                                    backgroundColor: props.players[i].stand
                                      ? "black"
                                      : "lightgray",
                                    cursor: props.players[i].stand
                                      ? "default"
                                      : "pointer",
                                  },
                                  "&:disabled": {
                                    backgroundColor: "black",
                                    color: "white",
                                    cursor: "default",
                                  },
                                }}
                                aria-label="stand"
                              >
                                <AiOutlineSplitCells
                                  color={
                                    props.players[i].stand ? "gray" : "#2196f3"
                                  }
                                  fontSize={"large"}
                                  disabled={
                                    props.players[i].stand ? true : false
                                  }
                                />
                              </IconButton>
                            </Tooltip>
                          )}
                        </>
                      </Typography>
                    </div>
                    {props.players[i].split !== null && (
                      <div className="playerInfo">
                        <Typography
                          fontSize={"1.3rem"}
                          color={
                            props.isBlackjack(props.players[i].split)
                              ? "#FFF"
                              : "#000"
                          }
                          sx={{
                            padding: "0.4rem",
                            borderRadius: "0.4rem",
                            width: "2rem",
                            height: "auto",
                            backgroundColor: props.isBlackjack(
                              props.players[i].split
                            )
                              ? "#09af00"
                              : overBlackjack(props.players[i].split)
                              ? "#B00020"
                              : "#FFFFFF",
                            display: "inline",
                          }}
                        >
                          {props.players[i].split.deck.cards.length !== 0 &&
                            (props.players[i].split.deck.hardTotal ===
                            props.players[i].split.deck.softTotal
                              ? props.players[i].split.deck.hardTotal
                              : props.players[i].split.deck.softTotal === 21
                              ? props.players[i].split.deck.softTotal
                              : props.players[i].split.deck.softTotal > 21
                              ? props.players[i].split.deck.hardTotal
                              : props.players[i].split.stand
                              ? props.players[i].split.deck.softTotal
                              : props.players[i].split.deck.softTotal +
                                "/" +
                                props.players[i].split.deck.hardTotal)}
                          <>
                            <Tooltip title="Hit">
                              <span>
                                <IconButton
                                  disabled={
                                    props.players[i].split.stand ? true : false
                                  }
                                  onClick={() =>
                                    props.handleHit(props.players[i].split)
                                  }
                                  color="success"
                                  size="small"
                                  sx={{
                                    color: props.players[i].split.stand
                                      ? "gray"
                                      : green[500],
                                    backgroundColor: props.players[i].split
                                      .stand
                                      ? "lightgray"
                                      : "white",
                                    "&:hover": {
                                      backgroundColor: props.players[i].split
                                        .stand
                                        ? "black"
                                        : "lightgray",
                                      cursor: props.players[i].split.stand
                                        ? "default"
                                        : "pointer",
                                    },
                                    "&:disabled": {
                                      backgroundColor: "black",
                                      cursor: "default",
                                      color: "gray",
                                    },
                                  }}
                                  aria-label="hit"
                                >
                                  <AddIcon
                                    disabled={
                                      props.players[i].split.stand
                                        ? true
                                        : false
                                    }
                                    sx={{
                                      color: props.players[i].split.stand
                                        ? "gray"
                                        : pink[500],
                                      backgroundColor: props.players[i].split
                                        .stand
                                        ? "lightgray"
                                        : "pink[500]",
                                    }}
                                  />
                                </IconButton>
                              </span>
                            </Tooltip>
                            <Tooltip title="Stand">
                              <span>
                                <IconButton
                                  disabled={
                                    props.players[i].split.stand ? true : false
                                  }
                                  onClick={() =>
                                    props.handleStand(props.players[i].split)
                                  }
                                  size="small"
                                  sx={{
                                    backgroundColor: props.players[i].split
                                      .stand
                                      ? "lightgray"
                                      : "white",
                                    "&:hover": {
                                      backgroundColor: props.players[i].split
                                        .stand
                                        ? "black"
                                        : "lightgray",
                                      cursor: props.players[i].split.stand
                                        ? "default"
                                        : "pointer",
                                    },
                                    "&:disabled": {
                                      backgroundColor: "black",
                                      cursor: "default",
                                    },
                                  }}
                                  aria-label="stand"
                                >
                                  <RemoveIcon
                                    disabled={
                                      props.players[i].split.stand
                                        ? true
                                        : false
                                    }
                                    sx={{
                                      color: props.players[i].split.stand
                                        ? "gray"
                                        : pink[500],
                                    }}
                                  />
                                </IconButton>
                              </span>
                            </Tooltip>
                          </>
                        </Typography>
                      </div>
                    )}
                  </div>
                )}
                <div className="playerInfo">
                  <Typography
                    fontSize={"1.3rem"}
                    color={"#000"}
                    sx={{
                      padding: "0.4rem",
                      borderRadius: "0.4rem",
                      width: "2rem",
                      height: "auto",
                      backgroundColor: "white",
                      display: "inline",
                    }}
                  >
                    {props.players[i].player}
                  </Typography>
                </div>
                {!(props.players[i].deck.cards.length === 0) && <></>}
                <div className="moneyDiv">
                  <Typography
                    fontSize={"1.3rem"}
                    color={"#000"}
                    sx={{
                      padding: "0.4rem",
                      borderRadius: "0.4rem",
                      width: "2rem",
                      height: "auto",
                      backgroundColor: "white",
                      display: "inline",
                    }}
                  >
                    Coins: {props.players[i].coins}
                    <PaidRoundedIcon fontSize="medium" />
                  </Typography>
                </div>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};
