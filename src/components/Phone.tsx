import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Icon } from "../components/Icon";

const phoneContent = {
  wallet: {
    title: "My Wallet",
    balance: "Available balance",
    left: "Pending",
    right: "Held",
    rows: [
      { icon: "wallet", title: "Transactions" },
      { icon: "file", title: "Wallet Statement" },
      { icon: "coins", title: "Payouts & Settlements" },
    ],
  },
  business: {
    title: "My Business",
    balance: "Earnings this week",
    left: "Income",
    right: "Expenses",
    rows: [
      { icon: "briefcase", title: "Trips & Jobs" },
      { icon: "chart", title: "Earnings" },
      { icon: "clipboard", title: "Expenses" },
      { icon: "file", title: "Reports" },
    ],
  },
};

function Balance({ label }: { label: string }) {
  const [visible, setVisible] = useState(true);
  return (
    <div className="phone-balance">
      <span>{label}</span>
      <strong>
        {visible ? "UGX 245,000" : "UGX •••,•••"}
        <button
          aria-label={visible ? "Hide balance" : "Show balance"}
          onClick={() => setVisible(!visible)}
        >
          {visible ? <Eye size={19} /> : <EyeOff size={19} />}
        </button>
      </strong>
    </div>
  );
}

export function Phone({ wallet = false }: { wallet?: boolean }) {
  const content = phoneContent[wallet ? "wallet" : "business"];
  return (
    <div className="phone" aria-label="ENFUNA app preview">
      <div className="phone-notch" />
      <div className="phone-top">
        <span>10:24</span>
        <span>▮▮▮ ▰</span>
      </div>
      <img src="/images/logo.png" alt="ENFUNA" />
      <h3>{content.title}</h3>
      <Balance label={content.balance} />
      <div className="phone-stats">
        <div>
          {content.left}
          <strong>UGX 60,000</strong>
        </div>
        <div>
          {content.right}
          <strong>UGX 20,000</strong>
        </div>
      </div>
      {content.rows.map((x) => (
        <div className="phone-row" key={x.title}>
          <Icon name={x.icon} />
          <span>{x.title}</span>
          <Icon name="chevron" />
        </div>
      ))}
      <span className="preview-label">APP PREVIEW</span>
      <div className="phone-nav">
        <Icon name="home" />
        <Icon name="wallet" />
        <Icon name="briefcase" />
        <Icon name="chart" />
      </div>
    </div>
  );
}
