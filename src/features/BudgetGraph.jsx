import { Card } from "../components/Card";
import { Box, CircularProgress, Typography } from "@mui/material";

export function BudgetGraph({ income, expense }) {
  const percentageOfIncomeSpent = income
    ? (Number(expense.reduce((acc, e) => acc + (e?.amount ?? 0), 0)) /
        Number(income)) *
      100
    : 0;
  const netValue =
    income - expense.reduce((acc, e) => acc + (e?.amount ?? 0), 0);

  const ranking =
    netValue < 0
      ? "danger"
      : percentageOfIncomeSpent >= 65
        ? "warning"
        : "safe";

  return (
    <Card className="budget-graph">
      <h3>Remaining Balance</h3>
      <p className={`budget-net-value ${ranking}`}>
        ${Number(netValue).toLocaleString()}
      </p>

      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          size={180}
          enableTrackSlot
          variant="determinate"
          value={percentageOfIncomeSpent}
          sx={{
            color:
              ranking === "danger"
                ? "#e45449"
                : ranking === "warning"
                  ? "#ecbd39"
                  : "#26cf74",
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" sx={{ fontSize: 20 }}>
            {`${percentageOfIncomeSpent.toFixed(2)}%`}
            <p className="caption-subtitle">of income spent</p>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
