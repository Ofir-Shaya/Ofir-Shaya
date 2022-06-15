import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmailIcon from "@mui/icons-material/Email";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidIcon from "@mui/icons-material/Paid";
import PermMediaIcon from "@mui/icons-material/PermMedia";

export const SidebarData = [
  {
    title: "Home",
    icon: <AccountBalanceIcon />,
    link: "/Home",
  },
  {
    title: "Email",
    icon: <EmailIcon />,
    link: "/Email",
  },
  {
    title: "Overview",
    icon: <DashboardIcon />,
    link: "/Overview",
  },
  {
    title: "Money",
    icon: <PaidIcon />,
    link: "/Money",
  },
  {
    title: "Images",
    icon: <PermMediaIcon />,
    link: "/Images",
  },
];
