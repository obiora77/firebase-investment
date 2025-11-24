"use client"

interface Transaction {
  id: string
  type: "deposit" | "profit" | "withdrawal"
  amount: number
  date: string
  plan: string
  status: "completed" | "pending"
}

export default function TransactionHistory() {
  const transactions: Transaction[] = [
    { id: "1", type: "deposit", amount: 10000, date: "2024-08-01", plan: "Premium Plus", status: "completed" },
    { id: "2", type: "profit", amount: 600, date: "2024-09-01", plan: "Premium Plus", status: "completed" },
    { id: "3", type: "deposit", amount: 5000, date: "2024-09-15", plan: "Standard Growth", status: "completed" },
    { id: "4", type: "profit", amount: 250, date: "2024-10-01", plan: "Standard Growth", status: "completed" },
    { id: "5", type: "profit", amount: 750, date: "2024-10-01", plan: "Premium Plus", status: "completed" },
    { id: "6", type: "withdrawal", amount: 1000, date: "2024-10-15", plan: "Premium Plus", status: "pending" },
  ]

  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "deposit":
        return "📥"
      case "profit":
        return "📈"
      case "withdrawal":
        return "📤"
    }
  }

  const getTransactionColor = (type: Transaction["type"]) => {
    switch (type) {
      case "deposit":
        return "text-blue-600 dark:text-blue-400"
      case "profit":
        return "text-green-600 dark:text-green-400"
      case "withdrawal":
        return "text-orange-600 dark:text-orange-400"
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-background">
              <th className="text-left px-6 py-3 font-semibold text-sm">Type</th>
              <th className="text-left px-6 py-3 font-semibold text-sm">Plan</th>
              <th className="text-left px-6 py-3 font-semibold text-sm">Amount</th>
              <th className="text-left px-6 py-3 font-semibold text-sm">Date</th>
              <th className="text-left px-6 py-3 font-semibold text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border hover:bg-background/50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{getTransactionIcon(tx.type)}</span>
                    <span className="capitalize font-medium">{tx.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{tx.plan}</td>
                <td className={`px-6 py-4 font-semibold ${getTransactionColor(tx.type)}`}>
                  {tx.type === "withdrawal" ? "-" : "+"}${tx.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{new Date(tx.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tx.status === "completed"
                        ? "bg-accent/20 text-accent"
                        : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                    }`}
                  >
                    {tx.status === "completed" ? "Completed" : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
