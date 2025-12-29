// Withdrawal ticker logic
const withdrawalNames = [
  'Chris', 'Ava', 'Liam', 'Sophia', 'Noah', 'Mia', 'Mason', 'Olivia', 'Lucas', 'Emma',
  'Ethan', 'Isabella', 'Logan', 'Charlotte', 'James', 'Amelia', 'Benjamin', 'Harper',
  'Elijah', 'Evelyn', 'Alexander', 'Abigail', 'William', 'Ella', 'Michael', 'Scarlett',
  'Daniel', 'Grace', 'Matthew', 'Chloe', 'Henry', 'Zoe', 'Jackson', 'Penelope', 'Sebastian', 'Layla', 'Jack', 'Riley', 'Aiden', 'Lily', 'Samuel', 'Aria', 'David', 'Avery', 'Joseph', 'Sofia', 'Carter', 'Camila', 'Owen', 'Aurora'
// Withdrawal message rotator with 20 fixed names and messages
const withdrawalMsgs = [
  'Rishu: Withdrawal $30.00 successfully!',
  'Saanvi: Payout $45.50 successfully!',
  'Kabir: Transfer $60.25 successfully!',
  'Aarav: Payment $80.00 successfully!',
  'Vihaan: Cashout $100.00 successfully!',
  'Anaya: Funds sent $120.75 successfully!',
  'Advait: Amount paid $150.00 successfully!',
  'Myra: Withdrawal $200.00 successfully!',
  'Ishaan: Payout $250.00 successfully!',
  'Aadhya: Transfer $35.00 successfully!',
  'Chris: Payment $55.00 successfully!',
  'Ava: Cashout $70.00 successfully!',
  'Liam: Funds sent $90.00 successfully!',
  'Sophia: Amount paid $110.00 successfully!',
  'Noah: Withdrawal $130.00 successfully!',
  'Mia: Payout $160.00 successfully!',
  'Mason: Transfer $180.00 successfully!',
  'Olivia: Payment $210.00 successfully!',
  'Lucas: Cashout $230.00 successfully!',
  'Emma: Funds sent $250.00 successfully!'
];
let withdrawalMsgIdx = 0;
function showNextWithdrawalMsg() {
  const ticker = document.getElementById('withdrawal-ticker');
  if (!ticker) {
    console.error('withdrawal-ticker element not found!');
    return;
  }
  ticker.innerHTML = '';
  let msg = withdrawalMsgs[withdrawalMsgIdx];
  if (!msg) {
    msg = 'No withdrawal data available.';
    ticker.style.color = 'red';
  } else {
    ticker.style.color = '#000';
  }
  const div = document.createElement('span');
  div.className = 'ticker-message';
  div.textContent = msg;
  div.style.opacity = 0;
  ticker.appendChild(div);
  setTimeout(() => { div.style.opacity = 1; }, 50);
  withdrawalMsgIdx = (withdrawalMsgIdx + 1) % withdrawalMsgs.length;
  console.log('Ticker message:', msg);
}
function startWithdrawalMsgRotation() {
  showNextWithdrawalMsg();
  setInterval(showNextWithdrawalMsg, 2200);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startWithdrawalMsgRotation);
} else {
  startWithdrawalMsgRotation();
}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      fillTicker();
      ensureTickerVisible();
    });
  } else {
    fillTicker();
    ensureTickerVisible();
  }
    // Always enable the Watch Ad button
    var watchAdBtn = document.getElementById('watch-ad-btn');
    if (watchAdBtn) {
      watchAdBtn.disabled = false;
      watchAdBtn.addEventListener('click', function() {
        window.open('https://www.effectivegatecpm.com/dctcbjypcn?key=0ad242fdde521bd25b3b104af0599901', '_blank');
      });
    }
// Withdrawal button logic (demo only)
const withdrawBtn = document.getElementById('withdraw-btn');
if (withdrawBtn) {
  withdrawBtn.addEventListener('click', () => {
    if (balance < 20) {
      alert('Minimum withdrawal is $20.00. Your current balance is $' + balance.toFixed(2) + '.\n\nTo reach $20.00, please watch more ads.');
    } else {
      alert('Withdrawal request submitted! (Demo only)');
    }
  });
}
earnBtn.addEventListener('click', () => {
let balance = 0.0;
const watchAdBtn = document.getElementById('watch-ad-btn');
      // Withdrawal message rotator with fixed random data
      const withdrawalNames = [
        'Chris', 'Ava', 'Liam', 'Sophia', 'Noah', 'Mia', 'Mason', 'Olivia', 'Lucas', 'Emma',
        'Ethan', 'Isabella', 'Logan', 'Charlotte', 'James', 'Amelia', 'Benjamin', 'Harper',
        'Elijah', 'Evelyn', 'Alexander', 'Abigail', 'William', 'Ella', 'Michael', 'Scarlett',
        'Daniel', 'Grace', 'Matthew', 'Chloe', 'Henry', 'Zoe', 'Jackson', 'Penelope', 'Sebastian', 'Layla', 'Jack', 'Riley', 'Aiden', 'Lily', 'Samuel', 'Aria', 'David', 'Avery', 'Joseph', 'Sofia', 'Carter', 'Camila', 'Owen', 'Aurora'
      ];
      const verbs = [
        'Withdrawal', 'Payout', 'Transfer', 'Payment', 'Cashout', 'Funds sent', 'Amount paid'
      ];
      function randomAmount() {
        return (Math.random() * 229 + 21).toFixed(2);
      }
      function randomName() {
        return withdrawalNames[Math.floor(Math.random() * withdrawalNames.length)];
      }
      function randomVerb() {
        return verbs[Math.floor(Math.random() * verbs.length)];
      }
      function makeRandomMsg() {
        return `${randomName()}: ${randomVerb()} $${randomAmount()} successfully!`;
      }
      // Generate 20 random messages at load
      const withdrawalMsgs = Array.from({length: 20}, makeRandomMsg);
      let withdrawalMsgIdx = 0;
function resetAd() {
  earnBtn.disabled = true;
  timerDiv.textContent = '';
}

watchAdBtn.addEventListener('click', () => {
        div.textContent = withdrawalMsgs[withdrawalMsgIdx];
  timerDiv.textContent = `Please wait ${timeLeft} seconds...`;
  earnBtn.disabled = true;
  watchAdBtn.disabled = true;
        withdrawalMsgIdx = (withdrawalMsgIdx + 1) % withdrawalMsgs.length;
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      timerDiv.textContent = `Please wait ${timeLeft} seconds...`;
    } else {
      timerDiv.textContent = 'You can now earn!';
      earnBtn.disabled = false;
      watchAdBtn.disabled = false;
      clearInterval(timer);
    }
  }, 1000);
});

earnBtn.addEventListener('click', () => {
  balance += 0.50;
  balanceSpan.textContent = balance.toFixed(2);
  earnBtn.disabled = true;
  timerDiv.textContent = 'Reward claimed! Watch again to earn more.';
});

resetAd();